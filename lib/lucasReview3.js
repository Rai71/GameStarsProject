const reviewGames = {
    "kingdomcome":  {
        title: "Kingdom Come Deliverance II",
        pegi: "18",
        developer: "Warhorse Studios",
        releasedate: "4 Feb, 2025",
        genre: "Rpg, Medieval, Open world, Singleplayer",
        rating: "8/10",
        description: "A thrilling story-driven action RPG, with a rich open world, set in 15th century Medieval Europe. Experience the ultimate medieval adventure - through the eyes of young Henry - as you embark on a journey of epic proportions.",
        image: "images/kingdomcome.jpg",
        image2: "images/kingdomcome2.jpg",
        image3: "images/kingdomcome3.jpg",
        trailer: "https://www.youtube.com/embed/BQu-uuQYrXY?si=E8uesmn0ivZ1r9Mu",
        platform: "PlayStation 4, Nintendo Switch, Xbox One, Microsoft Windows, GeForce Now, Amazon Luna"
    },
    "witcher3": {
        title: "Witcher 3 wild hunt",
        pegi: "18",
        developer: "CD PROJEKT RED",
        releasedate: "18 May, 2015",
        genre: "Open world, Rpg, Story rich, Mature",
        rating: "9/10",
        description: "You are Geralt of Rivia, mercenary monster slayer. Before you stands a war-torn, monster-infested continent you can explore at will. Your current contract? Tracking down Ciri — the Child of Prophecy, a living weapon that can alter the shape of the world.",
        image: "images/witcher.jpg",
        image2: "images/witcher2.jpg",
        image3: "images/witcher3.jpg",
        trailer: "https://www.youtube.com/embed/1-l29HlKkXU?si=QOwMrDznFnPjJNOE",
        platform: "PlayStation 5, Nintendo Switch, PlayStation 4, Xbox One, Xbox Series X and Series S, Microsoft Windows, GeForce Now"
    }
};
let selectedGame = 2;

if(selectedGame == 1){
    game = reviewGames["kingdomcome"];
    console.log("Kingdome Come Deliverance II wordt getoond.");
} else if(selectedGame == 2){
    game = reviewGames["witcher3"];
    console.log("Witcher 3 wordt getoond.");
} else{
    game = reviewGames["kingdomcome"];
    console.log("Ongeldige game-keuze.");
}

const container = document.querySelector("#gameContainer");

let ageverify = confirm("Ben je 18 of ouder?")

if(ageverify != true){
    alert("Deze games zijn niet geschikt voor jouw")
}

container.innerHTML = `    
    <section class="raiGameLayout">
        <h1>${game.title}</h1>
        <section class="raiGame1">
            <section class="slideshowreview-container">
                <section class="homeslidesreview">
                    <article class="nummerText">1 / 4</article>
                    <img src="${game.image}" alt="Arc raiders">
                </section>
                <section class="homeslidesreview">
                    <article class="nummerText">2 / 4</article>
                    <img src="${game.image2}" alt="Red Dead Redemption 2">
                </section>
                <section class="homeslidesreview">
                    <article class="nummerText">3 / 4</article>
                    <img src="${game.image3}" alt="Marvel's Spiderman 2">
                </section>
                <section class="homeslidesreview">
                    <article class="nummerText">4 / 4</article>
                    <iframe src="${game.trailer}" width="800" height="400"></iframe>
                </section>
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
            </section>
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