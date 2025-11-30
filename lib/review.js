const ArcRaiders = {
    title: "Arc Raiders",
    pegi: "pegi: 12",
    developer: "Embark Studios",
    releasedate: "30 Oct, 2025",
    genre: "Extraction Shooter",
    rating: "9/10",
    description: "In ARC Raiders, gameplay flows between the surface ruled by lethal machines, and the vibrant underground society of Speranza. Craft, repair, and upgrade your gear in the safety of your own workshop, before venturing topside to scavenge the remnants of a devastated but beautiful world. Play solo or in parties up to three, navigating the constant threat of ARC's machines and the unpredictable choices of fellow survivors. In the end, only you decide what kind of Raider you are - and how far you’ll go to prevail.",
    image: "images/arcraiders.jpg"
};

const WarZone = {
    title: "WarZone",
    pegi: "pegi: 18",
    developer: "Infinity Ward",
    releasedate: "16 Nov, 2022",
    genre: "Fps, Battle royale",
    rating: "7/10",
    description: "Drop In With the Squad. Outlast the competition across epic modes like Battle Royale, Resurgence, Casual modes, and more. But the action doesn’t stop there, with more updates to come! Loot For Rewards Discover supply boxes and complete contracts to build your arsenal and gain a tactical advantage.",
    image: "images/Warzone.jpg"
};

let selectedGame = 2;

switch (selectedGame){
    case 1:
        game = ArcRaiders;
        console.log("Valorant wordt getoond.");
        break;
    case 2:
        game = WarZone;
        console.log("Nine sols wordt getoond.");
        break;
    default:
        console.log("Ongeldige game-keuze.");
}

const container = document.querySelector("#gameContainer");

container.innerHTML = `    
    <section class="raiGameLayout">
        <section class="raiGame1">
            <h1>${game.title}</h1>
            <img src="${game.image}" alt="${game.title}" class="raiGameImage">
            <p class="game-rating"><strong>Rating:</strong>⭐ ${game.rating}</p>
        </section>
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

const game2 = {
    title: "WarZone",
    pegi: "",
    developer: "",
    releasedate: "",
    genre: "",
    rating: "",
    description: ""
    
};

const game3 = {
    title: "",
    pegi: "",
    developer: "",
    releasedate: "",
    genre: "",
    rating: "",
    description: ""
    
};

const game4 = {
    title: "",
    pegi: "",
    developer: "",
    releasedate: "",
    genre: "",
    rating: "",
    description: ""
    
};

const game5 = {
    title: "Tekken 8",
    pegi: "Pegi 16",
    developer: "Bandai Namco Studios",
    releasedate: "26 januari 2024",
    genre: "Fighting",
    rating: "9/10",
    description: "Een snelle en grafisch indrukwekkende fighting game met nieuwe mechanics en intense gevechten."

};

const game6 = {
    title: "Street Fighter 6",
    pegi: "PEGI 12",
    developer: "Capcom",
    releasedate: "2 juni 2023",
    genre: "Fighting",
    rating: "9/10",
    description: "De nieuwste Street Fighter met moderne controls, sterke online modes en vernieuwde gameplay."

};