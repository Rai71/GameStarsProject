function changeGIF() {
    var image = document.querySelector("#gifImage"); 
    if(image.src.includes("lightModeBackground.gif")) {
        image.src = "images/darkModeBackground.gif";
    }else{
        image.src = "images/lightModeBackground.gif";
    }
}