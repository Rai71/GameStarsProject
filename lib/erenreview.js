const tekkenR = {
    title: "Tekken 8",
    pegi: "Pegi 16",
    developer: "Bandai Namco Studios",
    releasedate: "26 januari 2024",
    genre: "Fighting",
    rating: "9/10",
    description: "Een snelle en grafisch indrukwekkende fighting game met nieuwe mechanics en intense gevechten.",
    image: "images/Tekken8.jpg"
};

const sfR = {
    title: "Street Fighter 6",
    pegi: "PEGI 12",
    developer: "Capcom",
    releasedate: "2 juni 2023",
    genre: "Fighting",
    rating: "9/10",
    description: "De nieuwste Street Fighter met moderne controls, sterke online modes en vernieuwde gameplay.",
    image: "images/Streetfighter.jpg"
};

let selectedGame = 1;
switch (selectedGame){
    case 1:
        game = tekkenR;
        console.log("Tekken wordt getoond.");
        break;
    case 2:
        game = sfR;
        console.log("Street fighter wordt getoond.");
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