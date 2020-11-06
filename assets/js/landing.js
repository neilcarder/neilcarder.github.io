$(document).ready(function(){
    //creates animation instead of cursor follow for Landing page
    if($( window ).width() < 1024) {

            let count = 0, countup = true;
            var interval = setInterval(function() {
            
                if ($(window).scrollTop() < 400) { //stops loop on scroll. 
                    //reverses count when count id done. 
                    if (countup)
                    {
                    ++count;
                      if (count >= 99)
                      countup = false;
                    }
                      else
                    {
                    --count;
                          if (count <= 0)
                          countup = true;
                    }
                }

              let textCount = ((count / 10) - 5)*(-1); //converts count to a pixel number for shadows
              let textCount2 = ((count / 5) - 10)*(-1); //converts count to a pixel number for shadows

              $('.r-gradient').css({'background' : 'linear-gradient(0deg, rgba(234,234,234,1) 0%, rgba(234,234,234,1) 23%, rgba(253,253,253,0) 100%), radial-gradient(at ' + count + '% ' + '50%, #fdfdfd, #eaeaea)'});
              $('h1').css({
                'background' : 'radial-gradient(at ' + count + '% ' + '50%, #777, #000)', 
                '-webkit-background-clip' : 'text',
                '-moz-background-clip' : 'text',
                'background-clip' : 'text',
              });
              $('.text-shadow').css({
                'text-shadow' : textCount + 'px ' + '3px  3px rgba(255,255,255,0.3), ' + textCount + 'px ' + '3px 4px rgba(255,255,255,0.3), ' + textCount2 + 'px ' + '5px 10px rgba(255,255,255,0.3)'
                }); 
            }, 30);

    } else {
     
        //creates shadow and gradients based on mouse location
        $(document).mousemove(function(event) {
            windowWidth = $(window).width();
            windowHeight = $(window).height();
            
            //turns mouse location into percentage
            mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
            mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

            if (mouseYpercentage > 100){
              mouseYpercentage = 100;
            };
    
            //turns mouse percentage into manageable pixel size for shadows
            shadowOneX = ((mouseXpercentage / 5) - 10)*(-1);
            shadowOneY = ((mouseYpercentage / 5) - 10)*(-1);
            shadowTwoX = ((mouseXpercentage / 10) - 5)*(-1);
            shadowTwoY = ((mouseYpercentage / 10) - 5)*(-1);
    
            //testing size of converted numbers
    /*     	console.log("shadowOneX is: " + shadowOneX)
            console.log("shadowOneY is: " + shadowOneY)
            console.log("shadowTwoX is: " + shadowTwoX)
            console.log("shadowTwoY is: " + shadowTwoY) */
            
            //changes gradient class for background based on mouse location
            $('.r-gradient').css({
                'background' : 'linear-gradient(0deg, rgba(234,234,234,1) 0%, rgba(234,234,234,1) 23%, rgba(253,253,253,0) 100%), radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #fdfdfd, #eaeaea)'
            });
    
            //changes gradient class for text based on mouse location
            $('h1').css({
                'background' : 'radial-gradient(at ' + mouseXpercentage + '% ' + mouseYpercentage + '%, #777, #000)', '-webkit-background-clip' : 'text',
                '-moz-background-clip' : 'text',
                'background-clip' : 'text'
            });
    
            //changes text shadow loaction based on mouse location
            $('.text-shadow').css({
                'text-shadow' : shadowTwoX + 'px ' + shadowTwoY + 'px ' + '3px rgba(255,255,255,0.3), ' + shadowTwoX + 'px ' + shadowTwoY + 'px ' + '4px rgba(255,255,255,0.3), ' + shadowOneX + 'px ' + shadowOneY + 'px ' + '10px rgba(255,255,255,0.3)'
            }); 
          });
    }
}); 




//

 /*      //funtion which performs actions from the for loops
        function task(i) { 
            setTimeout(function() {
                n=(i-10); 
            }, 200 * i); 
           }  
         function task2(i) { 
            setTimeout(function() {
                n2=(-i+30);
                console.log(n2); 
            }, 200 * i); 
           } 

        //runs set of numbers before interval
        for (let i=0; i<=40; i++) { 
            if (i < 20) {
                task(i);
                console.log(n);
              } else {
                task2(i)
              }
         }

         console.log(result);

         //Resets the for loop
            window.setInterval(function () { 
                for (let i=0; i<=40; i++) { 
                    if (i < 20) {
                        task(i);
                      } else {
                        task2(i)
                      }
                    }
            }, 9000); */