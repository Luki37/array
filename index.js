/*array und variable erstellen */
const list = [];

const add = document.getElementById("input1");
const delid = document.getElementById("input2");
const delcont = document.getElementById("input3");

const addbtn = document.getElementById("content");
const delidbtn = document.getElementById("delid");
const delcontbtn = document.getElementById("delcont");

const showbtn = document.getElementById("show");
const multibtn = document.getElementById("multi");
const sumbtn = document.getElementById("sum");

const showList = document.getElementById("list");
const result = document.getElementById("result");

/* function renderList() {
  showList.innerHTML = "";

  list.forEach((number) => {
    listElement.textContent = number;
    showList.appendChild(listElement);
  });
} */

/*elemente dazufügen */
function content() {
  list.push(parseFloat(add.value));
  console.log(list);
  add.value = "";
  console.log(list);
  showList.innerHTML = "";
}

/*elemente nach position entfernen*/
/*elemente nach inhalt entfernen*/
/*anzeigen lassen (evtl. automatisch auf liste)*/

function show() {
  showList.innerHTML = "";

  list.forEach((number) => {
    const listElement = document.createElement("li");
    listElement.textContent = number;
    showList.appendChild(listElement);
  });
}
/* array multiplizieren (mit 2, evtl option beliebige zahl)*/

function multi() {}
/*summe des array anzeigen*/

function sum() {}
