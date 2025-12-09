const reviewGames = {
    "GhostofTsushima":  {
        title: "Ghost of Tsushima",
        pegi: "pegi: 18",
        developer: "Sucker Punch Productions, Nixxes Software",
        releasedate: "17 juli 2020",
        genre: "Computerrollenspel, Stealthspel, Vechtspel, Action-adventure, Schietspel, Adventure",
        rating: "9.6/10",
        description: "Ghost of Tsushima is een verbluffend openwereld-actie-avonturenspel dat zich afspeelt tijdens de Mongoolse invasie van Japan in 1274. Je speelt als de samoerai Jin Sakai, die zijn eervolle code moet loslaten voor sluipende “Ghost”-tactieken om zijn thuisland te redden. Het spel bevat intense zwaardgevechten, diepe verkenning van het feodale Japan en een meeslepend verhaal over eer, opoffering en identiteit. Spelers bestrijden de Mongolen met samoerai­vaardigheden (stances, katana, boog) en “Ghost”-hulpmiddelen (rookbommen, sluipmoorden) in een prachtige, historisch geïnspireerde wereld, waarbij directe gevechten worden afgewisseld met stealth.",
        image: "images/GhostofTsushima.jpg",
        image2: "images/GhostofTsushima2.jpg",
    },
    "MarvelsSpiderMan2": {
        title: "Marvel's Spider-Man 2",
        pegi: "pegi: 16",
        developer: "Insomniac Games, Nixxes Software",
        releasedate: "20 oktober 2023",
        genre: "Action-adventure, Platformspel, Vechtspel, Adventure",
        rating: "9.3/10",
        description: "Marvel’s Spider-Man 2 is een actie-avonturenspel waarin spelers zowel Peter Parker als Miles Morales besturen terwijl zij het opnemen tegen de door symbioot beïnvloede Venom, Kraven the Hunter en andere vijanden in een uitgebreid New York. Het spel introduceert nieuwe Web Wings, snellere verplaatsing, unieke krachten voor elke Spider-Man en een meeslepende PS5-ervaring met haptische feedback en adaptieve triggers. Het verhaal verkent de uitdagingen van het combineren van heldenplichten met hun persoonlijke leven, terwijl het symbioot Peter tot het uiterste drijft, waardoor beide helden moeten groeien en hun stad moeten beschermen.",
        image: "images/spooderman.webp",
        image2: "images/spooderman2.jpg",
    }
};
let selectedGame = 1;

if (selectedGame === 1){
        game = reviewGames["GhostofTsushima"];
} else {
        game = reviewGames["MarvelsSpiderMan2"];
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