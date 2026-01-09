const reviewGames = {
    "DragonBallXenoVerse":  {
        title: "Dragon Ball XenoVerse",
        pegi: "pegi: 12",
        developer: "Bandai Namco Entertainment, Dimps",
        releasedate: "4 oktober 2014",
        genre: " Vechtspel, Computerrollenspel, Actiespel, Avonturenspel",
        rating: "9.5/10",
        description: "Dragon Ball Xenoverse is een action-RPG-vechtspel waarin spelers een eigen avatar creëren om samen met klassieke personages te vechten. Ze grijpen in tijdens beroemde gevechten om een corrupte tijdlijn te herstellen. Het spel bevat personagecreatie, een centrale hubstad (Toki Toki City) en unieke verhaalmissies die draaien om tijdreizen en de mysterieuze Time Breakers. Het combineert 3D-gevechten met RPG-elementen, waardoor spelers rassen kunnen kiezen zoals Saiyans, Majins en Namekians, vaardigheden kunnen leren van meesters zoals Goku en nieuwe locaties kunnen verkennen. Zo biedt het een origineel verhaal binnen het Dragon Ball-universum.",
        image: "images/DBZXV1.jpg",
        image2: "images/DBZXV2.jpg",
        image3: "images/DBZXV3.jpg",
        trailer: "https://www.youtube.com/embed/2iBqy2uUOz0?si=p-TpyWpS_EkvOe4v",
        platform: "PC, PlayStation 3, PlayStation 4, Xbox 360, Xbox One,",
    },
    "DragonBallXenoVerse2": {
        title: "Dragon Ball XenoVerse 2",
        pegi: "pegi: 12",
        developer: "Dimps, QLOC",
        releasedate: "8 oktober 2016",
        genre: " Vechtspel, Actiespel, Computerrollenspel, Avonturenspel, Casual game, Massively Multiplayer, Adventure",
        rating: "9.5/10",
        description: "Dragon Ball Xenoverse 2 is een action-RPG waarin je een aangepaste Time Patroller creëert om de Dragon Ball-tijdlijn te beschermen tegen schurken die de geschiedenis willen veranderen. Je verkent de uitgestrekte hubstad Conton City, traint met iconische personages en vecht door verschillende tijdperken heen in 3D-arena’s. Het spel biedt diepgaande aanpassingsmogelijkheden, uitgebreide PvE- en PvP-content en jaren aan DLC. Het bouwt voort op het origineel door de wereld uit te breiden en content uit Dragon Ball Super toe te voegen, wat zorgt voor een MMO-achtige ervaring met epische gevechten en karaktergroei.",
        image: "images/Xeno1.jpg",
        image2: "images/Xeno2.jpg",
        image3: "images/Xeno3.jpg",
        trailer: "https://www.youtube.com/embed/JnUbg-9v_bE?si=0AU_mTF3hDml7kpl",
        platform: "PlayStation 4, Playstation 5, Nintendo Switch, Xbox One, Xbox series X, PC",
    },
    };  

let selectedGame = 2;

if (selectedGame == 1){
        game = reviewGames["DragonBallXenoVerse"];
        console.log("Dragon Ball XenoVerse wordt getoond.");
} else if (selectedGame == 2){
        game = reviewGames["DragonBallXenoVerse2"];
        console.log("Dragon Ball XenoVerse 2 wordt getoond.");
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
                <section class="reviewForm">
                    <form action="">
                        <h1>Review</h1>
                        <section class="reviewInputBox">
                            <input type="text" placeholder="Naam" required>
                        </section>
                        <section class="reviewInputBox">
                            <textarea rows="5" placeholder="Beschrijving" required></textarea>
                        </section>
                        <section class="reviewInputBox">
                            <label>Rating:</label><br>
                            <input type="radio" name="rating" value="1" required> 1
                            <input type="radio" name="rating" value="2" required> 2
                            <input type="radio" name="rating" value="3" required> 3
                            <input type="radio" name="rating" value="4" required> 4
                            <input type="radio" name="rating" value="5" required> 5
                        </section>
                        <button type="submit">Submit</button>
                    </form>
                </section>
                <section id="submittedReviews"></section>
            </section
        </section>
    </section>
`;

const form = document.querySelector('.reviewForm form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nameInput = document.querySelector('input[placeholder="Naam"]');
    const descTextarea = document.querySelector('textarea[placeholder="Beschrijving"]');
    const ratingRadio = document.querySelector('input[name="rating"]:checked');
    
    if (!nameInput || !descTextarea || !ratingRadio) return;
    
    const name = nameInput.value.trim();
    const description = descTextarea.value.trim();
    const rating = parseInt(ratingRadio.value);
    
    if (!name || !description) return;
    
    
    const currentRatingStr = game.rating.split('/')[0];
    const currentRating = parseFloat(currentRatingStr);
    const userRatingScaled = rating * 2; // Scale 1-5 to 2-10
    const newRating = ((currentRating + userRatingScaled) / 2).toFixed(1);
    game.rating = newRating + '/10';
    
    
    document.querySelector('.game-rating').innerHTML = `<strong>Rating:</strong>⭐ ${game.rating}`;
    
   
    const reviewsDiv = document.getElementById('submittedReviews');
    const reviewDiv = document.createElement('div');
    reviewDiv.className = 'submitted-review';
    reviewDiv.innerHTML = `
        <h3>${name}</h3>
        <p>${description}</p>
        <p>Rating: ${rating}/5</p>
    `;
    reviewsDiv.appendChild(reviewDiv);
    
    
    form.reset();
});

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