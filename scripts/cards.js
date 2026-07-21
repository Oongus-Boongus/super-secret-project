let card_table = document.getElementById("card_table");
let cell_id = 0
let card_states;
let lockpicks;
let is_unlock_confirmed;

// Retrieve the card states from storage
if (JSON.parse(localStorage.getItem("card_states")) === null) {
    card_states = [];

    for (let i = 0; i < 100; i++) {
        card_states[i] = false;
    }
}
else
    card_states = JSON.parse(localStorage.getItem("card_states"));

// Retrieve the lockpick count from storage
if (localStorage.getItem("lockpicks") === null)
    lockpicks = 0;
else
    lockpicks = localStorage.getItem("lockpicks");

// Update the counters at the top of the page
let unlocks = 0;

for (let i = 0; i < card_states.length; i++) {
    if (card_states[i]) {unlocks += 1}
}

document.getElementById("unlock_counter").innerText = `You have unlocked ${unlocks} out of 100 cards!`;
document.getElementById("lockpick_counter").innerText = `You have ${lockpicks} lockpicks available to use!`;

// Create the table
for (let i = 0; i < 50; i++) {
    let tr = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
        let td = document.createElement("td");
        td.id = cell_id;

        // Set initial values from localstorage
        if (card_states[cell_id]) // unlocked
            td.innerText = reasons[cell_id];
        else // locked
            td.innerText = "Locked";

        // Logic for when a cell is clicked
        td.addEventListener("click", function (e) {
            let current_cell_index = e.currentTarget.id;

            // Unlocked cell clicked
            if (card_states[current_cell_index]) {
                sessionStorage.setItem("current_card_text", reasons[current_cell_index]); // temp storage to send data to zoomed page
                document.location.href = "card_zoomed.html";
            }

            // Locked cell clicked
            else {
                // Only ask for confirmation if there is a lockpick available
                if (lockpicks > 0) {
                    is_unlock_confirmed = confirm("Are you sure you want to unlock this cell?");
                    
                    // Decrement and save the lockpick value
                    lockpicks -= 1;
                    lockpicks = localStorage.setItem("lockpicks", lockpicks);
                }
            }
            
            // If the unlock is confirmed, mark it as unlocked, save that state, and go to the zoomed version first
            if (is_unlock_confirmed) {
                card_states[current_cell_index] = true;
                localStorage.setItem("card_states", JSON.stringify(card_states));

                sessionStorage.setItem("current_card_text", reasons[current_cell_index]); // temp storage to send data to zoomed page
                document.location.href = "card_zoomed.html";
            }
        });

        tr.appendChild(td);

        cell_id += 1;
    }

    card_table.appendChild(tr);
}

// UNCOMMENT THIS AFTER DEVELOPMENT
// // If the user closes the page, save the card states
// window.onbeforeunload = function(){
//    localStorage.setItem("card_states", JSON.stringify(card_states));
// }