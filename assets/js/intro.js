/* $(document).ready(function(){ 
    if($( window ).width() > 1024) {
    //changes hero image on with cursor- for large devices
    $(window).on('mousemove', (function () {
        if (event.screenX < $( window ).width()*(1/5)) {
                $("#changing-background").removeClass();
                $("#changing-background").addClass('hero shadow-five');
            } 
            else if (event.screenX < $( window ).width()*(2/5)) {
                $("#changing-background").removeClass();
                $("#changing-background").addClass('hero shadow-four');
            }
            else if (event.screenX < $( window ).width()*(3/5)) {
                $("#changing-background").removeClass();
                $("#changing-background").addClass('hero shadow-three');
            }
            else if (event.screenX < $( window ).width()*(4/5)) {
                $("#changing-background").removeClass();
                $("#changing-background").addClass('hero shadow-two');
            }
            else {
                $("#changing-background").removeClass();
                $("#changing-background").addClass('hero shadow-one');
            }
        }));
        //changes hero image on scroll - for small devices
        } else {$(window).scroll(function(){
            var scroll = $(window).scrollTop();
            if (scroll <= 100) {
                $("#changing-background").removeClass();
                $("#changing-background").addClass('hero sm-shadow-one');
            }
            else if (scroll <= 200) {
                $("#changing-background").removeClass();
                $("#changing-background").addClass('hero sm-shadow-two');
            }
            else if (scroll <= 300) {
                $("#changing-background").removeClass();
                $("#changing-background").addClass('hero sm-shadow-three');
            }
            else if (scroll <= 400) {
                $("#changing-background").removeClass();
                $("#changing-background").addClass('hero sm-shadow-four');
            }
            else {
                $("#changing-background").removeClass();
                $("#changing-background").addClass('hero sm-shadow-five');
            }
        });
    } 
});  */

$(document).ready(function(){ 
    $(document).mousemove(function(event) {
        windowWidth = $(window).width();
        windowHeight = $(window).height();
        var textBackground = $('h1').css('background');
        
        mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
        mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

        shadowOneX = ((mouseXpercentage / 5) - 10)*(-1);
        shadowOneY = ((mouseYpercentage / 5) - 10)*(-1);
        shadowTwoX = ((mouseXpercentage / 10) - 5)*(-1);
        shadowTwoY = ((mouseYpercentage / 10) - 5)*(-1);

/*     	console.log("shadowOneX is: " + shadowOneX)
        console.log("shadowOneY is: " + shadowOneY)
        console.log("shadowTwoX is: " + shadowTwoX)
        console.log("shadowTwoY is: " + shadowTwoY) */
        
        $('.r-gradient').css({
            'background' : 'linear-gradient(0deg, rgba(234,234,234,1) 0%, rgba(234,234,234,1) 23%, rgba(253,253,253,0) 100%), radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #fdfdfd, #eaeaea)'
        });

        $('h1').css({
            'background' : 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #777, #000)', '-webkit-background-clip' : 'text',
            '-moz-background-clip' : 'text',
            'background-clip' : 'text'
        });

        $('.text-shadow').css({
            'text-shadow' : shadowTwoX + 'px ' + shadowTwoY + 'px ' + '3px rgba(255,255,255,0.3), ' + shadowTwoX + 'px ' + shadowTwoY + 'px ' + '4px rgba(255,255,255,0.3), ' + shadowOneX + 'px ' + shadowOneY + 'px ' + '10px rgba(255,255,255,0.3)'
        }); 
      });
}); 