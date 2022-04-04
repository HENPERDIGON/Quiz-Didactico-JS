"use strict";

import { questionsGr } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UIgeo, btnSgte, btnprev } from "./models/UI.js";

/* --------------- Variables --------------- */
const quizGram = new Quiz(questionsGr);
const uiGram = new UIgeo();

/* --------------- Botones --------------- */

let nextQuestion = () => {
  quizGram.addIndex();
  printGram(quizGram, uiGram);
};

let prevQuestion = () => {
  quizGram.minusIndex();
  printGram(quizGram, uiGram)
}

/* --------------- Printing DOM --------------- */

const printGram = (quiz, ui) => {
  if (quiz.isEnded()) {
    ui.showScoreGram();
  } else {
    ui.showQuestion(quiz.getQuestionIndex().question);
    ui.showAnwerGram(quiz.getQuestionIndex().answer);
  
    console.log(quiz.getIndex());

    btnSgte.removeEventListener('click', nextQuestion)
    btnSgte.addEventListener("click", nextQuestion);

    btnprev.removeEventListener('click', prevQuestion)
    btnprev.addEventListener("click", prevQuestion);

    quiz.disabledPrevButton()


  }
};

printGram(quizGram, uiGram);






