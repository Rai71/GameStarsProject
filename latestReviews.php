<?php 
    $reviewGames = array(
        "ArcRaiders" => array(
            "title" => "Arc Raiders",
            "pegi" => 16,
            "developer" => "Embark Studios",
            "release" => "2024",
            "genre" => "FPS, Co-op, Shooter",
            "rating" => "7.8",
            "description" => "Arc Raiders is a fast-paced co-op shooter where teams battle robotic invaders across dynamic terrains.",
            "platform" => "PC, PlayStation 5, Xbox Series X/S",
            "image" => "images/arcraiders.jpg",
            "trailer" => "https://www.youtube.com/embed/_GZpjgRy35o?si=MyUAQEMfF2bFLGX4",
            "visitorReviews" => array(
                array("name" => "Sam", "text" => "Heerlijke co-op ervaring met veel actie.", "rating" => 4),
                array("name" => "Marta", "text" => "Visueel mooi, maar nog iets te weinig content.", "rating" => 3),
                array("name" => "Joey", "text" => "Echt leuk met vrienden, veel replaywaarde.", "rating" => 4)
            )
        ),
        "RedDead2" => array(
            "title" => "Red Dead Redemption 2",
            "pegi" => 18,
            "developer" => "Rockstar Games",
            "release" => "2018",
            "genre" => "Action-Adventure, Open World",
            "rating" => "9.6",
            "description" => "Een episch verhaal in het Wilde Westen met diepe personages en uitstekende wereldbouw.",
            "platform" => "PlayStation 4, Xbox One, PC",
            "image" => "images/Red Dead Redemption 2.jpg",
            "trailer" => "https://www.youtube.com/embed/gmA6MrX81z4?si=ob04dP5NfedkrYNG",
            "visitorReviews" => array(
                array("name" => "Lotte", "text" => "Fantastische ervaring, zeer meeslepend.", "rating" => 5),
                array("name" => "Henk", "text" => "Soms traag, maar het verhaal maakt alles goed.", "rating" => 4),
                array("name" => "Iris", "text" => "Eén van de beste spellen ooit gemaakt.", "rating" => 5)
            )
        ),
        "Phasmophobia" => array(
            "title" => "Phasmophobia",
            "pegi" => 16,
            "developer" => "Kinetic Games",
            "release" => "2020",
            "genre" => "Horror, Multiplayer, Co-op",
            "rating" => "9.2",
            "description" => "Een coöperatieve paranormale jacht waarbij teamwork en onderzoek centraal staan.",
            "platform" => "PC, VR",
            "image" => "images/phasmophobia.jpg",
            "trailer" => "https://www.youtube.com/embed/adFNARIHlOs",
            "visitorReviews" => array(
                array("name" => "Rai", "text" => "Intense atmosfeer, goed voor jump-scares.", "rating" => 5),
                array("name" => "Lucas", "text" => "Leuk met vrienden, soms buggy maar charmant.", "rating" => 4),
                array("name" => "Eren", "text" => "De spanning is geweldig; aanrader voor horrorfans.", "rating" => 5)
            )
        ),
        "HollowKnight" => array(
            "title" => "Hollow Knight",
            "pegi" => 12,
            "developer" => "Team Cherry",
            "release" => "2017",
            "genre" => "Metroidvania, Platformer, Indie",
            "rating" => "8.9",
            "description" => "Een sfeervolle 2D metroidvania met strakke platform- en vechtmechanieken.",
            "platform" => "PC, Nintendo Switch, PlayStation 4, Xbox One",
            "image" => "images/hollowknight.jpg",
            "trailer" => "https://www.youtube.com/embed/yQxwbZsL14Y?si=5wMxwrQlUpdOG2-5",
            "visitorReviews" => array(
                array("name" => "Bas", "text" => "Sfeervolle wereld en goede uitdaging.", "rating" => 5),
                array("name" => "Noa", "text" => "Mooi ontworpen met veel geheimen.", "rating" => 4),
                array("name" => "Kim", "text" => "Geweldige artstyle en muziek.", "rating" => 5)
            )
        )
    );

    $selectedGame = 1;
    switch ($selectedGame){
        case 1:  
            $game = $reviewGames["Whosyourdaddy"];
            break;
        case 2:
            $game = $reviewGames["Phasmophobia"];
            break;
        default:
            $game = $reviewGames["Whosyourdaddy"];
            break;
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
    <meta name="author" content="Lucas Zonneveld">
    <title>Latest Reviews</title>
    <link rel="icon" href="images/Game_Stars_logo_2.png" type="image/x-icon">
    <link rel="stylesheet" href="css/style.css">
    <script src="lib/index.js" defer></script>
    <script src="lib/latestReview.js" defer></script>
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
        <?php
            $slides = array();
            $under16 = null;
            foreach($reviewGames as $key => $rg){
                $pegi = intval(preg_replace('/[^0-9]/','',$rg['pegi']));
                if($pegi >= 16){
                    $slides[] = $rg;
                } else {
                    if(!$under16) $under16 = $rg;
                }
            }
            $slides = array_slice($slides, 0, 3);
            if(!$under16){
                foreach($reviewGames as $rg){
                    if(intval(preg_replace('/[^0-9]/','',$rg['pegi'])) < 16){
                        $under16 = $rg;
                        break;
                    }
                }
            }
            $slideshow = $slides;
            if($under16) $slideshow[] = $under16;
            $total = count($slideshow);
            ?>
        <section class='latestReviewsContainer'>
            <h1>Latest Reviews</h1>
            <?php foreach($slideshow as $i => $game): ?>
                <section class='homeslide fade'>
                    <article class='nummerText'><?php echo ($i + 1) . " / " . $total; ?></article>
                    <img src='<?php echo htmlspecialchars($game['image']); ?>' alt='<?php echo htmlspecialchars($game['title']); ?>'>
                    <section class='gameContainer'>  
                        <h2><?php echo htmlspecialchars($game['title']); ?></h2>
                        <p class='game-rating'><strong>Rating:</strong> ⭐ <?php echo htmlspecialchars($game['rating']); ?>/10</p>
                        <section class='raiGame2'>
                            <p><strong>PEGI:</strong> <?php echo htmlspecialchars($game['pegi']); ?></p>
                            <p><strong>Ontwikkelaar:</strong> <?php echo htmlspecialchars($game['developer']); ?></p>
                            <p><strong>Releasejaar:</strong> <?php echo htmlspecialchars($game['release']); ?></p>
                            <p><strong>Genre:</strong> <?php echo htmlspecialchars($game['genre']); ?></p>
                            <p><strong>Platform:</strong> <?php echo htmlspecialchars($game['platform']); ?></p>
                            <article class='raiGameStory'>
                                <h2>Beschrijving</h2>
                                <p><?php echo htmlspecialchars($game['description']); ?></p>
                            </article>

                            <article class='reviewsBlock'>
                                <h3>Bezoekersreviews</h3>
                                <?php if(isset($game['visitorReviews']) && is_array($game['visitorReviews'])): ?>
                                    <?php foreach($game['visitorReviews'] as $vr): ?>
                                        <div class='visitor-review'>
                                            <strong><?php echo htmlspecialchars($vr['name']); ?></strong>
                                            <p><?php echo htmlspecialchars($vr['text']); ?></p>
                                            <p>Rating: <?php echo intval($vr['rating']); ?>/5</p>
                                        </div>
                                    <?php endforeach; ?>
                                <?php else: ?>
                                    <p>Geen bezoekersreviews beschikbaar.</p>
                                <?php endif; ?>
                            </article>
                            <article class='trailer'>
                                <h3>Trailer</h3>
                                <?php if(!empty($game['trailer'])): ?>
                                    <iframe width='560' height='315' src='<?php echo htmlspecialchars($game['trailer']); ?>' title='YouTube trailer' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share' allowfullscreen></iframe>
                                <?php endif; ?>
                            </article>

                        </section>
                    </section>
                </section>
            <?php endforeach; ?>
            <a class='prev' onclick='lr_plusSlides(-1)'>&#10094;</a>
            <a class='next' onclick='lr_plusSlides(1)'>&#10095;</a>
            <section class='dot-container'>
                <?php for($d = 1; $d <= $total; $d++): ?>
                    <span class='dot' onclick='lr_currentSlide(<?php echo $d; ?>)'></span>
                <?php endfor; ?>
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