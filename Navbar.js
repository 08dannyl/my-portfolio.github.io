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