/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
function navFunction() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos || window.scrollY==0)
  {
    document.getElementById("navbar").style.top = "0"
    document.getElementById("navbar-2").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-115px"
    document.getElementById("navbar-2").style.top = "-115px";
  }
  prevScrollpos = currentScrollPos;
} 

// Code for menus with transparent background
const headerDesktop = document.querySelector('.container-menu-desktop');
const headerMobile = document.querySelector('.container-menu-bar-mobile');

const stickyDesktop = headerDesktop.offsetTop +300;
const stickyMobile = headerDesktop.offsetTop  +300;

function swapMenuStyle() {
    if (window.pageYOffset > stickyDesktop) {
        headerDesktop.classList.add("menu-light");
        headerDesktop.classList.remove("menu-transparent");
        headerMobile.classList.add("menu-light");
        headerMobile.classList.remove("menu-transparent");

    } else {
        headerDesktop.classList.add("menu-transparent");
        headerDesktop.classList.remove("menu-light");
        headerMobile.classList.add("menu-transparent");
        headerMobile.classList.remove("menu-light");
    }
}

// Back to Top Script
  //window.scrollTo({ top: 0, behavior: 'smooth' });
  const UpArrow = document.querySelector('.back-to-top');
  const stickyUpArrow = UpArrow.offsetTop +400;
 
  function ToggleBackToHome() {
    if (window.pageYOffset > stickyUpArrow) {
        UpArrow.classList.add("display-block");  
        UpArrow.classList.remove("display-none");
  
    } else {
          UpArrow.classList.add("display-none"); 
          UpArrow.classList.remove("display-block");
      }
  }

// Calling All Functions above
window.onscroll = function() {
navFunction();
swapMenuStyle();
ToggleBackToHome();
};

// Code to detect click of option within fly-out menu
let specifiedElement = document.querySelector('.flyout-menu');
document.addEventListener('click', function(event) {
    var isClickInside = specifiedElement.contains(event.target);
    //If link is within current web page
    if (isClickInside) {
        //Get id of anchor
        let anchor_id = window.location.hash;
        //Add extra spacing above anchor
        let elemAnchor = document.querySelector(anchor_id)
        elemAnchor.classList.add('sticky-anchor');
        //Close fly-out menu
        toggleMobileMenu();
    }
    else {
        return;
    }
});

// Code to show/hide fly-out mobile menu -->
document.querySelector('.item-icon').addEventListener('click', toggleMobileMenu)
const pageContainer = document.querySelector('.page-container');

function toggleMobileMenu() {
    //toggle hamburger icon
    const elemIcon = document.querySelector('.item-icon');
    elemIcon.classList.toggle("change");
    const elemHTML = document.querySelector('html');
    const elemBody = document.querySelector('body');            
    const elemFlyOut = document.querySelector('.flyout-menu');

    //if fly-out menu is currently closed, open it.
    if (elemIcon.classList.contains('change')) {
        elemFlyOut.classList.remove('flyout-menu-is-closed');
        elemFlyOut.classList.add('flyout-menu-is-open');
        elemHTML.classList.add('no-scroll');
        elemBody.classList.add('no-scroll');
    }    
    //if fly-out menu is currently open, close it.
    else {
        elemFlyOut.classList.remove('flyout-menu-is-open');
        elemFlyOut.classList.add('flyout-menu-is-closed');
        elemHTML.classList.remove('no-scroll');
        elemBody.classList.remove('no-scroll');                                
    }
}

//Removes hastags from internal links
$(window).on('hashchange', function(e){
    history.replaceState ("", document.title, e.originalEvent.oldURL);
});

//Auto Set vilume to 50%
$("video").prop("volume", 0.5);