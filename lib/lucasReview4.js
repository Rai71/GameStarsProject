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

let selectedGame = 2;

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