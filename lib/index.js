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





let currentSlide = 1;

function plusSlides(){
    console.log(currentSlide)
    if(currentSlide >= 4){
        currentSlide = 0;
    }
    else{
        currentSlide++;
    }
}

function minusSlides(){

}


function plusSlides(n) {
    currentSlide += n;
    if (currentSlide > 4) currentSlide = 1;
    if (currentSlide < 1) currentSlide = 4;
    showSlide(currentSlide);
}

function showSlide(slideNumber) {
    // Hide all slides, then show the one matching slideNumber
}
