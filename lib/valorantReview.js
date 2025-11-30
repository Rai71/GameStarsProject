const valorantReview = {
    title: "Valorant",
    pegi: "pegi: 16",
    developer: "Riot Games",
    releasedate: "2 juni 2020",
    genre: "Tactisch schietspel",
    rating: "9.0/10",
    description: 'Valorant is een free-to-play, 5v5 tactische shooter waarin twee teams het in rondes tegen elkaar opnemen om een “spike” te plaatsen of onschadelijk te maken. Spelers kiezen uit een roster van unieke personages, “agents” genoemd, die elk hun eigen vaardigheden hebben. Die vaardigheden moeten worden gecombineerd met nauwkeurig schieten voor strategisch teamspel. Het spel is ontwikkeld en uitgegeven door Riot Games. Het eerste team dat 13 rondes wint, wint de wedstrijd.',
    image: "images/valorant.jpg",
}

const nineSolsReview = {
    title: "Nine sols",
    pegi: "pegi: 16",
    developer: "Red Candle Games",
    releasedate: "29 mei 2024",
    genre: "Platformspel, Avonturenspel, Vechtspel, Adventure",
    rating: "9.6/10",
    description: 'Nine Sols is een handgetekende 2D-actieplatformer met gevechten die geïnspireerd zijn door Sekiro, waarin spelers een wraakzuchtige held besturen die een zoektocht onderneemt om negen machtige heersers te verslaan. De game combineert intense, snelle gevechten die draaien om deflecties en timing met platforming en verkenning, allemaal binnen een wereld geïnspireerd door Aziatische fantasy. Het is een singleplayer-Metroidvania met een verhaal vol lore, uitdagende baasgevechten en een gedetailleerde, handgetekende artstyle.',
    image: "images/ninesols.jpg",
}

let selectedGame = 2;

switch (selectedGame){
    case 1:
        game = valorantReview;
        console.log("Valorant wordt getoond.");
        break;
    case 2:
        game = nineSolsReview;
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
