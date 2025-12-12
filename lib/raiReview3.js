const reviewGames = {
    "Darksouls":  {
        title: "Dark souls",
        pegi: "pegi: 16",
        developer: " From Software, Bandai Namco Entertainment, Bluepoint Games, Virtuos, SIE Japan Studio, QLOC",
        releasedate: "22 september 2011",
        genre: "Actierollenspel, Action-adventure",
        rating: "9.4/10",
        description: "Dark Souls is een berucht uitdagende dark-fantasy action-RPG van FromSoftware, bekend om zijn onderling verbonden wereld, meedogenloze moeilijkheidsgraad, diepe lore en unieke, door spelers gedreven online functies. Spelers verkennen een vervallen koninkrijk als de vervloekte “Chosen Undead”, waarbij ze leren van talloze sterfgevallen om groteske vijanden en krachtige bazen te overwinnen. Het is een spirituele opvolger van Demon’s Souls, met de nadruk op spannende verkenning, precieze gevechten en thema’s van wanhoop, volharding en het vervagende Age of Fire.",
        image: "images/darksouls1.jpg",
        image2: "images/darksouls1twee.jpg",
        image3: "images/darksouls1drie.jpg",
        trailer: "https://www.youtube.com/embed/o1780AqAa20?si=ibdN1KgIEktzwvLl"
    },
    "Darksouls2": {
        title: "Dark Souls II",
        pegi: "pegi: 16",
        developer: "From Software",
        releasedate: "11 maart 2014",
        genre: "Vechtspel, Openwereldspel, Hack and slash, Nonlinear gameplay, souls-like",
        rating: "8.8/10",
        description: "Dark Souls II is een uitdagende action-RPG van FromSoftware, gesitueerd in het gevallen koninkrijk Drangleic, waar een ondode reiziger op zoek gaat naar een genezing voor zijn vloek. Daarbij ontrafelt hij een rijke, cyclische geschiedenis over verdwijnend licht, vergeten koninkrijken en de aard van de menselijkheid. De game bevat meedogenloze vijanden, een complex werelddesign, veel vrijheid in het bouwen van personages, en klassieke Souls-achtige elementen zoals belonende verkenning, straffende dood en rijke lore die wordt ontdekt via uitdagende confrontaties en omgevingsverhalen.",
        image: "images/darksouls2een.jpg",
        image2: "images/darksouls2twee.jpg",
        image3: "images/darksouls2drie.jpg",
        trailer: "https://www.youtube.com/embed/U6uyuIQYlfY?si=Qih6XBCY0E3Cviy9"
    }
};
let selectedGame = 1;

if (selectedGame == 1){
        game = reviewGames["Darksouls"];
        console.log("Dark souls wordt getoond.");
} else if (selectedGame == 2){
        game = reviewGames["Darksouls2"];
        console.log("Dark souls 2 wordt getoond.");
}

const container = document.querySelector("#gameContainer");



container.innerHTML = `    
    <section class="raiGameLayout">
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
                    <iframe class="raiGameReviewTrailer" src="${game.trailer}" title="${game.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </section>
                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
                <section class="dotreview-container">
                    <span class="dotreview" onclick="currentSlide(1)"></span>
                    <span class="dotreview" onclick="currentSlide(2)"></span>
                    <span class="dotreview" onclick="currentSlide(3)"></span>
                    <span class="dotreview" onclick="currentSlide(4)"></span>
                </section>
                <p class="game-rating"><strong>Rating:</strong>⭐ ${game.rating}</p>    
                <section class="raiGame2">
                    <p><strong>PEGI:</strong> ${game.pegi}</p>
                    <p><strong>Ontwikkelaar:</strong> ${game.developer}</p>
                    <p><strong>Releasejaar:</strong> ${game.releasedate}</p>
                    <p><strong>Genre:</strong> ${game.genre}</p>
                    <p><strong>Platforms:</strong> ${game.platform}</p>
                    <article class="raiGameStory">
                        <h2>Beschrijving</h2>
                        <p>${game.description}</p>
                    </article>
                </section>
            </section
        </section>
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