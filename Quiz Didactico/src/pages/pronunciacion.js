"use strict";

import { dataPron } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UIgeo, btnSgte, btnprev } from "./models/UI.js";

/* --------------- Aplicando la API --------------- */

/* Variables */
const sentence = document.querySelector(".sentence");
const tryAgain = document.querySelector("#tryAgain");
const activateBtn = document.querySelector(".btn_activate");
const deactivateBtn = document.querySelector(".btn_deactivate");

/* --------------- Agregando la API --------------- */

//agregando la API de SpeechRecognition
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

//declarando la variable para la API
const recognition = new SpeechRecognition();
recognition.interimResults = true; // Real Time Result = esto es para que cuando se hable, se escriba de inmediato
recognition.lang = "es";

/* --------------- Aplicando la API --------------- */

let talking = document.createElement("p");

const quizPron = new Quiz(dataPron);
const uiPron = new UIgeo();

/* --------------- Siguiente Pregunta --------------- */

let nextQuestion = () => {
  quizPron.addIndex();
  sentence.classList.add("colorTextB");
  sentence.innerHTML = "";
  printPron(quizPron, uiPron);
  activateBtn.innerHTML = "Hablar";
  activateBtn.style.backgroundColor = "transparent";
  btnSgte.style.backgroundColor = "#c25454";
};

let prevQuestion = () => {
  quizPron.minusIndex();
  printPron(quizPron, uiPron);
};

/* --------------- Printing DOM --------------- */

const printPron = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScores(quiz.score);
  } else {
    ui.showQuestion(quiz.getQuestionIndex().sentence);

    btnSgte.removeEventListener("click", nextQuestion);
    btnSgte.addEventListener("click", nextQuestion);

    btnprev.removeEventListener("click", prevQuestion);
    btnprev.addEventListener("click", prevQuestion);

    quiz.disabledPrevButton();

    // "catching" lo que se está hablando
    recognition.addEventListener("result", (e) => {
      sentence.appendChild(talking);
      const text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      talking.innerText = text;
      if (e.results[0].isFinal) {
        activateBtn.style.backgroundColor = "red";
        activateBtn.innerHTML = "intenta de nuevo";
        talking.innerText = text;

        if (text === quiz.getQuestionIndex().sentence) {
          sentence.classList.remove("colorTextB");
          sentence.classList.add("colorText");
          activateBtn.innerHTML = "excelente";
          activateBtn.style.backgroundColor = "transparent";
          activateBtn.innerHTML = "Repetir";
          quiz.addScore()

          btnSgte.style.backgroundColor = "#c43b3b";
        } else {
          console.log("no son iguales");
          tryAgain.innerHTML = "Ups, ¡casi!";
        }
      }
    });
  }
};

printPron(quizPron, uiPron);

/* --------------- Botones --------------- */

activateBtn.addEventListener("click", () => {
  activateBtn.innerHTML = "hablando";
  activateBtn.style.backgroundColor = "transparent";
  recognition.start();
  tryAgain.innerHTML = "";
});

deactivateBtn.addEventListener("click", () => {
  recognition.stop();
  talking.innerHTML = "";
});



/* Fuentes

https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/vision-api-how-to-topics/call-read-api
https://developers.google.com/search/docs/advanced/crawling/apis-user-agent
https://developer.mozilla.org/es/docs/Web/API/Web_Speech_API
https://codelabs.developers.google.com/codelabs/cloud-text-speech-python3#0

*/
