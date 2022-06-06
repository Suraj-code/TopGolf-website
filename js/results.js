menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
  menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";
});

let scoreData = JSON.parse(localStorage.getItem('scores'));
const pArray = JSON.parse(localStorage.getItem('pNames'));
localStorage.clear();
const element = document.getElementById("winner");
const para = [];
let finalScore = [];

if(scoreData && pArray){
  for(let i = 0; i < pArray.length; i++){
    if(pArray[i] != ""){
      para.push(document.createElement("p"));
      para[i].textContent = pArray[i] + ": " + scoreData[i];
      element.appendChild(para[i]);
      finalScore.push(scoreData[i])
    }
  }
}


// const winnerScore = Math.min.apply(Math, finalScore);
