import { vocabulary } from "./data/data.js";
const showVocab = document.getElementById("showVocab");
const clearStorage = document.getElementById('btnClearStorage')



/* --------------- Renderizando el vocabulario en el DOM --------------- */

showVocab.innerHTML = vocabulary
  .map(
    (word) =>
      `<div class="flex flex-col items-center justify-center" >
<button class="card_words"><p>${word}</p></button>
<div class="flex flex-row items-center justify-center gap-5">

<button class="definition" type="button" id="def"> ¿? </button>
</div>
</div> 
`
  )
  .join("");

{/* <button class="btnRemoveWord" type="button"  id="removeWord"> ✔ </button> */}
 
/* --------------- Definiendo las palabras con la API --------------- */
  
let def = document.getElementsByClassName("definition");

for (let i = 0; i < def.length; i++) {
  def[i].addEventListener("click", elModal);

  function elModal() {
    const firstRequest = `https://www.dictionaryapi.com/api/v3/references/spanish/json/${vocabulary[i]}?key=30f0a325-d956-4480-9a32-a9418a5c271a`;

    fetch(firstRequest)
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((diccionario) => {

        let firstOriginal;
        firstOriginal =
          diccionario[0].hwi === undefined
            ? (firstOriginal = diccionario[0])
            : (firstOriginal = diccionario[0].hwi.hw);

        if (diccionario[0].shortdef === undefined) {
          Swal.fire({
            title: "elige la palabra que necesitas",
            text: diccionario,
            input: "text",
            inputAttributes: {
              autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "Buscar",
            showLoaderOnConfirm: true,
            preConfirm: (palabra) => {
              return fetch(
                `https://www.dictionaryapi.com/api/v3/references/spanish/json/${palabra}?key=30f0a325-d956-4480-9a32-a9418a5c271a`
              )
                .then((response) => {
                  return response.json();
                })
                .then((diccionario2) => {
                  Swal.fire({
                    title: palabra,
                    text: diccionario2[0].shortdef,
                    icon: "info",
                    confirmButtonText: "Continuar",
                  });
                })
                .catch((error) => {
                  Swal.showValidationMessage(`Request failed: ${error}`);
                });
            },
          });
        } else {
          Swal.fire({
            title: firstOriginal,
            text: diccionario[0].fl + ` - - - ` + diccionario[0].shortdef,
            icon: "info",
            confirmButtonText: "Continuar",
          });
        }
      }).catch((error) => {
        console.log(error);
      });
  }
}



/* --------------- Botón para eliminar TODO localStorage --------------- */

let vocabCards = document.getElementsByClassName('card_words')
clearStorage.addEventListener('click', removeStorage )

function removeStorage() {

  for (const card of vocabCards) {
    
    card.innerHTML = "";
  }
 
  localStorage.clear()

 

}



