/*array und variable erstellen */
const list = [];

const add = document.getElementById("input1");
const position = document.getElementById("input2");
const wert = document.getElementById("input3");

const showList = document.getElementById("list");
const result = document.getElementById("result");

/*elemente dazufügen */
function content() {
  list.push(parseFloat(add.value));
  clearInput();
  showList.innerHTML = "";
  show();
}

/*elemente nach position entfernen*/

function delid() {
  showList.innerHTML = "";
  list.splice(position.value - 1, 1);
  clearInput();
  show();
}

/*elemente nach inhalt entfernen*/

/*anzeigen lassen (evtl. automatisch auf liste)*/

function show() {
  list.forEach((number) => {
    const listElement = document.createElement("li");
    listElement.textContent = number;
    showList.appendChild(listElement);
  });
}

/* array multiplizieren (mit 2, evtl option beliebige zahl)*/

function multi() {
  showList.innerHTML = "";
  list.map((number) => {
    const doubled = number * 2;
    const listElement = document.createElement("li");
    listElement.textContent = doubled;
    showList.appendChild(listElement);
    return doubled;
  });
}

/*summe des array anzeigen*/

function sum() {
  const resultSum = list.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  });
  result.textContent = "Die Summe ist: " + resultSum;
}

function clearInput() {
  position.value = "";
  add.value = "";
  wert.value = "";
}
