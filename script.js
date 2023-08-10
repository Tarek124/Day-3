const firstBtn = document.getElementById('firstBtn'),
    RulesBox = document.getElementById('RulesBox'),
    exitBtn = document.getElementById('exitBtn'),
    continueBtn = document.getElementById('continueBtn'),
    prosno = document.getElementById('questions')


function clickEvent(x, y) {
    x.addEventListener('click', function () {
        y.style.cssText = `display: block;`
        x.style.cssText = `display: none;`
            .style.cssText = `display: none;`
    })
}
clickEvent(firstBtn, RulesBox)
clickEvent(continueBtn, prosno)

continueBtn.addEventListener('click', () => {
    showQuestions(0)
})



exitBtn.addEventListener('click', () => {
    RulesBox.style.cssText = ` display : none;
    `
})

let que_count = 0;
const nextBtn = document.querySelector(".nextBtn")
nextBtn.onclick = () => {
    if (que_count < questions.length) {
        que_count++
        showQuestions(que_count);
    } else {
        console.log("you'r task is complete")
    }
}

function showQuestions(i) {
    const que_text = document.getElementById('que');
    let que_tag = "<span>" + questions[i].numb + '. ' + questions[i].question + "</span>";
    que_text.innerHTML = que_tag;

    const MyOptions = document.getElementById('MyOptions');
    let option_tag = '<div class="options">' + questions[i].options[0] + '</div>' +
        '<div class="options">' + questions[i].options[1] + '</div>'
        + '<div class="options">' + questions[i].options[2] + '</div>'
        + '<div class="options">' + questions[i].options[3] + '</div>'

    MyOptions.innerHTML = option_tag

}




















































let questions = [
    {
        numb: 1,
        question: 'What Does HTML Stand for?',
        answer: "Hyper Text MarkUp Language",
        options: [
            'Hyper Text Multiple Language',
            "Hyper Text Markup Language",
            "Hyper Tool Multiple Language",
            "Hyper Text Multi Language"
        ]
    },
    {
        numb: 2,
        question: 'What Does Css Stand for?',
        answer: "Cascading Style Sheet",
        options: [
            'Common Style Sheet',
            'Colorful Style Sheet',
            'Computer Style Sheet',
            'Cascading Style Sheet'
        ]
    },
    {
        numb: 3,
        question: 'What Does PHP Stand for?',
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            'Hypertext Pregramming',
            'Hypertext Preprogramming',
            'Hometext Preprocessor'
        ]
    },
    {
        numb: 4,
        question: 'What Does SQL Stand for?',
        answer: "Structured Query Language",
        options: [
            'Stylish Question Language',
            'Stylesheet Query Language',
            'Statement Question Language',
            'Structured Query Language'
        ]
    },
    {
        numb: 5,
        question: 'What Does XML Stand for?',
        answer: "eXtensible Markup Language",
        options: [
            'eXtensible Markup Language',
            'eXtensible Multiple Language',
            'eXTra Malti-Program Language',
            'eXamine Multiple Language'
        ]
    },
]
