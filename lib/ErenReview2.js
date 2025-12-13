const EaSportsFC26 = {
    title: "EA Sports FC 26",
    pegi: "pegi: 3",
    developer: "EA Sports",
    releasedate: "26 Sep, 2025",
    genre: "Sports, Football",
    rating: "7,7/10",
    description:"EA Sports FC 26 is de nieuwste voetbalgame van EA met realistische gameplay, officiële teams en competities, verbeterde Ultimate Team, vernieuwde carrièremodus en uitgebreide online opties. Bouw je droomteam en speel lokaal of online tegen spelers van over de hele wereld.",
    image: "images/fc26.png"
};

const MineCraft = {
    title: "MineCraft",
    pegi: "pegi: 7",
    developer: "Mojang Studios",
    releasedate: "18 Nov, 2011",
    genre: "Sandbox, Survival, Adventure",
    rating: "10/10",
    description: "Minecraft is een sandbox-game waarin spelers oneindige werelden kunnen bouwen, verkennen en overleven. Verzamel grondstoffen, bouw prachtige constructies, versla vijanden en speel alleen of samen met vrienden in multiplayer.",
    image: "images/minecraft.png"
}
const Roblox = {
    title: "Roblox",
    pegi: "varieert per game",
    developer: "Roblox Corporation",
    releasedate: "2006",
    genre: "Sandbox, Multiplayer, User-Generated Games",
    rating: "7",
    description:"Roblox is een platform waarin spelers hun eigen games kunnen maken en spelen — van avonturen en role-plays tot shooters en simulaties. Elke game (‘ervaring’) is anders, met unieke regels, stijlen en spelerspopulatie. Geschikt voor een zeer breed publiek afhankelijk van de gekozen ervaring.",
    image: "images/roblox.png",
    image2: "images/roblox2.png",
};

const Kovaaks = {
    title: "Kovaaks",
    pegi: "12",
    developer: "KovaaK Games",
    releasedate: "03 Apr 2018",
    genre: "Action, Simulation, FPS / Aim Trainer",
    rating: "7.9",
    description: "KovaaKs is een aim-trainer waarmee je je doel- en reactietijd kunt verbeteren met honderden scenario’s en workshops. Ideaal voor spelers die beter willen worden in FPS games — oefen tracking, flicks en reflexen, en pas training toe in je favoriete shooters.",
    image: "images/kovaaks.png",
    image2: "images/kovaaks2.jpg",
};

let selectedGame = 2;

switch (selectedGame){
    case 1:
        game = Roblox;
        console.log("Roblox wordt getoond.");
        break;
    case 2:
        game = Kovaaks;
        console.log("Kovaaks wordt getoond.");
        break;
    default:
        console.log("Ongeldige game-keuze.");
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
