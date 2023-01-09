const envelopeButton = document.querySelector('#envelope-button');
const popupForm = document.querySelector('#popup-form');
const overlay = document.querySelector('#overlay');

envelopeButton.addEventListener('click', function() {
  popupForm.style.display = 'block';
  overlay.style.display = 'block';
});

popupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  popupForm.style.display = 'none';
  overlay.style.display = 'none';
  alert('Your message has been sent!');
});