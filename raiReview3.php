<?php 
    $gameRaiReview3 = array(

        "darksouls3" => array(
            "title" => "Dark Souls III",
            "pegi" => 16,
            "developer" => "FromSoftware",
            "release" => "24 maart 2016",
            "genre" => "Actierollenspel, Vechtspel, Action-adventure, souls-like",
            "rating" => 9.4,
            "description" => "Dark Souls III is een meedogenloze action-RPG waarin je speelt als een 'Onontbrande' krijger, die uit de dood verrijst om het wegkwijnende Eerste Vuur te stoppen en het einde van de wereld te voorkomen door de Lords of Cinder terug naar hun tronen te brengen in het koninkrijk Lothric. Het biedt snelle, intense gevechten met diverse wapens, magie en aanpasbare vaardigheden (Weapon Arts). Het bouwt voort op de uitdagende moeilijkheidsgraad, diepe lore en de meeslepende, vervallen wereld van de serie, en dient als een passend, duister slotstuk van de trilogie.",
            "image" => "images/darksouls3een.jpg",
            "image2" => "images/darksouls3twee.jpg",
            "image3" => "images/darksouls3drie.jpg",
            "trailer" => "https://www.youtube.com/embed/cWBwFhUv1-8?si=Hmdr1tpVan6rRFue",
        ),

        "liesOfP" => array(
            "title" => "Lies of P",
            "pegi" => 16,
            "developer" => "Round 8 Studio, Neowiz Games, Neowiz",
            "release" => "18 september 2023",
            "genre" => "Actierollenspel, Vechtspel, Action-adventure, souls-like",
            "rating" => 9.4,
            "description" => "Lies of P is een dark-fantasy \"Soulslike\" action-RPG, sterk geïnspireerd door Bloodborne, die het verhaal van Pinokkio herinterpreteert in de Belle Époque-stad Krat, die nu wordt overspoeld door opstandige marionetten. Spelers besturen Pinokkio, een marionet die op zoek is naar zijn maker, Geppetto, terwijl hij strijdt tegen angstaanjagende wezens en moet beslissen of hij de waarheid vertelt of liegt om vooruitgang te boeken en mens te worden in een wereld die is verwoest door een marionettenwaanzin en een versteeningsziekte. De game biedt diepe wapenaanpassing en uitdagende gevechten.",
            "image" => "images/liesofp1.jpg",
            "image2" => "images/liesofp2.webp",
            "image3" => "images/liesofp3.jpg",
            "trailer" => "https://www.youtube.com/embed/kXZoKdr-xeo?si=CSe3NSHQWcueSr9N",
        ),
    );



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
    <meta name="description" content="Ontdek of Lies of P en Dark Souls III de ultieme uitdaging bieden — guides, tips en ons verdict. Lees nu en bereid je voor op epische gevechten!">
    <meta name="keywords" content="Lies of P builds, Lies of P bossstrategieën, Lies of P walkthrough, Dark Souls III weapon arts, Dark Souls III boss guides, Dark Souls III lore">
    <meta name="author" content="Rainier Gondres">
    <title>Rai's Game review 3 - GameStars Project</title>
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
