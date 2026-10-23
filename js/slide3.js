
var slideIndex = 1;
var slideInterval = setInterval(nextSlide, 10000);
showSlides(slideIndex);

function nextSlide() {
  showSlides(slideIndex += 1);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var prevButton = document.querySelector(".prev");
prevButton.addEventListener("click", function() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 10000);
});

var nextButton = document.querySelector(".next");
nextButton.addEventListener("click", function() {
  clearInterval(slideInterval);
  slideInterval = setInterval(nextSlide, 10000);
});

document.addEventListener("touchstart", handleTouchStart, false);        
document.addEventListener("touchmove", handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */ 
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 10000);
            plusSlides(-1);
        } else {
            /* right swipe */
            clearInterval(slideInterval);
            slideInterval = setInterval(nextSlide, 10000);
            plusSlides(1);
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */ 
        } else { 
            /* down swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};