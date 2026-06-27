/*array und variable erstellen */
const list = [];
let list2 = [];

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
  if (list.length >= parseInt(position.value)) {
    /*alert einbauen falls nicht existierende position gelöscht werden soll*/
    showList.innerHTML = "";
    list.splice(position.value - 1, 1);
    clearInput();
    show();
  } else {
    alert("Diese Position existiert nicht auf der Liste.");
  }
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
  showList.innerHTML = "";
  list.forEach((number) => {
    const listElement = document.createElement("li");
    listElement.textContent = number;
    showList.appendChild(listElement);
    list2 = [];
    result.textContent = "";
  });
}

/* array multiplizieren (mit 2, evtl option beliebige zahl)*/
function multi() {
  showList.innerHTML = "";
  const activeList = list2.length > 0 ? list2 : list;
  list2 = activeList.map((number) => {
    const doubled = number * 2;
    const listElement = document.createElement("li");
    listElement.textContent = doubled;
    showList.appendChild(listElement);
    result.textContent = "";
    return doubled;
  });
}

/*summe des array anzeigen*/
function sum() {
  const activeList = list2.length > 0 ? list2 : list;
  const resultSum = activeList.reduce((previousValue, currentValue) => {
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
