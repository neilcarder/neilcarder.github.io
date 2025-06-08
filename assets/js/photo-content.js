//Photography scripts

$(document).ready(function() {

    // Shows and Hides Spinner for AJAX Requests
     $.ajaxSetup({
        beforeSend: function(xhr, status) {
            // TODO: show spinner
            $("#spinner").show();
            //setTimeout(($("#spinner").hide()), 4000);
        },
        complete: function() {
            // TODO: hide spinner
            $("#spinner").hide();
        }
    });

    // Settings for the Justified Gallery Script
    var galleryDetails = $('#content').justifiedGallery({
        margins : 8, 
        rowHeight : 325,
        captions : false,
    });

    //variable for Lightbox Gallery
    var gallery = new SimpleLightbox(".content a", {});

    //Content of first load
    $("#content").load("snippets/stills.html", function() {
        galleryDetails;
        $('#content').justifiedGallery('norewind');
        gallery.refresh(); //destroys and rebuilds LightBox Gallery
    });

    // *****My version of a Lazy load script*****

    var snippets = ['two', 'three', 'four', 'five', 'six'], //array for html snippet files
    counter = -1; //starts the counter at "two" becasue of (counter + 1) in loadAction

    function getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }

    //Lazy Load Function
    function loadAction() {
        var scrollToBottom =($(window).scrollTop() + $(window).height() >= (getDocHeight() - 500));

        if ((scrollToBottom) && $("*").hasClass("stills")) { //when scroll reaches bottom and has the right class of .stills
            if(counter == 4){
                // If max html-files reached, Stop counting
                counter = counter
            } else {
                $(window).off("scroll"); // Performs the action only once.
                counter = (counter + 1); // increment the counter - Add % snippets.length; to reset the counter to 0  
                snippetNumber = snippets[counter]; // changes the array item for each count
                $.get("snippets/stills-" + snippetNumber + ".html", function(data){ //fecthes next Snippet in Line
                    $("#content").append(data); //adds data into the photo content section
                        // The action below resets the scroll action on the lazy load
                        $(window).scroll(function() {    
                            loadAction(); 
                            //console.log(toggle);
                    });
                    gallery.refresh(); //destroys and rebuilds LightBox Gallery
                    $('#content').justifiedGallery('norewind'); 
                });     
            } 
        //Lazy Load for Montage Section
        } else if ((scrollToBottom) && $("*").hasClass("montage-flex")) { //when scroll reaches bottom and has the right class of montage-flex
            if(counter == 3){
                // If max html-files reached, Stop Counting
                counter = counter
            } else {
                $(window).off("scroll");
                counter = (counter + 1); // increment the counter - Add % snippets.length; to reset the counter to 0  
                snippetNumber = snippets[counter]; // changes the array item for each count
                $.get("snippets/joiners-" + snippetNumber + ".html", function(data){ //fecthes next Snippet in Line
                    $(".montage-flex").append(data); //adds data into the photo content section
                    // The action below resets the scroll action on the lazy load
                    $(window).scroll(function() {    
                        loadAction();
                    });    
                }); 
            }
        } 
    }

    // First call of the Lazy Load Function above
    $(window).scroll(function() {    
        loadAction();
    });

    // *****End Lazy load script*****

    //Loading Stills Content on Click script - Only Loads the first Snippet
    $(".still-content").on("click", function() {
        if($("#content").hasClass("joiners")) {
            $("#content, #footer").hide();
            $("#content").load("snippets/stills.html", function() {
                $("*").removeClass("joiners auto-height"); // Needed for Lazy loader
                $(this).addClass("stills justified-gallery");
                gallery.refresh(); //destroys and rebuilds LightBox Gallery
                $('#content').justifiedGallery('norewind'); //Runs Justified Gallery
                $("#content, #footer").show();
                counter = -1; //resets the counter if user has previously scrolled through
            });
        }      
        });

    //Loading Joiner Content on Click script - Only Loads the first Snippet
    $(".joiner-content").click(function() {
        $("#content, #footer").hide();
        $("#content").justifiedGallery('destroy'); //allows montage content to load properly
            $("#content").load("snippets/joiners.html", function(){
                $("#content, #footer").show();
            });
            $("#content").removeClass("stills justified-gallery");
            $("#content").addClass("auto-height joiners"); //Quick fix for height issue with Justified Gallery    
            counter = -1; //resets the counter if user has previously scrolled through
    });

    

    //Toggle Active Settings - Stills and Montage
    $("#toggleActive a").on("click", function(){
        $("a.current").removeClass("current");
        $(this).addClass("current ");
    });

    //Dissable Right click over images
    $(document).on("contextmenu", "img", function(e){
        return false;
      });

});