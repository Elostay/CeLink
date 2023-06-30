// function myFunction() {
//   var element = document.getElementById('slider-delete');
//   element.classList.remove('prizes-slider');
// }

// if ((minWidth = 750)) {
//   var element = document.getElementById('slider-delete');
//   element.classList.remove('prizes-slider');
// }
// function screenClass() {
//   if (Width() > 749) {
//     var element = document.getElementById('slider-delete');
//     element.classList.remove('prizes-slider');
//   }
// }

// Get the media query list
// var mediaQueryList = window.matchMedia('(min-width: 750px)');

// // Define a function to handle the media query change
// function handleMediaQueryChange(event) {
//   if (event.matches) {
//     // Media query matches, remove the class
//     var element = document.getElementById('slider-delete'); // Replace 'your-element-id' with the actual ID of the element
//     element.classList.remove('prizes-slider');
//   }
// }

// // Add event listener to the media query list
// mediaQueryList.addListener(handleMediaQueryChange);

// // Initial check for the media query
// handleMediaQueryChange(mediaQueryList);
// Define a function to handle the window resize event
// function handleWindowResize() {
//   if (window.innerWidth >= 750) {
//     // Window width is greater than or equal to 750px, remove the class
//     var element = document.getElementById('slider-delete');
//     element.classList.remove('prizes-slider');
//   } else {
//     // Window width is less than 750px, add the class back (optional)
//     var element = document.getElementById('slider-delete');
//     element.classList.add('prizes-slider');
//   }
// }

// // Attach event listener to the window resize event
// window.addEventListener('resize', handleWindowResize);

// // Initial check on page load
// handleWindowResize();

// function handleWindow() {
//   if (window.innerWidth >= 750) {
//     // Window width is greater than or equal to 750px, remove the class
//     var element = document.getElementById('slider-delete2');
//     element.classList.remove('swiper-wrapper');
//   } else {
//     // Window width is less than 750px, add the class back (optional)
//     var element = document.getElementById('slider-delete2');
//     element.classList.add('swiper-wrapper');
//   }
// }

// // Attach event listener to the window resize event
// window.addEventListener('resize', handleWindowResize);

// // Initial check on page load
// handleWindow();
document.addEventListener('DOMContentLoaded', function () {
  var element = document.getElementById('slider-delete');

  function handleWindowResize() {
    if (window.innerWidth >= 750) {
      element.classList.remove('prizes-slider');
    } else {
      element.classList.add('prizes-slider');
    }
  }

  window.addEventListener('resize', handleWindowResize);

  handleWindowResize();
});
