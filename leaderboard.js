// Sample player data
const players = [
    { name: "Player 1", score: 0 },
    { name: "Player 2", score: 0 },
    { name: "Player 3", score: 0 }
];

// Function to render the leaderboard
function renderLeaderboard() {
    const leaderboardBody = document.getElementById('leaderboard-body');
    leaderboardBody.innerHTML = ''; // Clear the leaderboard

    // Loop through each player and create a row in the leaderboard
    players.forEach((player, index) => {
        const row = document.createElement('tr');

        // Player name cell
        const nameCell = document.createElement('td');
        nameCell.textContent = player.name;
        row.appendChild(nameCell);

        // Player score cell
        const scoreCell = document.createElement('td');
        scoreCell.classList.add('score');
        scoreCell.textContent = player.score;
        row.appendChild(scoreCell);

        // Actions cell with increase and decrease buttons
        const actionsCell = document.createElement('td');
        const increaseButton = document.createElement('button');
        increaseButton.onclick = () => updateScore(index, 1);
        const decreaseButton = document.createElement('button');
        decreaseButton.onclick = () => updateScore(index, -1);

        // Append the row to the leaderboard body
        leaderboardBody.appendChild(row);
    });
}

// Function to update the score for a player
function updateScore(playerIndex, amount) {
    players[playerIndex].score += amount; // Update the score
    renderLeaderboard(); // Re-render the leaderboard
}

// Initial rendering of the leaderboard
renderLeaderboard();