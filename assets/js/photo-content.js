 //Photgraphs scripts
$(document).ready(function() {

    // set global ajax options:
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

    //Content of first load
    $("#content").load("snippets/stills.html", function() {
        // wait until image content is loaded....
        $("#content").waitForImages(function() {
            $('.stills').tjGallery();
        });
    });

    //Loading Content on Click script
    $('.still-content').on('click', function() {
        $("#content").load("snippets/stills.html", function() {
            // wait until image content is loaded....
            $("#content").waitForImages(function() {
                $('.stills').tjGallery();
            });
        });
    });

    $('.joiner-content').click(function() {
        $("#content").load("snippets/joiners.html");
    });

    //Toggle Active Settings
    $('#toggleActive a').on('click', function(){
        $('a.current').removeClass('current');
        $(this).addClass('current');
    });

    //Dissable Right click over images
    $('#content').on('contextmenu', 'img', function(e){
        return false;
      });

});