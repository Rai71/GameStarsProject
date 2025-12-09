let darkmode = localStorage.getItem("darkmode")
let darkmodeBTN = document.getElementById("darkModeBTN")
const gif = document.getElementById("gifImage")
const waves = document.querySelectorAll("footer .wave")

function enableDarkMode(){
  document.body.classList.add("darkmode")
  localStorage.setItem("darkmode", "active")
  gif.src = "images/darkModeBackground.gif";
  waves.forEach(wave => {
    wave.style.backgroundImage = "url('/images/darkModeWave.png')";
  });
}

function disableDarkmode(){
  document.body.classList.remove("darkmode")
  localStorage.setItem("darkmode", "null")
  gif.src = "images/lightModeBackground.gif"
  waves.forEach(wave => {
    wave.style.backgroundImage = "url('/images/lightModeWave.png')";
  });
}


darkmodeBTN.addEventListener("click", function(){
  darkmode = localStorage.getItem("darkmode")
  if(darkmode !== "active"){
    enableDarkMode()
  } else{
    disableDarkmode()
  }
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("homeslide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}