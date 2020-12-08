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
    $.get('blog/blog-thumb-vid.html', function(data){
        thumbSnippetVid = data;
    });

    var thumbSnippetImg;
    $.get('blog/blog-thumb-img.html', function(data){
        thumbSnippetImg = data;
    });

    var postSnippetVid;
    $.get('blog/blog-post-vid.html', function(data){
        postSnippetVid = data;
    });

    var postSnippetImg;
    $.get('blog/blog-post-img.html', function(data){
        postSnippetImg = data;
    });

    function closeWhenClick() {
        if ($(window).width() < 769) {
            $( ".nav-box" ).removeClass( "nav-box-is-open" ).addClass( "nav-box-is-closed" );
            $('.directory-slide').removeClass( "change" ).text('Entries');
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
                $('#directory').append('<a href="#">' + item.date + '</a>');
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
                            
                            if (fileExtension == 'webm'){
                                    let fillSnippet = postSnippetVid.replaceAll("{date}", data[arrindex].date).replaceAll("{title}", data[arrindex].title).replaceAll("{post}", data[arrindex].post).replaceAll("{image}", data[arrindex].images);
                                    $("#content").html(fillSnippet);
                            } else if (fileExtension == 'jpg' || 'png') {
                                    let fillSnippet = postSnippetImg.replaceAll("{date}", data[arrindex].date).replaceAll("{title}", data[arrindex].title).replaceAll("{post}", data[arrindex].post).replaceAll("{image}", data[arrindex].images);
                                    $("#content").html(fillSnippet);
                            }
                        });

                        $("#content div").click(function(){                         
                            let arrindex = ($(this).index()-1);
                            fileName = data[arrindex].images;
                            fileExtension = fileName.replace(/^.*\./, '');

                            if (fileExtension == 'webm'){
                                let fillSnippet = postSnippetVid.replaceAll("{date}", data[arrindex].date).replaceAll("{title}", data[arrindex].title).replaceAll("{post}", data[arrindex].post).replaceAll("{image}", data[arrindex].images);
                                $("#content").html(fillSnippet);
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
                $.get('blog/blog-header.html', function(data){
                    $("#content").prepend(data);
                });
                loadMainPage();
                closeWhenClick();
            });
        });
    
    // Pop-out directory for mobiles
    document.querySelector('.directory-slide').addEventListener('click', toggleMobileMenu)

    function toggleMobileMenu() {
        //toggle hamburger icon
        const elemIcon = document.querySelector('.directory-slide');
        elemIcon.classList.toggle("change");
        const elemHTML = document.querySelector('html');
        const elemBody = document.querySelector('body');            
        const elemFlyOut = document.querySelector('.nav-box');

        //if fly-out menu is currently closed, open it.
        if (elemIcon.classList.contains('change')) {
            elemFlyOut.classList.remove('nav-box-is-closed');
            elemFlyOut.classList.add('nav-box-is-open');
            elemHTML.classList.add('no-scroll');
            elemBody.classList.add('no-scroll');
            elemIcon.textContent="Close";    
        }    
        //if fly-out menu is currently open, close it.
        else {
            elemFlyOut.classList.remove('nav-box-is-open');
            elemFlyOut.classList.add('nav-box-is-closed');
            elemHTML.classList.remove('no-scroll');
            elemBody.classList.remove('no-scroll');
            elemIcon.textContent="Entries";
        }
    } 

}); 