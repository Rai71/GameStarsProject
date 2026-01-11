const reviewGames = {
    "Whosyourdaddy":  {
        title: "Who's Your Daddy?!",
        pegi: "pegi: 16",
        developer: "Evil Tortilla Games",
        releasedate: "23 Dec, 2015",
        genre: "Funny, Multiplayer, First-Person, Comedy, Simulation",
        rating: "6.5/10",
        description: "Who's Your Daddy is a casual multiplayer game featuring a clueless father attempting to prevent his infant son from certain death. Play with up to 7 of your friends, and test your parenting skills in a competitive setup with wacky physics and over 67 potentially ominous household items.",
        trailer: "https://www.youtube.com/embed/ixKIRD63rUk?si=n7OAGrOjb9MF-m1C",
        platform: " PlayStation 5, PlayStation 4, Android, Xbox One, Linux",
        image: "images/whosYourDaddy.jpg",
        image2: "images/whosYourDaddy2.jpg",
        image3: "images/whosYourDaddy3.jpg",
        image4: "images/whosYourDaddy4.jpg",
        image5: "images/whosYourDaddy5.jpg",
    },
    "Phasmophobia": {
        title: "Phasmophobia",
        pegi: "pegi: 16",
        developer: "Kinetic Games",
        releasedate: "18 Sep, 2020",
        genre: "Horror, Online Co-Op, Multiplayer, Psychological Horror",
        rating: "9.2/10",
        description: "Phasmophobia is a 4 player online co-op psychological horror. Paranormal activity is on the rise and it’s up to you and your team to use all the ghost-hunting equipment at your disposal in order to gather as much evidence as you can.",
        trailer: "https://www.youtube.com/embed/adFNARIHlOs?si=TgmVRKlmY85ydULq",
        platform: "PlayStation 5, Xbox Series X and Series S, Nintendo Switch 2, Microsoft Windows, GeForce Now",
        image: "images/phasmophobia.jpg",
        image2: "images/phasmophobia2.jpg",
        image3: "images/phasmophobia3.jpg",
        image4: "images/phasmophobia4.jpg",
        image5: "images/phasmophobia5.jpg"
    },
    };  
let selectedGame = 1;

if (selectedGame == 1){
        game = reviewGames["Whosyourdaddy"];
        console.log("Who's your daddy wordt getoond.");
} else if (selectedGame == 2){
        game = reviewGames["Phasmophobia"];
        console.log("Phasmophobia wordt getoond.");
}

if (selectedGame == 1) {
    let chooseImage = prompt("Voer de naam van een afbeelding in (bijv. whosYourDog, whosYourGames, washingMachine)");
    if (chooseImage == "whosYourDog") {
        game.image6 = "images/" + chooseImage + ".jpg"; 
    } 
    else if (chooseImage == "whosYourGames"){
        game.image6 = "images/" + chooseImage + ".jpg"; 
    }
    else if (chooseImage == "washingMachine") {
        game.image6 = "images/" + chooseImage + ".jpg"; 
    }
    else {
        game.image6 = "images/whosYourDog.jpg"
    }
} 
else if(selectedGame == 2) {
    let chooseImage = prompt("Voer de naam van een afbeelding in (bijv. house, door, camera)");
    if (chooseImage == "house") {
        game.image6 = "images/" + chooseImage + ".jpg"; 
    } 
    else if (chooseImage == "door"){
        game.image6 = "images/" + chooseImage + ".jpg"; 
    }
    else if (chooseImage == "camera") {
        game.image6 = "images/" + chooseImage + ".jpg"; 
    }
    else {
        game.image6 = "images/house.jpg"
    }
};

const container = document.querySelector("#gameContainer");

container.innerHTML = `    
        <h1>${game.title}</h1>
        <section class="raiGame1">
            <section class="slideshowreview-container">
                <section class="homeslidesreview">
                    <img src="${game.image}" alt="${game.title}">
                </section>
                <section class="homeslidesreview">
                    <img src="${game.image2}" alt="${game.title}">
                </section>
                <section class="homeslidesreview">
                    <img src="${game.image3}" alt="${game.title}">
                </section>
                <section class="homeslidesreview">
                    <img src="${game.image4}" alt="${game.title}">
                </section>
                <section class="homeslidesreview">
                    <img src="${game.image5}" alt="${game.title}">
                </section>
                <section class="homeslidesreview">
                    <img src="${game.image6}" alt="${game.title}">
                </section>
                <section class="homeslidesreview">
                    <iframe class="raiGameReviewTrailer" src="${game.trailer}" title="${game.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </section>
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                <section class="dotreview-container">
                    <span class="dotreview" onclick="currentSlide(1)"></span>
                    <span class="dotreview" onclick="currentSlide(2)"></span>
                    <span class="dotreview" onclick="currentSlide(3)"></span>
                    <span class="dotreview" onclick="currentSlide(4)"></span>
                    <span class="dotreview" onclick="currentSlide(5)"></span>
                    <span class="dotreview" onclick="currentSlide(6)"></span>
                    <span class="dotreview" onclick="currentSlide(7)"></span>
                </section>
`;

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