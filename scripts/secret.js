let card_table = document.getElementById("card_table");
let cell_id = 0
let prize_states;
let lockpicks;
let is_unlock_confirmed;

let prizes = [
    "<img class='prize' src='assets/prizes/1.jpg'> <br> no my mirror is NOT dirty idk what you mean",
    "<img class='prize' src='assets/prizes/2.jpg'> <br> :p",
    "<img class='prize' src='assets/prizes/3.jpg'> <br> do you have games on your phone OwO",
    "<img class='prize' src='assets/prizes/4.jpg'> <br> idk i just wanted to show my gloves :3",
    "<audio controls><source src='assets/prizes/5.mp3' type='audio/mpeg'>Error! Message Mysia!</audio> <br> It's really shit lmao idk why i did this",
    "<audio controls><source src='assets/prizes/6.mp3' type='audio/mpeg'>Error! Message Mysia!</audio> <br> Hehe story timeeee",
    "<img class='prize' src='assets/prizes/7.png'> <br> i was gonna do a full portrait of you but i suck at drawing people, so here is my drawing of just your eyes :3",
    "<img class='prize' src='assets/prizes/8.png'> <br> And yes, ofc you get Kirby Art :)"
];

// Retrieve the card states from storage
if (JSON.parse(localStorage.getItem("prize_states")) === null) {
    prize_states = [];

    for (let i = 0; i < prizes.length; i++) {
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
for (let i = 0; i < 4; i++) {
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