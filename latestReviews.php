<?php 
    $reviewGames = array(
        "Whosyourdaddy"  => array(
            "title" => "Who's Your Daddy?!",
            "pegi" => 16,
            "developer" => "Evil Tortilla Games",
            "release" => "23 Dec, 2015",
            "genre" => "Funny, Multiplayer, First-Person, Comedy, Simulation",
            "rating" => "6.5",
            "description" => "Who's Your Daddy is a casual multiplayer game featuring a clueless father attempting to prevent his infant son from certain death. Play with up to 7 of your friends, and test your parenting skills in a competitive setup with wacky physics and over 67 potentially ominous household items.",
            "platform" => "PlayStation 5, PlayStation 4, Android, Xbox One, Linux",
            "image" => "images/whosYourDaddy.jpg",
            "image2" => "images/whosYourDaddy2.jpg",
            "image3" => "images/whosYourDaddy3.jpg",
            "trailer" => "https://www.youtube.com/embed/ixKIRD63rUk?si=n7OAGrOjb9MF-m1C",
        ),
        "Phasmophobia" => array(
            "title" => "Phasmophobia",
            "pegi" => "pegi: 16",
            "developer" => "Kinetic Games",
            "release" => "18 Sep, 2020",
            "genre" => "Horror, Online Co-Op, Multiplayer, Psychological Horror",
            "rating" => "9.2",
            "description" => "Phasmophobia is a 4 player online co-op psychological horror. Paranormal activity is on the rise and it’s up to you and your team to use all the ghost-hunting equipment at your disposal in order to gather as much evidence as you can.",
            "image" => "images/phasmophobia.jpg",
            "image2" => "images/phasmophobia2.jpg",
            "image3" => "images/phasmophobia3.jpg",
            "image4" => "images/phasmophobia4.jpg",
            "image5" => "images/phasmophobia5.jpg",
            "trailer" => "https://www.youtube.com/embed/adFNARIHlOs?si=TgmVRKlmY85ydULq",
            "platform" => "PlayStation 5, Xbox Series X and Series S, Nintendo Switch 2, Microsoft Windows, GeForce Now"
        )
    );





?>


<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="Lucas Zonneveld">
    <title>GameStars</title>
    <link rel="icon" href="images/Game_Stars_logo_2.png" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css">
    <script src="lib/index.js" defer></script>
    <script src="https://kit.fontawesome.com/a2c653daa5.js" crossorigin="anonymous"></script>
</head>
<body>
    <img src="images/lightModeBackground.gif" id="gifImage" alt="achtergrond">
    <header>
        <section>
            <a href="login.html"><img style="height: 16vh;" id="logoHeader" src="images/Game_Stars_logo_2.png"></a>
        </section>
        <nav class="nav-links">
            <a href="index.html">Home</a>
            <a href="games.html">Games</a>
            <section class="subnav">
                <button class="subnavBTN">Top 10</button>
                <section class="subnavContent">
                    <a class="dropDownStyle" href="PS10.html">Playstation</a>
                    <a class="dropDownStyle" href="xbox10.html">Xbox</a>
                </section>
            </section>
            <section class="subnav2">
                <button class="subnavBTN2">Reviews</button>
                <section class="subnavContent2">
                    <a class="dropDownStyle" href="latestReviews.html">Latest Reviews</a>
                    <a class="dropDownStyle" href="raiPageReview.html">Rai Reviews</a>
                    <a class="dropDownStyle" href="lucasPageReview.html">Lucas Reviews</a>
                    <a class="dropDownStyle" href="erenPageReview.html">Eren Reviews</a>
                </section>
            </section>
            <a href="merch.html">Merchandise</a>
            <a href="contact.html">Contact</a>
        </nav>
        <button id="darkModeBTN" onclick="changeGIF()">🌖</button>
    </header>
    <main>
        <?php

            echo'



        <section class="latestReviewsContainer">
            <h1>Latest Review</h1>
            <section class="homeslide fade">
                <article class="nummerText">1 / 4</article>
                <img src="images/arcraiders.jpg" alt="Arc raiders">
            </section>
            <section class="homeslide fade">
                <article class="nummerText">2 / 4</article>
                <img src="images/Red Dead Redemption 2.jpg" alt="Red Dead Redemption 2">
                <section id="gameContainer"></section>  
                                <p class="game-rating"><strong>Rating:</strong> ⭐ {$game["rating"]}/10</p>
                                <section class="raiGame2">
                                    <p><strong>PEGI:</strong> {$game["pegi"]}</p>
                                    <p><strong>Ontwikkelaar:</strong> {$game["developer"]}</p>
                                    <p><strong>Releasejaar:</strong> {$game["release"]}</p>
                                    <p><strong>Genre:</strong> {$game["genre"]}</p>
                                    <article class="raiGameStory">
                                        <h2>Beschrijving</h2>
                                        <p>{$game["description"]}</p>
                                    </article>
                                </section>
                            </section>
                        </section>
                    </section>
            </section>
            <section class="homeslide fade">
                <article class="nummerText">3 / 4</article>
                <img src="images/spooderman.webp" alt="Marvels Spiderman 2">
            </section>
            <section class="homeslide fade">
                <article class="nummerText">4 / 4</article>
                <img src="images/hollowknight.jpg" alt="Hollow knight">
            </section>
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
            <section>
                
            </section>
            <section class="dot-container">
                <span class="dot" onclick="currentSlide(1)"></span>
                <span class="dot" onclick="currentSlide(2)"></span>
                <span class="dot" onclick="currentSlide(3)"></span>
                <span class="dot" onclick="currentSlide(4)"></span>
                <span class="dot" onclick="currentSlide(5)"></span>
                <span class="dot" onclick="currentSlide(6)"></span>
            </section>
        </section>
        '
        ?>
    </main>
    <footer>
        <section class="waves">
            <section class="wave" id="wave1"></section>
            <section class="wave" id="wave2"></section>
            <section class="wave" id="wave3"></section>
            <section class="wave" id="wave4"></section>
        </section>
        <ul class="socialIcons">
            <li>
                <a href="https://github.com/Rai71/GameStarsProject"><i class="fa-brands fa-github"></i></a>
                <a href="#"><i class="fa-solid fa-envelope"></i></a>
                <a href="https://x.com/KuraiiFPS"><i class="fa-brands fa-x-twitter"></i></a>
                <a href="https://www.instagram.com/_rai.jmg/"><i class="fa-brands fa-instagram"></i></a>
            </li>
        </ul>
        <ul class="footerMenu">
            <li>
                <a href="index.html">Home</a>
                <a href="games.html">Games</a>
                <a href="merch.html">Merchandise</a>
                <a href="contact.html">Contact</a>
            </li>
        </ul>
        <p>&copy; 2025 GameStars | Gemaakt door R. Gondres, E. Yilmaz en L. Zonneveld</p>
    </footer>
</body>
</html>