function typeWriter() {
    if (i < txt.length) {
        is_scrolling = true;

        document.getElementById("dialog_text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }

    else
        is_scrolling = false;
}

let dialog_lines = [
    ["OMG HAII", "assets/Jolly Arms Up Pose.png"],
    ["Hows youu", "assets/Default Pose.png"],
    ["Me is good thank yous!!", "assets/Jolly Pose.png"],
    ["4", ""],
    ["5", ""],
    ["6", ""],
    ["7", ""],
    ["8", ""],
]

// document.getElementById("dialog_box").style.display = "none";
// document.getElementById("dialog_box").style.display = "block";
let can_dialog_start = true;

let i = 0; // Index of character in a line of dialog
let current_line = 0 // Counter for Jinnie's dialog position

let txt = dialog_lines[0][0]; // Initial line
let speed = 100; // The speed in milliseconds
let is_scrolling = false;

let jinnie_img = document.getElementById("jinnie"); // Reference to Jinnie's frame
jinnie_img.src = dialog_lines[0][1];

// Print initial line
if (can_dialog_start)
    typeWriter();

// If the text is not scrolling, and the user clicks/taps, advance the line
document.addEventListener("click", function (evt) {
    if (!is_scrolling) {
        if (current_line < dialog_lines.length - 1) {current_line += 1;}

        i = 0
        txt = dialog_lines[current_line][0];
        jinnie_img.src = dialog_lines[current_line][1];

        document.getElementById("dialog_text").innerHTML = "";

        typeWriter()
    }
}, true);