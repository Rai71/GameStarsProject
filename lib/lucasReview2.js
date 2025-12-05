const reviewGames = {
    "callofduty":  {
        title: "Call Of Duty Modern Warfare 3",
        pegi: "pegi: 12",
        developer: "Embark Studios",
        releasedate: "10 Nov, 2023",
        genre: "Action, Fps, PVP",
        rating: "7/10",
        description: "In the direct sequel to the record-breaking Call of Duty®: Modern Warfare® II, Captain Price and Task Force 141 face off against the ultimate threat. The ultranationalist war criminal Vladimir Makarov is extending his grasp across the world causing Task Force 141 to fight like never before.",
        image: "images/callofduty.png",
        image2: ""
    },
    "warzone": {
        title: "War Zone",
        pegi: "pegi: 18",
        developer: "Infinity Ward",
        releasedate: "16 Nov, 2022",
        genre: "Fps, Battle royale",
        rating: "7/10",
        description: "Drop In With the Squad. Outlast the competition across epic modes like Battle Royale, Resurgence, Casual modes, and more. But the action doesn’t stop there, with more updates to come! Loot For Rewards Discover supply boxes and complete contracts to build your arsenal and gain a tactical advantage.",
        image: "images/Warzone.jpg",
        image2: ""
    }
};
let selectedGame = 1;

switch (selectedGame){
    case 1:
        game = reviewGames["callofduty"];
        console.log("Call of duty wordt getoond.");
        break;
    case 2:
        game = reviewGames["warzone"];
        console.log("War Zone wordt getoond.");
        break;
    default:
        game = reviewGames["warzone"];
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