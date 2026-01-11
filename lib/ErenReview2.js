const reviewGames = {  
    "EaSportsFC26": {
        title: "EA Sports FC 26",
        pegi: "pegi: 3",
        developer: "EA Sports",
        releasedate: "26 Sep, 2025",
        genre: "Sports, Football",
        rating: "7,7/10",
        description:"EA Sports FC 26 is de nieuwste voetbalgame van EA met realistische gameplay, officiële teams en competities, verbeterde Ultimate Team, vernieuwde carrièremodus en uitgebreide online opties. Bouw je droomteam en speel lokaal of online tegen spelers van over de hele wereld.",
        image: "images/fc26.png",
        image2: "images/fifa266.png",
    },
    "MineCraft": {
        title: "MineCraft",
        pegi: "pegi: 7",
        developer: "Mojang Studios",
        releasedate: "18 Nov, 2011",
        genre: "Sandbox, Survival, Adventure",
        rating: "10/10",
        description: "Minecraft is een sandbox-game waarin spelers oneindige werelden kunnen bouwen, verkennen en overleven. Verzamel grondstoffen, bouw prachtige constructies, versla vijanden en speel alleen of samen met vrienden in multiplayer.",
        image: "images/minecraft.png",
        image2: "images/minecraft2.png",
    }
};
let selectedGame = 1;

if (selectedGame === 1){
        game = reviewGames["EaSportsFC26"];
} else {
        game = reviewGames["MineCraft"];
}

const container = document.querySelector("#gameContainer");

container.innerHTML = `    
    <section class="raiGameLayout">
        <h1>${game.title}</h1>
        <section class="raiGame1">
            <img src="${game.image}" alt="${game.title}" class="raiGameImage">
            <img src="${game.image2}" alt="${game.title}" class="raiGameImage">
        </section>
        <p class="game-rating"><strong>Rating:</strong>⭐ ${game.rating}</p>
        <section class="raiGame2">
            <p><strong>PEGI:</strong> ${game.pegi}</p>
            <p><strong>Ontwikkelaar:</strong> ${game.developer}</p>
            <p><strong>Releasejaar:</strong> ${game.releasedate}</p>
            <p><strong>Genre:</strong> ${game.genre}</p>
            <article class="raiGameStory">
                <h2>Beschrijving</h2>
                <p>${game.description}</p>
            </article>
        </section>
    </section>
`;