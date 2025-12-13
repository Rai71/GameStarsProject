const reviewGames = {
        "FarCry3":  { 
            title: "FarCry3",
            pegi: 18,
            developer: "Ubisoft Montreal",
            release: "29 Nov, 2012",
            genre: "Action, FPS, Open World",
            rating: "9/10",
            description: "Far Cry 3 speelt zich af op een tropisch eiland waar je moet ontsnappen aan piraten onder leiding van Vaas. Verken een grote open wereld, jaag dieren, craft uitrusting en ervaar een intens verhaal vol actie.",
            image: "images/FarCry3.png",
            image2: "images/FarCry3F2.png",
            image3: "images/FarCry3F3.png",
            Trailer: "https://www.youtube.com/embed/J6gnOVJsCsM?si=-BIGju8DYU5sGHgm",


        },
        FarCry4: {
            title: "FarCry4",
            pegi: 18,
            developer: "Ubisoft Montreal",
            release: "18 Nov, 2014",
            genre: "Action, FPS, Open World",
            rating: "9/10",
            description: "Far Cry 4 speelt zich af in het bergachtige Kyrat, waar je opstaat tegen de dictator Pagan Min. De game biedt een grote open wereld, dierenjacht, voertuigen en veel co-op mogelijkheden.",
            image: "images/FarCry4.png",
            image2: "images/FarCry4F1.png",
            image3: "images/FarCry4F2.png",
            Trailer: "https://www.youtube.com/embed/6d60v1OErEY?si=MV8THxLQCi6_ss_F",
        },
        };

let selectedGame = 1;

if (selectedGame == 1){
        game = reviewGames["FarCry3"];
        console.log("FarCry3 wordt getoond.");
} else if (selectedGame == 2){
        game = reviewGames["FarCry4"];
        console.log("FarCry4 wordt getoond.");
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