window.addEventListener('DOMContentLoaded', function() {
  var isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

  if (isMobile) {
    var imageElement = document.querySelector('.image-position img[src="./img/front-page.png"]');
    if (imageElement) {
      var imageContainer = imageElement.parentNode;
      imageContainer.remove();
    }

    var h1Element = document.querySelector('h1');
    if (h1Element) {
      h1Element.classList.remove('font-size');
      h1Element.classList.add('font-mobile');
    }
  }
});
