/*array und variable erstellen */
const list = [];

const add = document.getElementById("input1");
const position = document.getElementById("input2");
const wert = document.getElementById("input3");

const showList = document.getElementById("list");
const result = document.getElementById("result");

/*elemente dazufügen */
function content() {
  /*alert einbauen wenn etwas anderes als eine zahl eingeeben wird*/
  list.push(parseFloat(add.value));
  clearInput();
  showList.innerHTML = "";
  show();
}

/*elemente nach position entfernen*/
function delid() {
  /*alert einbauen falls nicht existierende position gelöscht werden soll*/
  showList.innerHTML = "";
  list.splice(position.value - 1, 1);
  clearInput();
  show();
}

/*elemente nach inhalt entfernen*/
function delcont() {
  const index = list.findIndex((element) => element === Number(wert.value));
  if (index !== -1) {
    showList.innerHTML = "";
    list.splice(index, 1);
    clearInput();
    show();
  } else {
    alert("Diese Zahl existiert nicht auf der Liste.");
  }
}

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

/*leert die 3 inputfelder*/
function clearInput() {
  position.value = "";
  add.value = "";
  wert.value = "";
}
