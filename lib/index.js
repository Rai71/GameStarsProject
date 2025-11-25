function changeGIF() {
    var image = document.querySelector("#gifImage"); 
    if(image.src.includes("lightModeBackground.gif")) {
        image.src = "images/darkModeBackground.gif";
    }else{
        image.src = "images/lightModeBackground.gif";
    }
}


function plusSlides(){
    if (Slide1 == Slide1){
        Slide1 = Slide2;
    }else if (Slide2 == Slide2){
        Slide2 = Slide3;
    }else if (Slide3 == Slide3){
        Slide3 = Slide4;
    }else if (Slide4 == Slide4){
        Slide4 = Slide1;
    }
}

let currentSlide = 1;

function plusSlides(n) {
    currentSlide += n;
    if (currentSlide > 4) currentSlide = 1;
    if (currentSlide < 1) currentSlide = 4;
    showSlide(currentSlide);
}

function showSlide(slideNumber) {
    // Hide all slides, then show the one matching slideNumber
}
