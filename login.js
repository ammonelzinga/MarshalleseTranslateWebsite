function login() {
    const user_name = document.getElementById('userName');
    localStorage.setItem("userName", user_name.value);
    localStorage.setItem("score", 0); 
    // document.getElementById('Thanks_number').value = "0"; 
    window.location.href = "learn.html"; 
    // x = document.getElementById('player-name'); 
    // x.innerHTML = user_name.value; 
}






// saveScore(score) {
//     const userName = this.getPlayerName();
//     let scores = [];
//     const scoresText = localStorage.getItem('scores');
//     if (scoresText) {
//       scores = JSON.parse(scoresText);
//     }
//     scores = this.updateScores(userName, score, scores);

//     localStorage.setItem('scores', JSON.stringify(scores));
//   }

//   updateScores(userName, score, scores) {
//     const date = new Date().toLocaleDateString();
//     const newScore = { name: userName, score: score, date: date };

//     let found = false;
//     for (const [i, prevScore] of scores.entries()) {
//       if (score > prevScore.score) {
//         scores.splice(i, 0, newScore);
//         found = true;
//         break;
//       }
//     }

//     if (!found) {
//       scores.push(newScore);
//     }

//     if (scores.length > 10) {
//       scores.length = 10;
//     }

//     return scores;
//   }
// }


// getPlayerName() {
//     return localStorage.getItem('userName') ?? 'Mystery player';
//   }


//   const playerNameEl = document.querySelector('.player-name');
//   playerNameEl.textContent = this.getPlayerName();
// }


// score.JS


// function loadScores() {
//     let scores = [];
//     const scoresText = localStorage.getItem('scores');
//     if (scoresText) {
//       scores = JSON.parse(scoresText);
//     }
  
//     const tableBodyEl = document.querySelector('#scores');
  
//     if (scores.length) {
//       for (const [i, score] of scores.entries()) {
//         const positionTdEl = document.createElement('td');
//         const nameTdEl = document.createElement('td');
//         const scoreTdEl = document.createElement('td');
//         const dateTdEl = document.createElement('td');
  
//         positionTdEl.textContent = i + 1;
//         nameTdEl.textContent = score.name;
//         scoreTdEl.textContent = score.score;
//         dateTdEl.textContent = score.date;
  
//         const rowEl = document.createElement('tr');
//         rowEl.appendChild(positionTdEl);
//         rowEl.appendChild(nameTdEl);
//         rowEl.appendChild(scoreTdEl);
//         rowEl.appendChild(dateTdEl);
  
//         tableBodyEl.appendChild(rowEl);
//       }
//     } else {
//       tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
//     }
//   }
  
//   loadScores();

  