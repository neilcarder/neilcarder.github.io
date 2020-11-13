//Photography scripts
$(document).ready(function() {

    // Shows and Hides Spinner for AJAX Requests
     $.ajaxSetup({
        beforeSend: function(xhr, status) {
            // TODO: show spinner
            $('#spinner').show();
        },
        complete: function() {
            // TODO: hide spinner
            $('#spinner').hide();
        }
    });

    //variable for Lightbox Gallery
    var gallery = new SimpleLightbox('.content a', {});

    //Content of first load
    $("#content").load("snippets/stills.html", function() {
        // wait until image content is loaded....
        $("#content").waitForImages(function() {
            $('.stills').tjGallery()(function() {
            });     
        });
        gallery.refresh(); //destroys and rebuilds LightBox Gallery
    });
    
    // *****My version of a Lazy load script*****
    var snippets = ['two', 'three', 'four', 'five', 'six'], //array for snippet files
    counter = -1; //starts the counter at "two" becasue of counter + 1 

    $(window).scroll(function() {    
        var scrollToBottom = $(window).scrollTop() == ($(document).height() - $(window).height()); // when scroll gets to bottom of page
        //$(window).scrollTop() + $(window).height() > $(document).height() - 100
        //$(window).scrollTop() == ($(document).height() - $(window).height())
        //Lazy Load for Stills Section
        if ((scrollToBottom) && $("*").hasClass('stills')) { //when scroll reaches bottom and has the right class of .stills
            if(counter == 4){
                // If max html-files reached, Do Nothing
                counter = counter
            } else {
                counter = (counter + 1) // increment the counter - Add % snippets.length; to reset the counter to 0  
                snippetNumber = snippets[counter]; // changes the array item for each count
                $.get("snippets/stills-" + snippetNumber + ".html", function(data){ //fecthes next Snippet in Line
                    $("#content").append(data); //adds data into the photo content section
                    $("#content").waitForImages(function() { //applies Image layout after all images have been loaded
                        $('.stills.' + snippetNumber).tjGallery();
                    });
                    gallery.refresh(); //destroys and rebuilds LightBox Gallery
            }); 
        } 
        //Lazy Load for Montage Section
        } else if ((scrollToBottom) && $("*").hasClass('montage-flex')) { //when scroll reaches bottom and has the right class of montage-flex
            if(counter == 3){
                // If max html-files reached, Do Nothing
                counter = counter
            } else {
                counter = (counter + 1) // increment the counter - Add % snippets.length; to reset the counter to 0  
                snippetNumber = snippets[counter]; // 
                //console.log(snippets[counter]); // checks the new incremented value
                $.get("snippets/joiners-" + snippetNumber + ".html", function(data){ //fecthes next Snippet in Line
                    $(".montage-flex").append(data); //adds data into the photo content section     
                }); 
            } 
        }
    });

    //Loading Stills Content on Click script - Only Loads the first Snippet
    $('.still-content').on('click', function() {
        $("#content").load("snippets/stills.html", function() {
            $("*").removeClass("joiners"); // Needed for Lazy loader
            // wait until image content is loaded....
            $("#content").waitForImages(function() {
                $('.stills').tjGallery();
            });
            gallery.refresh(); //destroys and rebuilds LightBox Gallery
            counter = -1; //resets the counter if user has previously scrolled through
        });
    });

    //Loading Joiner Content on Click script - Only Loads the first Snippet
    $('.joiner-content').click(function() {
        $("*").removeClass("stills"); //ensures class is removed for the lazy Loading loading statment to work
        $("#content").load("snippets/joiners.html");
        counter = -1; //resets the counter if user has previously scrolled through
    });

    //Toggle Active Settings - Stills and Montage
    $('#toggleActive a').on('click', function(){
        $('a.current').removeClass('current');
        $(this).addClass('current');
    });

    //Dissable Right click over images
    $(document).on('contextmenu', 'img', function(e){
        return false;
      });
});