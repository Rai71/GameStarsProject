<?php
    $reviewGames = array(
        "expedition33"  => array(
            "title" => "Clair Obscur: Expedition 33",
            "pegi" => 18,
            "developer" => "Sandfall Interactive",
            "release" => "April 24, 2025",
            "genre" => "Metroidvania",
            "rating" => "9",
            "description" => "Clair Obscular: Expedition 33 plunges players into a moody, atmospheric world where light and shadow are more than visual elements—they’re core mechanics that shape every decision. Set within the mysterious Obscular Frontier, the game follows the 33rd sanctioned expedition tasked with uncovering the truth behind a series of reality-bending anomalies.",
            "image" => "images/expedition33.jpg",
            "image2" => "images/expedition332.png",
            "image3" => "images/expedition333.jpg",
            "trailer" => "https://www.youtube.com/embed/2VaLOc1FpSo?si=908vxrBgdDCVIODS ",
        ),
        "repo" => array(
            "title" => "R.E.P.O.",
            "pegi" => 18,
            "developer" => "Semiwork Studios",
            "release" => "26 February 2025",
            "genre" => "Survival horror, Multiplayer",
            "rating" => "6",
            "description" => "R.E.P.O. (short for Retrieve, Extract and Profit Operation) is an online cooperative survival horror game developed and published by Swedish studio Semiwork. Released in early access on February 26, 2025 for Windows, the game combines nail-biting tension with unpredictable physics-driven chaos.",
            "image" => "images/repo.jpg",
            "image2" => "images/repo2.avif",
            "image3" => "images/repo3.jpg",
            "trailer" => "https://www.youtube.com/embed/oSfoK8eSeD8?si=AIMD0CZZ0Z4CanY2",
        )
    );
    $selectedGame = 2;
    switch ($selectedGame){
        case 1:  
            $game = $reviewGames["expedition33"];
            break;
        case 2:
            $game = $reviewGames["repo"];
            break;
        default:
            $game = $reviewGames["expedition33"];
            break;
    }
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Uitgebreide R.E.P.O.-review — coop survival horror, gameplay-analyse, technische staat in early access en overlevingstips.">
    <meta name="keywords" content="game reviews, game recensies, gameplay tips, walkthroughs, Metroidvania, survival horror, co-op games">
    <meta name="author" content="Lucas Zonneveld">
    <title>Lucas review 3 - GameStars Project</title>
    <link rel="icon" href="images/Game_Stars_logo_2.png" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css">
    <script src="lib/index.js" defer></script>
    <script src="lib/lucasReview3php.js" defer></script>
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
                    <a class="dropDownStyle" href="latestReviews.php">Latest Reviews</a>
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
        <section class="raiGameLayout">
            <h1><?php echo $game["title"]; ?></h1>
            <section class="raiGame1">
                <section class="slideshowreview-container">
                    <section class="homeslidesreview">
                        <img src="<?php echo $game["image"]; ?>" alt="<?php echo $game['title']; ?>">
                    </section>
                    <section class="homeslidesreview">
                        <img src="<?php echo $game["image2"]; ?>" alt="<?php echo $game['title']; ?>">
                    </section>
                    <section class="homeslidesreview">
                        <img src="<?php echo $game["image3"]; ?>" alt="<?php echo $game['title']; ?>">
                    </section>
                    <section class="homeslidesreview">
                        <iframe class="raiGameReviewTrailer" src="<?php echo $game['trailer']; ?>" title="<?php echo $game['title']; ?>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </section>
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>
                    <section class="dotreview-container">
                    <span class="dotreview" onclick="currentSlide(1)"></span>
                    <span class="dotreview" onclick="currentSlide(2)"></span>
                    <span class="dotreview" onclick="currentSlide(3)"></span>
                    <span class="dotreview" onclick="currentSlide(4)"></span>
                    </section>
                    <p class="game-rating"><strong>Rating:</strong> ⭐ <?php echo $game['rating']; ?>/10</p>
                    <section class="raiGame2">
                        <p><strong>PEGI:</strong> <?php echo $game['pegi']; ?></p>
                        <p><strong>Ontwikkelaar:</strong> <?php echo $game['developer']; ?></p>
                        <p><strong>Releasejaar:</strong> <?php echo $game['release']; ?></p>
                        <p><strong>Genre:</strong> <?php echo $game['genre']; ?></p>
                        <article class="raiGameStory">
                            <h2>Beschrijving</h2>
                            <p><?php echo $game['description']; ?></p>
                        </article>
                    </section>
                </section>
            </section>  
        </section>
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
