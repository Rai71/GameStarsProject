<?php 
    $silksong = array(
        "title" => "Hollow Knight Silksong",
        "pegi" => "pegi: 12",
        "developer" => "Team Cherry",
        "release" => "4 Sep, 2025",
        "genre" => "Metroidvania",
        "rating" => "9",
        "description" => "As the lethal hunter Hornet, adventure through a kingdom ruled by silk and song! Captured and taken to this unfamiliar world, prepare to battle mighty foes and solve ancient mysteries as you ascend on a deadly pilgrimage to the kingdom’s peak. Hollow Knight: Silksong is the epic sequel to Hollow Knight, the award winning action-adventure. Journey to all-new lands, discover new powers, battle vast hordes of bugs and beasts and uncover secrets tied to your nature and your past.",
        "image" => "images/hollowknight.jpg"
    );

    $cyberpunk = array(
        "title" => "Cyberpunk 2077",
        "pegi" => 18,
        "developer" => "CD Projekt RED",
        "release" => "10 Dec, 2020",
        "genre" => "Cyberpunk, Open world, RPG",
        "rating" => "8",
        "description" => "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?",
        "image" => "images/Cyberpunk_2077_box_art.jpg"
    );

    $selectedGame = 1;

    if ($selectedGame === 1){
        $game = $silksong;
    } else {
        $game = $cyberpunk;
    }
?>
<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="Ontdek onze uitgebreide reviews van Hollow Knight: Silksong en Cyberpunk 2077 — eerlijke scores, gameplay-analyse en onmisbare tips. Lees nu!">
    <meta name="keywords" content="game reviews, game recensies, gameplay analyse, Hollow Knight Silksong, Cyberpunk 2077, walkthroughs, game tips">
    <meta name="author" content="Lucas Zonneveld">
    <title>Lucas review 2 - GameStars Project</title>
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
        <section class="lucasGameLayout">
            <section class="lucasGame1">
                <img src="<?php echo $game['image']; ?>" alt="<?php echo $game['title']; ?>" class="lucasGameImage">
                <p class="game-rating"><strong>Rating:</strong> ⭐ <?php echo $game['rating']; ?>/10</p>
            </section>
            <section class="lucasGame2">
                <h1><?php echo $game['title']; ?></h1>
                <p><strong>PEGI:</strong> <?php echo $game['pegi']; ?></p>
                <p><strong>Ontwikkelaar:</strong> <?php echo $game['developer']; ?></p>
                <p><strong>Releasejaar:</strong> <?php echo $game['release']; ?></p>
                <p><strong>Genre:</strong> <?php echo $game['genre']; ?></p>
                <article class="lucasGameStory">
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
