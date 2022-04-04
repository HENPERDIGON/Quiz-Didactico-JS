/* --------------- Declarando variables --------------- */
let btnVocab = document.getElementById("btnVocab");

/* --------------- Seleccionando el vocabulario --------------- */
function getSelectionText() {
  let text = "";
  if (window.getSelection) {
    text = window.getSelection().toString();
  }
  return text;
}

let cajita = document.getElementById("cajita");

document.onmouseup =
  document.onkeyup =
  document.onselectionchange =
    function () {
      cajita.value = getSelectionText();
    };

/* --------------- Agregando la palabra --------------- */
function added() {
  cajita.value = 'agregado'
}
function clean() {
  cajita.value = 'selecciona palabra'
  
}

let addingVocab = [];
printVocab();

btnVocab.addEventListener("click", addingWords);

function addingWords() {
  if (cajita.value != "") {
    addingVocab.push(cajita.value);
    console.log(addingVocab); //strings
    localStorage.setItem("palabrasNuevas", addingVocab);
    setTimeout( added(cajita.value = 'agregado'), 1000)
    setTimeout(clean, 1300)
  
  }
  printVocab();
}

/* --------------- Almacenando al localStorage permanentemente --------------- */
function printVocab() {
  if ("palabrasNuevas" in localStorage) {
    addingVocab = localStorage.getItem("palabrasNuevas").split(",");
  }
}

console.log(addingVocab);
