let game_links = [
    "https://gd.games/instant-builds/286e34dc-1273-46ea-a30e-262d123fbdfd",
    "https://gd.games/instant-builds/632752f8-c90a-4b56-88c6-207ef12331de",
    "https://gd.games/instant-builds/bbaae4b6-482f-40f2-ae74-154d6e79a0be"
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