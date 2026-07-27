let points;
let lockpicks;
let is_purchase_confirmed = false;

// Retrieve the point count from storage
if (localStorage.getItem("points") === null)
    points = 0;
else {
    points = localStorage.getItem("points");
    points = Number(points);
}

// Retrieve the lockpick count from storage
if (localStorage.getItem("lockpicks") === null)
    lockpicks = 0;
else {
    lockpicks = localStorage.getItem("lockpicks");
    lockpicks = Number(lockpicks);
}

// Update the counters at the top of the page
document.getElementById("point_counter").innerText = `You currently have ${points} points!`;
document.getElementById("lockpick_counter").innerText = `You currently have ${lockpicks} lockpicks!`;

// Add event listeners to each card
let shop_cards = document.getElementsByTagName("td");
shop_cards = Array.from(shop_cards);

shop_cards.forEach(card => {
    card.addEventListener("click", function () {
        // Buy 1 Lockpick
        if (card.id == "shop_card_1" && points >= 150) {
            is_purchase_confirmed = confirm("Are you sure you want to buy this item?");

            // If the purchase is confirmed, decrement points, increment lockpicks, save the state, and refresh the page
            if (is_purchase_confirmed) {
                is_purchase_confirmed = false;
                
                points -= 150;
                lockpicks += 1;

                localStorage.setItem("points", points);
                localStorage.setItem("lockpicks", lockpicks);

                document.location.href = "shop.html";
            }
        }

        // Buy 5 Lockpicks
        else if (card.id == "shop_card_2" && points >= 600) {
            is_purchase_confirmed = confirm("Are you sure you want to buy this item?");

            // If the purchase is confirmed, decrement points, increment lockpicks, save the state, and refresh the page
            if (is_purchase_confirmed) {
                is_purchase_confirmed = false;
                
                points -= 600;
                lockpicks += 5;

                localStorage.setItem("points", points);
                localStorage.setItem("lockpicks", lockpicks);

                document.location.href = "shop.html";
            }
        }
    })
});