(function(){
  let slideIndex = 1;
  let autoSlideInterval = null;

  function lr_init(){
    console.debug('latestReview: init');
    const slides = document.getElementsByClassName('homeslide');
    if(slides.length === 0){
      return;
    }

    lr_showSlides(slideIndex);
    lr_startAutoSlide();
    const container = document.querySelector('.latestReviewsContainer');
    if(container){
      container.addEventListener('mouseenter', lr_pauseAutoSlide);
      container.addEventListener('mouseleave', lr_startAutoSlide);
    }
  }
  function lr_plusSlides(n){
    lr_showSlides(slideIndex += n);
  }
  function lr_currentSlide(n){
    lr_showSlides(slideIndex = n);
  }
  function lr_showSlides(n){
    const slides = document.getElementsByClassName('homeslide');
    const dots = document.getElementsByClassName('dot');
    if(!slides || slides.length === 0) return;
    if(n > slides.length) slideIndex = 1;
    if(n < 1) slideIndex = slides.length;
    for(let i = 0; i < slides.length; i++){
      slides[i].style.display = 'none';
    }
    for(let i = 0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace(' active','');
    }
    slides[slideIndex - 1].style.display = 'block';
    if(dots[slideIndex - 1]) dots[slideIndex - 1].className += ' active';
  }
  function lr_startAutoSlide(){
    lr_stopAutoSlide();
    autoSlideInterval = setInterval(()=>{ lr_plusSlides(1); }, 8000);
  }
  function lr_stopAutoSlide(){
    if(autoSlideInterval){
      clearInterval(autoSlideInterval);
      autoSlideInterval = null;
    }
  }
  function lr_pauseAutoSlide(){
    lr_stopAutoSlide();
  }
  window.lr_plusSlides = lr_plusSlides;
  window.lr_currentSlide = lr_currentSlide;
  window.lr_startAutoSlide = lr_startAutoSlide;
  window.lr_stopAutoSlide = lr_stopAutoSlide;
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', lr_init);
  } else {
    lr_init();
  }
})();