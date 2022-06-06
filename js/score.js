
menuToggler.addEventListener('click', ev => {
  menu.classList.toggle('open');
  menuToggler.textContent = menuToggler.textContent === "×" ? "≡" : "×";
});

playerNames.addEventListener('submit', ev => {

  const p1 = document.getElementById("playerOne").value;
  const p2 = document.getElementById("playerTwo").value;
  const p3 = document.getElementById("playerThree").value;
  const p4 = document.getElementById("playerFour").value;

  const pArray = [];
  const optionArray = [];
  const element = document.getElementById("tableOption");
  pArray.push(p1,p2,p3,p4)

  for(let i = 0; i < pArray.length; i++){
    if(pArray[i] != ""){
      optionArray.push(document.createElement("option"));
      optionArray[i].text = pArray[i];
      optionArray[i].value = "opt" + [i];
      element.appendChild(optionArray[i]);
    }
  }

  optTable.classList.add('table')
  num1.classList.add('PlayerNum1');

  localStorage.setItem('pNames', JSON.stringify(pArray));

  playerNames.reset();
  ev.preventDefault();
});


function opt1 () {

  var opt = document.getElementById("tableOption");

  if (opt.value == "opt0"){

    num1.classList.add('PlayerNum1');
    num2.classList.remove('PlayerNum2');
    num3.classList.remove('PlayerNum3');
    num4.classList.remove('PlayerNum4');

  } else if (opt.value == "opt1") {

    num2.classList.add('PlayerNum2');
    num1.classList.remove('PlayerNum1');
    num3.classList.remove('PlayerNum3');
    num4.classList.remove('PlayerNum4');

  } else if (opt.value == "opt2") {

    num3.classList.add('PlayerNum3');
    num2.classList.remove('PlayerNum2');
    num1.classList.remove('PlayerNum1');
    num4.classList.remove('PlayerNum4');

  } else {

    num4.classList.add('PlayerNum4');
    num1.classList.remove('PlayerNum1');
    num2.classList.remove('PlayerNum2');
    num3.classList.remove('PlayerNum3');

  }

}

function score (){
  const tbl = [num1, num2, num3, num4];

  let input = [[], [], [], []];
  let sum = 0;
  let scoreData = [];

  for(let i = 0; i < tbl.length; i++){
    input[i] = Array.from(tbl[i].querySelectorAll('input'));
    for(let j = 0; j < input[i].length; j++){
       scoreData[i] = Array.from(parseInt(input[i][j].value));
       sum = sum + parseInt(input[i][j].value);
       scoreData[i].push(sum)
     }
     sum = 0;
  }

  localStorage.setItem('scores', JSON.stringify(scoreData));
  location.href = "results.html"

}

scorebtn.addEventListener('click', ev => {
  score();
});

const mediaQuery = window.matchMedia('(min-width: 750px)');

function changes(e){
  if(e.matches) {
    optTable.classList.add('table')
    num1.classList.add('PlayerNum1');
    num2.classList.add('PlayerNum2');
    num3.classList.add('PlayerNum3');
    num4.classList.add('PlayerNum4');
  }else {
    optTable.classList.remove('table')
    num1.classList.remove('PlayerNum1');
    num2.classList.remove('PlayerNum2');
    num3.classList.remove('PlayerNum3');
    num4.classList.remove('PlayerNum4');
  }
}

mediaQuery.addListener(changes);
changes(mediaQuery);


function saveToStorage() {
  const data = [];
  const tables = [[], [], [], []];
  const elements = Array.from(document.querySelectorAll('.playerScore'));
  for(let i = 0; i < elements.length; i++){
    if(elements[i] != null){
      data.push(parseInt(elements[i].value));
      localStorage.setItem("score", JSON.stringify(data));
    }
  }

}

function load() {
  const names = JSON.parse(localStorage.getItem("pNames"))
  const data = JSON.parse(localStorage.getItem("score"))
  const element = document.getElementById("tableOption");

  if(data){
  const elements = Array.from(document.querySelectorAll('.playerScore'));
    for(let i = 0; i < elements.length; i++){
      elements[i].value = data[i];
    }
    optTable.classList.add('table')
    num1.classList.add('PlayerNum1');
  }
  const pElement = [];
  if(names){
    for (let i = 0; i < names.length; i++) {
      if(names[i] != ""){
        pElement.push(document.createElement("option"));
        pElement[i].text = names[i];
        pElement[i].value = "opt" + [i];
        element.appendChild(pElement[i]);
      }
    }
    opt1();
  }
}
