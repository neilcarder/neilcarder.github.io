//This is Colour change on Scroll

$(function() {
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll > 85) {
                $(".wave-1").removeClass("wave-play");
                $(".circle").addClass("switch color-change");
                $(".circle").removeClass("color");
                $(".wave-1").addClass("scale3");
                $(".wave-3").addClass("scale1 circle-bg");
                $(".wave-2, .wave-4").addClass("scale2");
                $(".hero h1").removeClass("inset");
                $(".hero h1").addClass("outset");
                $(".wave-1, .wave-2, .wave-3").removeClass("wave-play");
                $(".wave-1, .wave-2, .wave-3").addClass("wave-pause");              
                
        } else {
                $(".circle").addClass("color");
                $(".circle").removeClass("switch color-change");
                $(".wave-1").removeClass("scale3");
                $(".wave-3").removeClass("scale1 circle-bg");
                $(".wave-3").addClass("scale0");
                $(".wave-2, .wave-4").removeClass("scale2");
                $(".hero h1").removeClass("outset");
                $(".hero h1").addClass("inset");
                $(".wave-1, .wave-2, .wave-3").removeClass("wave-pause");
                $(".wave-1, .wave-2, .wave-3").addClass("wave-play");

                
        }
    });
});
