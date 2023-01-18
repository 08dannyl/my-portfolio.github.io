/*
========================
        NAV BAR
=======================
*/

const navLinks = document.querySelectorAll('.nav-link');
const welcomeSection = document.querySelector('#welcome-section');
const projectsSection = document.querySelector('#projects');
const contactSection = document.querySelector('#contact');

navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    if (href === '#background') {
      welcomeSection.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#projects') {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    } else if (href === '#contact') {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


/*
=======================
    ABOUT SECTION
=======================
*/
// set up text to print, each item in array is new line
var aText = document.getElementById("typed").innerHTML.split("\n");
var iSpeed = 10; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[iIndex].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
    
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
    
function typewriter() {
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("typed");
    
    while ( iRow < iIndex ) {
        sContents += aText[iRow++];
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
    if ( iTextPos++ == iArrLength ) {
        iTextPos = 0;
        iIndex++;
        if ( iIndex != aText.length ) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 1);
        }
    } else {
      setTimeout("typewriter()", iSpeed);
    }
}

typewriter();
    

