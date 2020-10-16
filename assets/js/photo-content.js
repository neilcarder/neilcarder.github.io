//Photgraphs scripts
$(document).ready(function() {

    //Places Loading Spinner during Ajax Actions
    $(function() {
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
    
        $('#foo').click(function() {
            // because we have overriden the global AJAX settings
            // the spinner will be shown during the request
            $('#content').load('b.php #abc');
        });
    });

    //Content of first load
    $("#content").load("snippets/stills.html");
    
    //Loading Content on Click script
    $('.still-content').on('click', function() {

        $("#content").load("snippets/stills.html");
    })

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
