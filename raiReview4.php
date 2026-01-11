
<?php
session_start();
if (!isset($_SESSION['reviews'])) {
    $_SESSION['reviews'] = array();
}

if (isset($_POST['submit'])) {
    $newReview = array(
        'naam' => htmlspecialchars($_POST['naam']),
        'beschrijving' => htmlspecialchars($_POST['beschrijving']),
        'rating' => htmlspecialchars($_POST['rating'])
    );
    $_SESSION['reviews'][] = $newReview;
}
    $reviewGames = array(
        "DragonBallXenoVerse"  => array(
            "title" => "Dragon BallXenoVerse",
            "pegi" => 12,
            "developer" => "Bandai Namco Entertainment, Dimps",
            "release" => "4 oktober 2014",
            "genre" => "Vechtspel, Computerrollenspel, Actiespel, Avonturenspel",
            "rating" => "9.5",
            "description" => "Dragon Ball Xenoverse is een action-RPG-vechtspel waarin spelers een eigen avatar creëren om samen met klassieke personages te vechten. Ze grijpen in tijdens beroemde gevechten om een corrupte tijdlijn te herstellen. Het spel bevat personagecreatie, een centrale hubstad (Toki Toki City) en unieke verhaalmissies die draaien om tijdreizen en de mysterieuze Time Breakers. Het combineert 3D-gevechten met RPG-elementen, waardoor spelers rassen kunnen kiezen zoals Saiyans, Majins en Namekians, vaardigheden kunnen leren van meesters zoals Goku en nieuwe locaties kunnen verkennen. Zo biedt het een origineel verhaal binnen het Dragon Ball-universum.",
            "platform" => "PC, PlayStation 3, PlayStation 4, Xbox 360, Xbox One,",

        ),
        "DragonBallXenoVerse2" => array(
            "title" => "Dragon Ball XenoVerse 2",
            "pegi" => 12,
            "developer" => "Dimps, QLOC",
            "release" => "8 oktober 2016",
            "genre" => "Vechtspel, Actiespel, Computerrollenspel, Avonturenspel, Casual game, Massively Multiplayer, Adventure",
            "rating" => "9.5",
            "description" => "Dragon Ball Xenoverse 2 is een action-RPG waarin je een aangepaste Time Patroller creëert om de Dragon Ball-tijdlijn te beschermen tegen schurken die de geschiedenis willen veranderen. Je verkent de uitgestrekte hubstad Conton City, traint met iconische personages en vecht door verschillende tijdperken heen in 3D-arena’s. Het spel biedt diepgaande aanpassingsmogelijkheden, uitgebreide PvE- en PvP-content en jaren aan DLC. Het bouwt voort op het origineel door de wereld uit te breiden en content uit Dragon Ball Super toe te voegen, wat zorgt voor een MMO-achtige ervaring met epische gevechten en karaktergroei.",
            "platform" => "PlayStation 4, Playstation 5, Nintendo Switch, Xbox One, Xbox series X, PC"
        )
    );
    $selectedGame = 1;
    switch ($selectedGame){
        case 1:  
            $game = $reviewGames["DragonBallXenoVerse"];
            break;
        case 2:
            $game = $reviewGames["DragonBallXenoVerse2"];
            break;
        default:
            $game = $reviewGames["DragonBallXenoVerse"];
            break;
    }


if (!empty($_SESSION['reviews'])) {
    $sum = $game['rating'];
    foreach ($_SESSION['reviews'] as $r) {
        $sum += $r['rating'] * 2;
    }
    $averageRating = round($sum / (count($_SESSION['reviews']) + 1), 1);
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
    <title>Rai Review 4</title>
    <link rel="icon" href="images/Game_Stars_logo_2.png" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css">
    <script src="lib/index.js" defer></script>
    <script src="https://kit.fontawesome.com/a2c653daa5.js" crossorigin="anonymous"></script>
    <script src="lib/raiReview4.js" defer></script>
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
            echo "        
            <section class='raiGameLayout'>
            <h1>{$game['title']}</h1>
                <section id='gameContainer'></section>  
                                <p class='game-rating'><strong>Rating:</strong> ⭐ {$averageRating}/10</p>
                                <section class='raiGame2'>
                                    <p><strong>PEGI:</strong> {$game['pegi']}</p>
                                    <p><strong>Ontwikkelaar:</strong> {$game['developer']}</p>
                                    <p><strong>Releasejaar:</strong> {$game['release']}</p>
                                    <p><strong>Genre:</strong> {$game['genre']}</p>
                                    <article class='raiGameStory'>
                                        <h2>Beschrijving</h2>
                                        <p>{$game['description']}</p>
                                    </article>
                                </section>
                            </section>
                        </section>
                    </section>
                    <section class='reviewForm'>
                        <form method='POST' action=''>
                            <h1>Review</h1>
                            <section class='reviewInputBox'>
                                <input type='text' placeholder='Naam' name='naam' required>
                            </section>
                            <section class='reviewInputBox'>
                                <textarea rows='5' name='beschrijving' placeholder='Beschrijving' required></textarea>
                            </section>
                            <section class='reviewInputBox'>
                                <label>Rating:</label><br>
                                <input type='radio' name='rating' value='1' required> 1
                                <input type='radio' name='rating' value='2' required> 2
                                <input type='radio' name='rating' value='3' required> 3
                                <input type='radio' name='rating' value='4' required> 4
                                <input type='radio' name='rating' value='5' required> 5
                            </section>
                            <input type='submit' name='submit'>
                        </form>    
                </section>
        </section>
            ";
        ?>
        <?php
            if (!empty($_SESSION['reviews'])) {
                echo '<section class="raiGameLayout">';
                foreach ($_SESSION['reviews'] as $review) {
                    echo '
                    <section class="submitted-review">
                        <h3>' . $review['naam'] . '</h3>
                        <p>' . $review['beschrijving'] . '</p>
                        <p>Rating: ' . $review['rating'] . '/5</p>
                    </section>';
                }
                echo '</section>';
            }
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
        <p id="trademark">&copy; 2025 GameStars | Gemaakt door R. Gondres, E. Yilmaz en L. Zonneveld</p>
    </footer>
</body>
</html>