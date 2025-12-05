<?php 
    $gameRaiReview2 = array(

        "sekiro" => array(
            "title" => "Sekiro: Shadows Die Twice",
            "pegi" => 18,
            "developer" => "FromSoftware",
            "release" => "22 maart 2019",
            "genre" => "Action-adventure, Actierollenspel, souls-like",
            "rating" => 9.3,
            "description" => "Sekiro: Shadows Die Twice is een uitdagende third-person action-adventuregame van FromSoftware, gesitueerd in een fantasierijk Japan uit de jaren 1500. Je speelt als de “One-Armed Wolf”, een shinobi die op zoek is naar zijn jonge heer (Kuro), die door de Ashina-clan wordt bedreigd. Het spel bevat intense zwaardgevechten die draaien om houding (posture), stealth, beweging met een grijphaak en een uniek wederopstandingsmechanisme waarmee je de dood kunt tarten. Het combineert de esthetiek van samoeraifilms met bovennatuurlijke lore.",
            "image" => "images/Sekiro_art.jpg",
            "image2" => "images/sekiro2.jpeg",
        ),

        "bloodborne" => array(
            "title" => "Bloodborne",
            "pegi" => 16,
            "developer" => "FromSoftware",
            "release" => "24 maart 2015",
            "genre" => "Actierollenspel, Vechtspel, Action-adventure, Survival horror, souls-like",
            "rating" => 9.4,
            "description" => "Bloodborne is een duistere, gotische third-person action-RPG van FromSoftware, waarin spelers “Hunters” worden in de door een plaag geteisterde stad Yharnam om beesten te bestrijden en kosmische verschrikkingen te onthullen. Het spel legt de nadruk op agressieve, snelle gevechten met trick weapons en vuurwapens in plaats van schilden, en speelt zich af in een onderling verbonden wereld vol cryptische lore en een adembenemende, krankzinnige sfeer.",
            "image" => "images/Bloodborne.webp",
            "image2" => "images/bloodborne2.jpg",
        ),
    );



    $selectedGame = 1;

    switch($selectedGame){
        case 1:
            $game = $gameRaiReview2["sekiro"];
            break;
        case 2:
            $game = $gameRaiReview2["bloodborne"];
            break;
        default:
            $game = $gameRaiReview2["sekiro"];
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
    <meta name="author" content="Rainier Gondres">
    <title>Rai review 2</title>
    <link rel="icon" href="images/Game_Stars_logo_2.png" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css">
    <script src="lib/index.js" defer></script>
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
            <section class="raiGame1">
                <img src="<?php echo $game['image']; ?>" alt="<?php echo $game['title']; ?>" class="raiGameImage">
                <img src="<?php echo $game['image2']; ?>" alt="<?php echo $game['title']; ?>" class="raiGameImage">
            </section>
            <p class="game-rating"><strong>Rating:</strong> ⭐ <?php echo $game['rating']; ?>/10</p>
            <section class="raiGame2">
                <h1><?php echo $game['title']; ?></h1>
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
