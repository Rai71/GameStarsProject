<?php
    $reviewGames = array(
        "FarCry3"  => array(
            "title" => "FarCry3",
            "pegi" => 18,
            "developer" => "Ubisoft Montreal",
            "release" => "29 Nov, 2012",
            "genre" => "Action, FPS, Open World",
            "rating" => "9/10",
            "description" => "Far Cry 3 speelt zich af op een tropisch eiland waar je moet ontsnappen aan piraten onder leiding van Vaas. Verken een grote open wereld, jaag dieren, craft uitrusting en ervaar een intens verhaal vol actie.",
            "image" => "images/FarCry3",
            "image2" => "images/FarCry3F2.png",
            "image3" => "images/FarCry3F3.png",
            "trailer" => "https://www.youtube.com/embed/J6gnOVJsCsM?si=BSXPvXT3TknGIYRO",
        ),
        "FarCry4" => array(
            "title" => "FarCry4",
            "pegi" => 18,
            "developer" => "Ubisoft Montreal",
            "release" => "18 Nov, 2014",
            "genre" => "Action, FPS, Open World",
            "rating" => "9/10",
            "description" => "Far Cry 4 speelt zich af in het bergachtige Kyrat, waar je opstaat tegen de dictator Pagan Min. De game biedt een grote open wereld, dierenjacht, voertuigen en veel co-op mogelijkheden.",
            "image" => "images/FarCry4",
            "image2" => "images/FarCry4F1",
            "image3" => "images/FarCry4F2",
            "trailer" => "https://www.youtube.com/embed/6d60v1OErEY?si=MV8THxLQCi6_ss_F",
        )
    );
    $selectedGame = 2;
    switch ($selectedGame){
        case 1:  
            $game = $reviewGames["FarCry3"];
            break;
        case 2:
            $game = $reviewGames["FarCry4"];
            break;
        default:
            $game = $reviewGames["FarCry3"];
            break;
    }
?>