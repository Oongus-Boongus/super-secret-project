let game_links = [
    "https://gd.games/instant-builds/30f8395f-3fcf-4cac-b152-f3e40cde9205",
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