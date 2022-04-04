/* Aquí se creará el "template" para identificar las preguntas y sus respuestas correctas respectivamente */



class Categorias {
    constructor(id, url, bg) {
        this.id = id;
        this.url = url;
        this.bg = bg
    }
}



class MultipleChoice {

    constructor(question, choices, answer, text) {
        this.question = question;
        this.choices = choices;
        this.answer = answer;
        this.text = text;
    }


    correctAnswer(electedChoice) {
        return electedChoice === this.answer /* true or false */  
    }
}

class MultipleChoiceWImage extends MultipleChoice {
    constructor(question, choices, answer, text, image) {
        super(question, choices, answer, text)
        this.image = image
    }

}

class OralQuestion extends MultipleChoice {

    constructor(question, answer) {
        super(question)
        this.answer = answer;
    }

}

class SentencePronunciation {
    constructor(sentence){
        this.sentence = sentence
    }

    correctPron(userPron){
        return userPron === this.sentence
    }
}




export { MultipleChoice, MultipleChoiceWImage, OralQuestion, Categorias, SentencePronunciation }
