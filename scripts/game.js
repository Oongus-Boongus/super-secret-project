let game_links = [
    "https://gd.games/instant-builds/5ce93527-646c-44ab-bbc1-6049854f26a4",
    "B",
    "C",
    "D"
]

// Set the iframe's source to the selected game
let frame = document.getElementById("frame");
let selected_game = sessionStorage.getItem("game_to_load");

frame.src = game_links[selected_game];

// Get the score from the game
let score = 0;

window.addEventListener("message", function (event) {
    score = Number(event.data);
    sessionStorage.setItem("score", score);
});