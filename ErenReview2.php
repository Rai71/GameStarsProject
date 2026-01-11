<?php 
    $reviewGames => array(
        "EaSportsFC26" => array(
            "title" => "EA Sports FC 26",
            "pegi" => 3,
            "developer" => "EA Sports",
            "release" => "26 Sep, 2025",
            "genre" => "Sports, Football",
            "rating" => "7,7",
            "description" => "EA Sports FC 26 is de nieuwste voetbalgame van EA met realistische gameplay, officiële teams en competities, verbeterde Ultimate Team, vernieuwde carrièremodus en uitgebreide online opties. Bouw je droomteam en speel lokaal of online tegen spelers van over de hele wereld.",
            "image" => "images/fc26.png"
            "image2" => "images/fifa266.png"
        );

        "MineCraft" => array(
            "title" => "MineCraft",
            "pegi" => 7,
            "developer" => "Mojang Studios",
            "release" => "18 Nov, 2011",
            "genre" => "Sandbox, Survival, Adventure",
            "rating" => "10",
            "description" => "Minecraft is een sandbox-game waarin spelers oneindige werelden kunnen bouwen, verkennen en overleven. Verzamel grondstoffen, bouw prachtige constructies, versla vijanden en speel alleen of samen met vrienden in multiplayer.",
            "image" => "images/minecraft.png"
            "image2" => "images/minecraft2.png"
        );
    )

$selectedGame = 2

switch ($selectedGame){
    case 1:
        $game = $reviewGames["EaSportsFC26"];
        console.log("EaSportsFC26 wordt getoond.");
        break;
    case 2:
        $game = $reviewGames["MineCraft"]; 
        console.log("MineCraft wordt getoond.");
        break;
    default:
        console.log("Ongeldige game-keuze.");
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
    <meta name="author" content="Eren">
    <title>Rai review 2</title>
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