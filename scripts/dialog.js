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
    ["Omg is that you Alex!!! Hai hai!!! It's so nice to see you again!! How are you sweetheart!!", "assets/Default Pose.png"],
    ["Yayayaya! That's amazing!! I'm doing good too!!", "assets/Jolly Arms Up Pose.png"],
    ["Actually, this is perfect timing!!", "assets/Thinking Pose.png"],
    ["Your boyfie Mysia got you something for Girlfriend Day!! And they asked me to show it to you!!", "assets/Jolly Pose.png"],
    ["...Just one problem... I... might have... messed up...", "assets/Sad Thinking Pose.png"],
    ["You see, it's a very special gift that is only for you!", "assets/Default Arms Up Pose.png"],
    ["So Mysia gave me a special key that only you can use to open the locks on the gift!!", "assets/Default Pose.png"],
    ["But... me lost it.... i sowwy :<", "assets/Sad Pose.png"],
    ["If only there was a way to fix it... hmm...", "assets/Thinking Pose.png"],
    ["OOO!! Me has an idea!!", "assets/Jolly Arms Up Pose.png"],
    ["But i needs your help, if that's okie with you!!", "assets/Default Thinking Pose.png"],
    ["You will? Amazing!! Thamkies!!", "assets/Jolly Pose.png"],
    ["There is this place near here! They have games and things!", "assets/Thinking Pose.png"],
    ["Winning games gives you points!! But here is the important part!", "assets/Default Arms Up Pose.png"],
    ["For some weird reason, this place has lockpicks you can buy with your points!!", "assets/Default Thinking Pose.png"],
    ["They seem very cheap though, so they will probably break after opening only one lock.", "assets/Sad Thinking Pose.png"],
    ["I know it's dumb to have to work for your gift because of me...", "assets/Sad Pose.png"],
    ["But Mysia will be very upset if the gift doesn't work!! And I really think you will love it!!", "assets/Default Pose.png"],
    ["And don't worry! The games place saves your points!! So if you need to leave", "assets/Jolly Arms Up Pose.png"],
    ["the next time you come back you will have all your points and lockpicks! And any locks you opened will stay open!", "assets/Jolly Pose.png"],
    ["What's that? Where are the locks? And game place?", "assets/Default Thinking Pose.png"],
    ["They are right behind me--OH", "assets/Thinking Pose.png"],
    ["I forgot to turn on the lights!! Here I will go flip the light switch!", "assets/Default Arms Up Pose.png"],
    ["Good luck sweetie I know you can do it!!", "assets/Jolly Pose.png"],
]

let can_dialog_start = false;

let i = 0; // Index of character in a line of dialog
let current_line = 0 // Counter for Jinnie's dialog position

let txt = dialog_lines[0][0]; // Initial line
let speed = 5; // The speed in milliseconds
let is_scrolling = false;

let jinnie_img = document.getElementById("jinnie"); // Reference to Jinnie's frame
jinnie_img.src = dialog_lines[0][1]; // Initial frame

// Check for when the fade in has ended
document.getElementById("jinnie_div").addEventListener("animationend", function () {
    can_dialog_start = true;
    typeWriter(); // Print initial line
});

// Check for taps
document.addEventListener("click", function (evt) {
    // If the text is not scrolling, and the user clicks/taps, advance the line
    if (can_dialog_start && !is_scrolling && current_line < dialog_lines.length - 1) {
        current_line += 1;

        i = 0
        txt = dialog_lines[current_line][0];
        jinnie_img.src = dialog_lines[current_line][1];

        document.getElementById("dialog_text").innerHTML = "";

        typeWriter()
    }

    // Go to cards page if the dialog is done
    else if (can_dialog_start && !is_scrolling && current_line >= dialog_lines.length - 1) {
        localStorage.setItem("hasSeenCutscene", true); // Set flag so that user doesn't rewatch the cutscene
        document.location.href = "cards.html";
    }
}, true);