const reviewGames = {
    "crusaderkings":  {
        title: "Crusader Kings III",
        pegi: "pegi: 12",
        developer: "Paradox Development Studio",
        releasedate: "1 Sep, 2020",
        genre: "Strategy, Medieval, Grand Strategy, Simulation, RPG",
        rating: "10/10",
        description: "Love, fight, scheme, and claim greatness. Determine your noble house’s legacy in the sprawling grand strategy of Crusader Kings III. Death is only the beginning as you guide your dynasty’s bloodline in the rich and larger-than-life simulation of the Middle Ages.",
        trailer: "https://www.youtube.com/embed/xjn66Cl3pMA?si=vtZipdBTFriKFKGs",
        platform: "PlayStation 5, macOS, Microsoft Windows, Linux",
        image: "images/crusaderkings.jpg",
        image2: "images/crusaderkings2.jpg",
        image3: "images/crusaderkings3.jpg"
    },
    "Warframe": {
        title: "Warframe",
        pegi: "pegi: 18+",
        developer: "Digital Extremes",
        releasedate: "25 Mar, 2013",
        genre: "Free to Play, Looter Shooter, Action RPG, Action, RPG",
        rating: "8.6/10",
        description: "Enter your Warframe: a bio-metal suit of untold power. Unleash its Abilities and wield a vast array of devastating weaponry to effortlessly annihilate hordes of enemies on sight. And when the slaughter is over, you can earn or instantly unlock 40+ different Warframes - each with a unique suite of powers - to re-experience the mayhem any way you want.",
        trailer: "https://www.youtube.com/embed/MsbL8lFHrZI?si=sJe1CWsvVNcazOgz",
        platform: " PlayStation 5, Nintendo Switch, Android, PlayStation 4",
        image: "images/warframe.jpg",
        image2: "images/warframe2.jpg",
        image3: "images/warframe3.jpg"
    },
    };  

let selectedGame = 1;

if (selectedGame == 1){
        game = reviewGames["crusaderkings"];
        console.log("Crusader Kings wordt getoond.");
} else if (selectedGame == 2){
        game = reviewGames["Warframe"];
        console.log("Warframe wordt getoond.");
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