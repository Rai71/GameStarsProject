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
        image2: "images/callofduty2.jpg"
    },
    "godofwar": {
        title: "God of War",
        pegi: "16",
        developer: "Santa Monica Studio",
        releasedate: "14 Jan, 2022",
        genre: "Action, Single player, Story",
        rating: "7/10",
        description: "His vengeance against the Gods of Olympus years behind him, Kratos now lives as a man in the realm of Norse Gods and monsters. It is in this harsh, unforgiving world that he must fight to survive… and teach his son to do the same.",
        image: "images/godofwar.jpg",
        image2: "images/godofwar2.jpg"
    }
};
let selectedGame = 1;

if(selectedGame == 1){
    game = reviewGames["callofduty"];
    console.log("Call of duty wordt getoond.");
} else if(selectedGame == 2){
    game = reviewGames["godofwar"];
    console.log("God Of War wordt getoond.");
} else{
    game = reviewGames["godofwar"];
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