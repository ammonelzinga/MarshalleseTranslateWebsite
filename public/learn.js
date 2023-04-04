function hello_flip_card(){
    let title = document.getElementById("Hello_title"); 
    let par = document.getElementById("Hello_par");
    if(title.innerText === "Yokwe"){
      title.innerHTML = "Hello";
      par.innerHTML = "Hello, How are you?" 
    }
    else {title.innerHTML = "Yokwe"; 
          par.innerHTML = "Yokwe, Ej et am mour?"}
  }


  function thanks_flip_card(){
    let title = document.getElementById("Thanks_title"); 
    let par = document.getElementById("Thanks_par");
    if(title.innerText === "Komool"){
      title.innerHTML = "Thanks";
      par.innerHTML = "Thanks for the food" 
    }
    else {title.innerHTML = "Komool"; 
          par.innerHTML = "Komooltata kon mona eo"}
  }

  function today_flip_card(){
    let title = document.getElementById("Today_title"); 
    let par = document.getElementById("Today_par");
    if(title.innerText === "Rainin"){
      title.innerHTML = "Today";
      par.innerHTML = "Today is a beautiful day" 
    }
    else {title.innerHTML = "Rainin"; 
          par.innerHTML = "Rainin ej juon raan aiboojoj"}
  }

  function continue_on(){
    let x = document.getElementById("oneofthree"); 
    let y = document.getElementById("twoofthree"); 
    let z = document.getElementById("threeofthree"); 
    x.style.display = 'none'; 
    y.style.display ='none';
    z.style.display ='none';
    let a = document.getElementById("fourofsix"); 
    let b = document.getElementById("fiveofsix"); 
    let c = document.getElementById("sixofsix"); 
    a.style.display = 'block';
    b.style.display = 'block';
    c.style.display = 'block'; 
  }

  function return_back(){
    let x = document.getElementById("oneofthree"); 
    let y = document.getElementById("twoofthree"); 
    let z = document.getElementById("threeofthree"); 
    x.style.display = 'block'; 
    y.style.display ='block';
    z.style.display ='block';
    let a = document.getElementById("fourofsix"); 
    let b = document.getElementById("fiveofsix"); 
    let c = document.getElementById("sixofsix"); 
    a.style.display = 'none';
    b.style.display = 'none';
    c.style.display = 'none'; 
  }


  function monono_flip_card(){
    let title = document.getElementById("Monono_title"); 
    let par = document.getElementById("Monono_par");
    if(title.innerText === "Monono"){
      title.innerHTML = "Happy";
      par.innerHTML = "I am very Happy" 
    }
    else {title.innerHTML = "Monono"; 
          par.innerHTML = "Naij lukkuun monono"}
  }


  function emman_flip_card(){
    let title = document.getElementById("Emman_title"); 
    let par = document.getElementById("Emman_par");
    if(title.innerText === "Emman"){
      title.innerHTML = "Good";
      par.innerHTML = "My life is good" 
    }
    else {title.innerHTML = "Emman"; 
          par.innerHTML = "Emman ao mour"}
  }

  function buromoj_flip_card(){
    let title = document.getElementById("Buromoj_title"); 
    let par = document.getElementById("Buromoj_par");
    if(title.innerText === "Buromoj"){
      title.innerHTML = "Sad";
      par.innerHTML = "I am feeling sad" 
    }
    else {title.innerHTML = "Buromoj"; 
          par.innerHTML = "Naij enjake buromoj"}
  }

  function check_off(id){
    let x = document.getElementById(id); 
    x.style.backgroundColor = "lightgreen"; 
    increase_player_score(id); 
    x.value = 1; 
  }

  function question(id){
    let x = document.getElementById(id);
    x.style.backgroundColor = 'rgb(244, 244, 244)';
    decrease_player_score(id); 
    x.value = 0; 
  }
      function getPlayerName(){
        // alert("image is loaded"); 
        let x = localStorage.getItem('userName');
        let y = document.getElementById('player-name'); 
        y.innerText= "Welcome back " + x; 
        document.getElementById("Hello_number").value = 0; 
        document.getElementById("Thanks_number").value = 0; 
        document.getElementById("Today_number").value = 0; 
        document.getElementById("Monono_number").value = 0; 
        document.getElementById("Emman_number").value = 0; 
        document.getElementById("Buromoj_number").value = 0; 
        // display_score(); 
        // return localStorage.getItem('userName');

      } 

      function flip_cards(id){
        if (document.getElementById(id).value === "Hello"){
            return Hello.flip_card();
        }
    }
   
function increase_player_score(id){
  if((document.getElementById(id).value) === 0 ){
  if(localStorage.getItem('score')){
    let a = localStorage.getItem('score'); 
    let b = parseInt(a); 
    b = b+1; 
    localStorage.setItem('score', b); 
  }
  else {localStorage.setItem('score', 1);} 
  display_score(); 
  let y = localStorage.getItem('score'); 
  let z = localStorage.getItem('userName'); 
  document.getElementById('table_name').innerText = z; 
  document.getElementById('table_score').innerText = y 
}
}
function decrease_player_score(id){
  if(document.getElementById(id).value === 1){
  if(localStorage.getItem('score')){
    let a = localStorage.getItem('score'); 
    let b = parseInt(a); 
    b = b-1; 
    if(b < 0){
      b = 0; 
    }
    localStorage.setItem('score', b); 
  }
  else {localStorage.setItem('score', 0); }
  display_score(); 
  let y = localStorage.getItem('score'); 
  let z = localStorage.getItem('userName'); 
  document.getElementById('table_name').innerText = z; 
  document.getElementById('table_score').innerText = y
                    }
}

function display_score(){
  let x = localStorage.getItem('score');
  let y = document.getElementById('player-score'); 
  y.innerHTML= "Phrases learned: " + x; 

  // return localStorage.getItem('userName');
}


// function display_leaderboard(){
//   const nameTdEl = document.createElement('td');
//       const scoreTdEl = document.createElement('td');
// //       positionTdEl.textContent = i + 1;
//       nameTdEl.textContent = localStorage.getItem('userName');
//       scoreTdEl.textContent = localStorage.getItem('score');
//       const rowEl = document.createElement('tr');
// //       rowEl.appendChild(positionTdEl);
//       rowEl.appendChild(nameTdEl);
//       rowEl.appendChild(scoreTdEl);
//       tableBodyEl.appendChild(rowEl);
// }

    // Some 
//      function updateScore(score) {
//         const scoreEl = document.querySelector('#score');
//         scoreEl.textContent = score;
//       }


// function saveScore(score) {
//         const userName = localStorage.getItem('userName'); 
//         let scores = [];
//         const scoresText = localStorage.getItem('scores');
//         if (scoresText) {
//           scores = JSON.parse(scoresText);
//         }
//         scores = updateScores(userName, score, scores);
//         localStorage.setItem('scores', JSON.stringify(scores));
//       }

//       function updateScores(userName, score, scores) {
//         const newScore = { name: userName, score: score };
//         let found = false;
//         for (const [i, prevScore] of scores.entries()) {
//           if (score > prevScore.score) {
//             scores.splice(i, 0, newScore);
//             found = true;
//             break;
//           }
//         }
    
//         if (!found) {
//           scores.push(newScore);
//         }
    
//         if (scores.length > 10) {
//           scores.length = 10;
//         }
    
//         return scores;
//       }

// function loadScores() {
//   let scores = [];
//   const scoresText = localStorage.getItem('scores');
//   if (scoresText) {
//     scores = JSON.parse(scoresText);
//   }

//   const tableBodyEl = document.querySelector('#scores');

//   if (scores.length) {
//     for (const [i, score] of scores.entries()) {
//       const positionTdEl = document.createElement('td');
//       const nameTdEl = document.createElement('td');
//       const scoreTdEl = document.createElement('td');

//       positionTdEl.textContent = i + 1;
//       nameTdEl.textContent = score.name;
//       scoreTdEl.textContent = score.score;

//       const rowEl = document.createElement('tr');
//       rowEl.appendChild(positionTdEl);
//       rowEl.appendChild(nameTdEl);
//       rowEl.appendChild(scoreTdEl);
//       tableBodyEl.appendChild(rowEl);
//     }
//   } else {
//     tableBodyEl.innerHTML = '<tr><td colSpan=4>Learn some Flashcards and then come back!</td></tr>';
//   }
// }

// loadScores();

// flipcard(parentSelector, text) {
//     const newChild = document.createElement('div');
//     newChild.textContent = text;
  
//     const parentElement = document.querySelector(parentSelector);
//     parentElement.appendChild(newChild);
//   }    