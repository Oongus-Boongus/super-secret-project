let game_links = [
    "https://gd.games/instant-builds/30f8395f-3fcf-4cac-b152-f3e40cde9205",
    "https://gd.games/instant-builds/632752f8-c90a-4b56-88c6-207ef12331de",
    "https://gd.games/instant-builds/c7bd5812-8be4-42ec-899d-80a940ae6657",
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