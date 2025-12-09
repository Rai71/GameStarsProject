function changeGIF() {
    var image = document.querySelector("#gifImage"); 
    if(image.src.includes("lightModeBackground.gif")) {
        image.src = "images/darkModeBackground.gif";
        document.querySelector("footer").style.backgroundColor = "#16055c";
        document.querySelectorAll('*').forEach(el => {
        el.style.color = 'white';
        });
        document.getElementById("darkModeBTN").style.color = "white";
        document.getElementById("darkModeBTN").addEventListener("click", () => {
        document.body.classList.toggle("darkmode");
        });

    }else{
        image.src = "images/lightModeBackground.gif";
        document.querySelector("footer").style.backgroundColor = "#3a49d6";
        document.body.style.color = "black";
        document.querySelectorAll('*').forEach(el => {
            el.style.color = 'black';
        });
        document.getElementById("darkModeBTN").style.color = "white";
    }
}





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