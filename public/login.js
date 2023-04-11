(async () => {
    let authenticated = false;
    const userName = localStorage.getItem('userName');
    if (userName) {
      const nameEl = document.querySelector('#userName');
      nameEl.value = userName;
      const user = await getUser(nameEl.value);
      authenticated = user?.authenticated;
    }
    if (authenticated) {
      document.querySelector('#playerName').textContent = userName;
      setDisplay('loginControls', 'none');
      setDisplay('playControls', 'block');
    } else {
      setDisplay('loginControls', 'block');
      setDisplay('playControls', 'none');
    }
  })();


async function login() {
    loginOrCreate(`/api/auth/login`); 
}

async function createUser() {
    loginOrCreate(`/api/auth/create`); 
}

async function loginOrCreate(endpoint){
    const userName = document.querySelector('#userName')?.value; 
    const password = document.querySelector('#userPassword')?.value; 
    const response = await fetch(endpoint, {
        method: 'post', 
        body: JSON.stringify({email: userName, password: password}), 
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        
        },
    });
    // const body = await response.json(); 
    console.log(await response.json() ); 

    if (response?.status === 200){
        localStorage.setItem('userName', userName);
        // console.log(body); 
        window.location.href = 'main.html'; 
    } else {
        const wrong = document.querySelector('#userName'); 
        wrong.value = "Nope, try again :)"; 
        // const wwrong = document.querySelector('#userPassword'); 
        // wwrong.value = "Forgot? Click New User"; 
    }
}

// async function getdata(endpoint {
//     const response = await fetch(endpoint, {
//         method: 'get', 
//         body: JSON.stringif
//     })
// })

function play() {
    window.location.href = 'main.html'; 
}

function logout() {
    fetch(`/api/auth/logout`, {
        method: 'delete', 
    }).then(() => (window.location.href = '/')); 
}

async function getUser(email){
    const response = await fetch(`/api/user/${email}`); 
    if (response.status === 200){
        return response.json(); 
    }

    return null; 
}

function setDisplay(controlId, display) {
    const ment = document.querySelector(`#${controlId}`);
    if(ment) {
        ment.style.display = display; 
    }
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

  