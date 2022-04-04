
import { preguntasGeo, preguntasGram, cardCategories, preguntasCultura, dataPronunciation } from "./data.js"; /* se important las arrays de las preguntas */

import { MultipleChoice, MultipleChoiceWImage, OralQuestion, Categorias, SentencePronunciation } from "../models/Question.js";


/* --------------- Escribiendo preguntas Geo --------------- */
export const categories = cardCategories.map ( 
    (categoria) => 
    new Categorias(categoria.id, categoria.url, categoria.bg)
)

export const questionsGr = preguntasGram.map (
    (question) =>
    new OralQuestion(question.qG, question.answer)
)


export const questionsGe = preguntasGeo.map ( 
    (question) => 
    new MultipleChoice(question.question, question.choices, question.answer, question.text)
)

export const dataPron = dataPronunciation.map (
    (sentence) => 

    new SentencePronunciation(sentence.sentence)
)

export const questionsCult = preguntasCultura.map (
    (question) =>
    new MultipleChoiceWImage(question.question, question.choices, question.answer, question.text, question.image)
)




