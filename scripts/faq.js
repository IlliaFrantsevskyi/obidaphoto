window.addEventListener('DOMContentLoaded', function () {
    generateQuestionComponents();
});

function generateQuestionComponents() {    
    for (const question of questions) {
        generateQuestionComponent(question);
    }
}

function generateQuestionComponent(question) {
    const questionListItem = document.createElement("li");
    const questionHeader = document.createElement("h3");
    const questionParagraph = document.createElement("p");

    questionListItem.classList.add("accordion-item");
    questionHeader.classList.add("accordion-thumb");
    questionParagraph.classList.add("accordion-panel");

    questionHeader.innerText = question.question;
    questionParagraph.innerText = question.answer;

    questionListItem.appendChild(questionHeader);
    questionListItem.appendChild(questionParagraph);

    document.getElementsByClassName("accordion")[0].appendChild(questionListItem); 
}