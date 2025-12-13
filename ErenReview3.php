<?php
    $reviewGames = array(
        "FarCry3" => array(
            "title" => "FarCry3",
            "pegi" => 18,
            "developer" => "Ubisoft Montreal",
            "release" => "29 Nov, 2012",
            "genre" => "Action, FPS, Open World",
            "rating" => "9",
            "description" => "Far Cry 3 speelt zich af op een tropisch eiland waar je moet ontsnappen aan piraten onder leiding van Vaas. Verken een grote open wereld, jaag dieren, craft uitrusting en ervaar een intens verhaal vol actie.",
            "image" => "images/FarCry3"
            "image2" => "images/FarCry3F2.png"
            "image3" => "images/FarCry3F3.png"
        ),
        "FarCry4" => array(
            "title" => "FarCry4",
            "pegi" => 18,
            "developer" => "Ubisoft Montreal",
            "release" => "18 Nov, 2014",
            "genre" => "Action, FPS, Open World",
            "rating" => "9/10",
            "description" => "Far Cry 4 speelt zich af in het bergachtige Kyrat, waar je opstaat tegen de dictator Pagan Min. De game biedt een grote open wereld, dierenjacht, voertuigen en veel co-op mogelijkheden.",
            "image" => "images/FarCry4"
            "image2" => "images/FarCry4F1"
            "image3" => "images/FarCry4F2
        )
        
        $selectedGame = 1;

    switch($selectedGame){
        case 1:
            $game = $gameRaiReview3["darksouls3"];
            break;
        case 2:
            $game = $gameRaiReview3["liesOfP"];
            break;
        default:
            $game = $gameRaiReview3["darksouls3"];
    }

?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="keywords" content="">
    <meta name="author" content="Eren Yilmaz">
    <title>Rai review 2</title>
    <link rel="icon" href="images/Game_Stars_logo_2.png" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css">
    <script src="lib/index.js" defer></script>
    <script src="lib/raiReview3php.js" defer></script>
    <script src="https://kit.fontawesome.com/a2c653daa5.js" crossorigin="anonymous"></script>
</head>
<body class="darkmode">
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
            <a href="merch.html">Merchandise</a>
            <a href="contact.html">Contact</a>
        </nav>
        <button id="darkModeBTN" onclick="changeGIF()">🌖</button>
    </header>
    <main>
        <section class="raiGameLayout">
            <h1><?php echo $game['title']; ?></h1>
            <section class="raiGame1">
                <section class="slideshowreview-container">
                    <section class="homeslidesreview">
                        <img src="<?php echo $game['image']; ?>" alt="<?php echo $game['title']; ?>">
                    </section>
                    <section class="homeslidesreview">
                        <img src="<?php echo $game['image2']; ?>" alt="<?php echo $game['title']; ?>">
                    </section>
                    <section class="homeslidesreview">
                        <img src="<?php echo $game['image3']; ?>" alt="<?php echo $game['title']; ?>">
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
