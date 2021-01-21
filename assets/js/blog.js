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

    var blogPost = "blog/posts.json";

    var thumbSnippetVid;
    $.get('blog/templates/blog-thumb-vid.html', function(data){
        thumbSnippetVid = data;
    });

    var thumbSnippetImg;
    $.get('blog/templates/blog-thumb-img.html', function(data){
        thumbSnippetImg = data;
    });

    var postSnippetVid;
    $.get('blog/templates/blog-post-vid.html', function(data){
        postSnippetVid = data;
    });

    var postSnippetImg;
    $.get('blog/templates/blog-post-img.html', function(data){
        postSnippetImg = data;
    });

    function closeWhenClick() {
        if ($(window).width() < 769) {
            $( ".nav-box" ).removeClass( "nav-box-is-open" ).addClass( "nav-box-is-closed" );
            $('.directory-tab').removeClass( "change" ).text('Entries');
            $('body').removeClass('no-scroll');
            $('html').removeClass('no-scroll');
        }
        else {
            //do nothing
        }
    }
    
        $.getJSON( blogPost, function(data) {

            count = data.length;

            $.each(data, function(index,item) {
                //loads side bar dates with ID
                $('#directory').append(`<a href="#" id="${item.date}">${item.date}</a>`);
            });
        
            function loadMainPage() {
                $.each(data, function(index,item) {
                    
                    var fileName, fileExtension;
                    fileName = item.images;
                    fileExtension = fileName.replace(/^.*\./, '');

                    if (fileExtension == 'webm'){
                        let fillSnippet = thumbSnippetVid.replaceAll("{date}", item.date).replaceAll("{title}", item.title).replaceAll("{image}", item.images);
                        $("#content").append(fillSnippet);
                        $("#content").ready(function () {
                            $("#content video").on("mouseover", function(event) {
                                this.play();
                                }).on('mouseout', function(event) {
                                this.pause();
                            });
                        });
                        
                    } else if (fileExtension == 'jpg' || 'png'){
                            let fillSnippet = thumbSnippetImg.replaceAll("{date}", item.date).replaceAll("{title}", item.title).replaceAll("{image}", item.images);
                            $("#content").append(fillSnippet);
                    } 

                    if (!--count){

                        $("#directory a").click(function(){
                            let arrindex = $(this).index();
                            fileName = data[arrindex].images;
                            fileExtension = fileName.replace(/^.*\./, '');
    
                            closeWhenClick();
                
                            $("a.current").removeClass("current");
                            $(this).addClass("current");
                            
                            if (fileExtension == 'webm'){
                                    let fillSnippet = postSnippetVid.replaceAll("{date}", data[arrindex].date).replaceAll("{title}", data[arrindex].title).replaceAll("{post}", data[arrindex].post).replaceAll("{image}", data[arrindex].images);
                                    $("#content").html(fillSnippet);
                                    $("video").prop("volume", 0.2);
                            } else if (fileExtension == 'jpg' || 'png') {
                                    let fillSnippet = postSnippetImg.replaceAll("{date}", data[arrindex].date).replaceAll("{title}", data[arrindex].title).replaceAll("{post}", data[arrindex].post).replaceAll("{image}", data[arrindex].images);
                                    $("#content").html(fillSnippet);
                            }
                        });

                        $("#content div").click(function(){
                            let arrindex = ($(this).index()-1);
                            let childNumber = $(this).index();
                            fileName = data[arrindex].images;
                            fileExtension = fileName.replace(/^.*\./, '');

                            $(`.directory :nth-child(${childNumber})`).addClass("current");

                            if (fileExtension == 'webm'){
                                let fillSnippet = postSnippetVid.replaceAll("{date}", data[arrindex].date).replaceAll("{title}", data[arrindex].title).replaceAll("{post}", data[arrindex].post).replaceAll("{image}", data[arrindex].images);
                                $("#content").html(fillSnippet);
                                //Any Audio Set volume to 50%
                                $("video").prop("volume", 0.2);
                            } else if (fileExtension == 'jpg' || 'png') {
                                let fillSnippet = postSnippetImg.replaceAll("{date}", data[arrindex].date).replaceAll("{title}", data[arrindex].title).replaceAll("{post}", data[arrindex].post).replaceAll("{image}", data[arrindex].images);
                                $("#content").html(fillSnippet); 
                            }
                            
                        });
                    };
                });
            };
            loadMainPage();

            $("#start").click(function(){ 
                count = data.length;
                $("#content").empty();
                $("a.current").removeClass("current");
                $.get('blog/templates/blog-header.html', function(data){
                    $("#content").prepend(data);
                });
                loadMainPage();
                closeWhenClick();
            });
        });

    // Code Below is For Mobile Directory Tab
    $('.directory-tab').on('click', function(){
        $( '.directory-tab' ).toggleClass('change');
        
        //if fly-out menu is currently closed, open it.
        if ($( '#testing' ).hasClass('change')) {
            $('.nav-box').removeClass('nav-box-is-closed');
            $('.nav-box').addClass('nav-box-is-open');
            $('html').addClass('no-scroll');
            $('body').addClass('no-scroll'); 
            $('.directory-tab').html('Close');
        }    
        //if fly-out menu is currently open, close it.
        else {
            $('.nav-box').addClass('nav-box-is-closed');
            $('.nav-box').removeClass('nav-box-is-open');
            $('html').removeClass('no-scroll');
            $('body').removeClass('no-scroll');
            $('.directory-tab').html('Entries');
        }
    });
}); 
