const reviewGames = {
    "DragonBallXenoVerse":  {
        title: "Dragon Ball XenoVerse",
        pegi: "pegi: 12",
        developer: "Bandai Namco Entertainment, Dimps",
        releasedate: "4 oktober 2014",
        genre: "Vechtspel, Computerrollenspel, Actiespel, Avonturenspel",
        rating: "9.5/10",
        description: "Dragon Ball Xenoverse is een action-RPG-vechtspel waarin spelers een eigen avatar creëren om samen met klassieke personages te vechten. Ze grijpen in tijdens beroemde gevechten om een corrupte tijdlijn te herstellen. Het spel bevat personagecreatie, een centrale hubstad (Toki Toki City) en unieke verhaalmissies die draaien om tijdreizen en de mysterieuze Time Breakers. Het combineert 3D-gevechten met RPG-elementen, waardoor spelers rassen kunnen kiezen zoals Saiyans, Majins en Namekians, vaardigheden kunnen leren van meesters zoals Goku en nieuwe locaties kunnen verkennen. Zo biedt het een origineel verhaal binnen het Dragon Ball-universum.",
        image: "images/DBZXV1.jpg",
        image2: "images/DBZXV2.jpg",
        image3: "images/DBZXV3.jpg",
        image4: "images/Goku.jpg",
        image5: "images/Vegeta.jpg",
        image6: "images/Trunks.jpg",
        trailer: "https://www.youtube.com/embed/2iBqy2uUOz0?si=p-TpyWpS_EkvOe4v",
        platform: "PC, PlayStation 3, PlayStation 4, Xbox 360, Xbox One,",
    },
    "DragonBallXenoVerse2": {
        title: "Dragon Ball XenoVerse 2",
        pegi: "pegi: 12",
        developer: "Dimps, QLOC",
        releasedate: "8 oktober 2016",
        genre: "Vechtspel, Actiespel, Computerrollenspel, Avonturenspel, Casual game, Massively Multiplayer, Adventure",
        rating: "9.5/10",
        description: "Dragon Ball Xenoverse 2 is een action-RPG waarin je een aangepaste Time Patroller creëert om de Dragon Ball-tijdlijn te beschermen tegen schurken die de geschiedenis willen veranderen. Je verkent de uitgestrekte hubstad Conton City, traint met iconische personages en vecht door verschillende tijdperken heen in 3D-arena’s. Het spel biedt diepgaande aanpassingsmogelijkheden, uitgebreide PvE- en PvP-content en jaren aan DLC. Het bouwt voort op het origineel door de wereld uit te breiden en content uit Dragon Ball Super toe te voegen, wat zorgt voor een MMO-achtige ervaring met epische gevechten en karaktergroei.",
        image: "images/Xeno1.jpg",
        image2: "images/Xeno2.jpg",
        image3: "images/Xeno3.jpg",
        trailer: "https://www.youtube.com/embed/JnUbg-9v_bE?si=0AU_mTF3hDml7kpl",
        platform: "PlayStation 4, Playstation 5, Nintendo Switch, Xbox One, Xbox series X, PC",
    },
    };  

let selectedGame = 1;

if (selectedGame == 1){
        game = reviewGames["DragonBallXenoVerse"];
        console.log("Dragon Ball XenoVerse wordt getoond.");
} else if (selectedGame == 2){
        game = reviewGames["DragonBallXenoVerse2"];
        console.log("Dragon Ball XenoVerse 2 wordt getoond.");
}

if (selectedGame == 1) {
    let chooseImage = prompt("Voer de naam van een afbeelding in (bijv. Goku, Vegeta, Trunks)");
    if (chooseImage == "Goku") {
        game.image6 = "images/" + chooseImage + ".jpg"; 
    } 
    else if (chooseImage == "Vegeta"){
        game.image6 = "images/" + chooseImage + ".jpg"; 
    }
    else if (chooseImage == "Trunks") {
        game.image6 = "images/" + chooseImage + ".jpg"; 
    }
    else {
        game.image6 = "images/Goku.jpg"
    }
} 
else if(selectedGame == 2) {
    let chooseImage = prompt("Voer de naam van een afbeelding in (bijv. Goku, Vegeta, Trunks)");
    if (chooseImage == "Goku") {
        game.image6 = "images/" + chooseImage + ".jpg"; 
    } 
    else if (chooseImage == "Vegeta"){
        game.image6 = "images/" + chooseImage + ".jpg"; 
    }
    else if (chooseImage == "Trunks") {
        game.image6 = "images/" + chooseImage + ".jpg"; 
    }
    else {
        game.image6 = "images/Goku.jpg"
    }
};

const container = document.querySelector("#gameContainer");

container.innerHTML = `    

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