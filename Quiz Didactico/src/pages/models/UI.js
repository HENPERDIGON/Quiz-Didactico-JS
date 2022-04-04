const questionHTML = document.getElementById("question");
const btnSgte = document.getElementById("sgte");
const btnprev = document.getElementById("prev");

class UIgeo {
  constructor() {}

  showQuestion(writtenQuestion) {
    questionHTML.innerHTML = writtenQuestion;
  }

  showChoices(choices, callback) {
    const choicesContainer = document.getElementById("choices");

    choicesContainer.innerHTML = "";

    for (let i = 0; i < choices.length; i++) {
      const button = document.createElement("button");
      button.addEventListener("click", () => callback(choices[i]));
      button.className = "btns";
      button.innerText = choices[i];

      choicesContainer.append(button);
    }
  }

  showQuestionImg(writtenQuestion, image) {
    questionHTML.innerHTML = `<img class="pb-4 rounded-3xl h-[400]  max-w-lg  w-[95%] " src="${image}">
        <div class="paddingMQ"> <h3 class="text-center">${writtenQuestion} <h3> </h3></div>`;
  }

  showAnwerGram(answers) {
    const answerGramaticalContainer = document.getElementById(
      "answerGramatical_btn"
    );
    const answercontainer = document.createElement("div");
    const shownanswer = document.createElement("button");
    const answerCard = document.getElementById("answerCard");

    answerCard.innerHTML = "";

    answerGramaticalContainer.addEventListener("click", function writeAnswer() {
      shownanswer.innerText = answers;
      shownanswer.className = "showAnswerGramar";
    });

    answerCard.append(answercontainer);
    answercontainer.append(shownanswer);
  }

  showScores(score) {
    const gameOverHTML = `
        <div class="pb-10 text-4xl pt-3">
        <a href="../../index.html">
        <h1>
        <span class="text-rose-900 font-medium">Desafios - </span><span class="text-rojo-TOW font-bold" id="tow"> The Other Way</span> <span class="font-bold">Spanish</span>
      </h1>
        </a>
      </div>
    <h2 id="score"> Tu Puntaje es ${score}</h2>`;

    const element = document.getElementById("todos");

    element.innerHTML = gameOverHTML;
  }


  showScoreGram() {
    const finishedGramHTML = `<div class="pb-10 text-4xl pt-3">
    <a href="../../index.html">
    <h1>
    <span class="text-rose-900 font-medium">Desafios - </span><span class="text-rojo-TOW font-bold" id="tow"> The Other Way</span> <span class="font-bold">Spanish</span>
  </h1>
    </a>
  </div>
<h2 id="score">¿Cómo te fue? ☺</h2>`;

const page = document.getElementById("todos");

    page.innerHTML = finishedGramHTML;
  }

}

export { UIgeo, btnSgte, btnprev };



/* --------------- show progress? --------------- */

/* showProgress(currentIndex, total) {
    var element = document.getElementById("progress");
    // element.innerHTML = 
   'Question currentIndex of total';
  }
*/

