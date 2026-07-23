function update_points() {
    let points = 0;
    let score = 0;

    // Retrieve the point count from storage
    if (localStorage.getItem("points") === null)
        points = 0;
    else {
        points = localStorage.getItem("points");
        points = Number(points);
    }

    // Retrieve the score from storage
    if (sessionStorage.getItem("score") === null) {
        score = 0;
        return; // If score does not exist, exit the func
    }

    else {
        score = sessionStorage.getItem("score");
        score = Number(score);
    }

    // Update the points and save it to localStorage
    points += score;
    localStorage.setItem("points", points);
    sessionStorage.removeItem("score");
}