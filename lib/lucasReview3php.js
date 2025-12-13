let slideIndexReview = 1;
showSlides(slideIndexReview);

function plusSlides(n) {
  showSlides(slideIndexReview += n);
}

function currentSlide(n) {
  showSlides(slideIndexReview = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("homeslidesreview");
  let dots = document.getElementsByClassName("dotreview");
  if (n > slides.length) {slideIndexReview = 1}    
  if (n < 1) {slideIndexReview = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexReview-1].style.display = "block";  
  dots[slideIndexReview-1].className += " active";
}