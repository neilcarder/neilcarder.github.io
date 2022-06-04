$(document).ready(function(){
        if($(window).width() < 1024) {
                    $(window).scroll(function(event){
                        $(".circle").addClass("switch color-change");
                        $(".circle").removeClass("color");
                        $(".wave-3").addClass("circle-bg");
                        $(".hero h1").removeClass("inset");
                        $(".hero h1").addClass("outset");
                    });
        } else {
            $(".hero h1, .cta").on("mouseenter", function() {
                $(".circle").addClass("switch color-change");
                $(".circle").removeClass("color");
                $(".wave-1").addClass("scale3");
                $(".wave-3").addClass("scale1 circle-bg");
                $(".wave-2, .wave-4").addClass("scale2");
                $(".hero h1").removeClass("inset");
                $(".hero h1").addClass("outset");
            }).on("mouseleave", function() {
                $(".circle").addClass("color");
                $(".circle").removeClass("switch color-change");
                $(".wave-1").removeClass("scale3");
                $(".wave-3").removeClass("scale1 circle-bg");
                $(".wave-2, .wave-4").removeClass("scale2");
                $(".hero h1").removeClass("outset");
                $(".hero h1").addClass("inset");
            });
        }
}); 