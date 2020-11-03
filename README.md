# Online Portfolio | Neil Carder 

This project is aimed at developing and learning front-end web-development using my previous work-experience/hobbies as the content. I will be continuously updating this project as I learn more. 

## Technologies
Site was built using below tools:
- Site uses HTML, CSS and JavaScript files
- Jquerey
- Node.js with browsersync needed if locally running photography.html

## Files & directories
Files and directories are farily simply layed out. All html locations are in the root folder. Images, CSS and JS files can be found in their folder locations under the Assets folder. 

![Directory Diagram](https://github.com/neilcarder/neilcarder.github.io/blob/main/assets/images/readme/directory.jpg)

**CSS techniques**
about.html and architecture.html contain a combiantion of GRID and FLEXBOX. Each page layout can be found in their respective CSS file (e.x about.html and about.css). The photography page uses flexbox but also uses tjgallery.js to arrange the image layout of stills.html.

The page layout for index.html can be found in the world.css.

Almost all css is local execpt for the cookies consent message, the animate library for the photography page and font awesome Icons.

**Source JS files**
JS Local files can be found in assets/js/file.js.

Other JS Sources include:
 - Jquerey 3.2.1 
 - Google Analytics (in header of each html)
 - Cookie Consent Message
 - waitForImages (this lets the AJAX request fully load before TJGallery.js is run)

## Setup
Page is mainly front-end so most html files will run straight from a local directory once downloaded.

Note: Node.js needs to be used locally only for the photography(and soon to be blog) page as there is an Ajax request in photo-content.js.  

## Credits
Built & designed by Neil Carder.
