let card_table = document.getElementById("card_table");
let cell_id = 0
let prize_states;
let lockpicks;
let is_unlock_confirmed;

let prizes = [
    "<img src='assets/favicon.png'> prize 1",
    "prize 2",
    "prize 3",
    "prize 4"
];

// Retrieve the card states from storage
if (JSON.parse(localStorage.getItem("prize_states")) === null) {
    prize_states = [];

    for (let i = 0; i < 4; i++) {
        prize_states[i] = false;
    }
}

else
    prize_states = JSON.parse(localStorage.getItem("prize_states"));

// Retrieve the point count from storage
if (localStorage.getItem("lockpicks") === null)
    lockpicks = 0;
else {
    lockpicks = localStorage.getItem("lockpicks");
    lockpicks = Number(lockpicks);
}

// Create the prize cards
for (let i = 0; i < 2; i++) {
    let tr = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
        let td = document.createElement("td");
        td.id = cell_id;

        // Set initial values from localstorage
        if (prize_states[cell_id]) // unlocked
            td.innerHTML = prizes[cell_id];
        else // locked
            td.innerText = "Locked";

        // Logic for when a cell is clicked
        td.addEventListener("click", function (e) {
            let current_cell_index = e.currentTarget.id;

            // Unlocked cell clicked
            if (prize_states[current_cell_index]) {
                sessionStorage.setItem("current_card_text", prizes[current_cell_index]); // temp storage to send data to zoomed page
                document.location.href = "prize_card_zoomed.html";
            }

            // Locked cell clicked
            else {
                // Only ask for confirmation if there is a lockpick available
                if (lockpicks > 0) {
                    is_unlock_confirmed = confirm("Are you sure you want to unlock this card?");
                    
                    // Decrement and save the lockpick value
                    lockpicks -= 1;
                    lockpicks = localStorage.setItem("lockpicks", lockpicks);
                }
            }
            
            // If the unlock is confirmed, mark it as unlocked, save that state, and go to the zoomed version first
            if (is_unlock_confirmed) {
                is_unlock_confirmed = false;
                prize_states[current_cell_index] = true;
                localStorage.setItem("prize_states", JSON.stringify(prize_states));

                sessionStorage.setItem("current_card_text", prizes[current_cell_index]); // temp storage to send data to zoomed page
                document.location.href = "prize_card_zoomed.html";
            }
        });

        tr.appendChild(td);

        cell_id += 1;
    }

    card_table.appendChild(tr);
}