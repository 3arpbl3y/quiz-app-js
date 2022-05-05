const quizData = [
  {
    question: "bla bla bla?",
    a: "11",
    b: "12",
    c: "13",
    d: "14 ",
    correct: "d",
  },
  {
    question: "krya krya krya?",
    a: "not krya",
    b: "bla",
    c: "blue",
    d: "krya! ",
    correct: "d",
  },
  {
    question: "lol lol lol?",
    a: "rip",
    b: "ship",
    c: "wha?",
    d: "not enough lol ",
    correct: "d",
  },
  {
    question: "fr fr fer?",
    a: "dig",
    b: "d9og",
    c: "cat?",
    d: "fox ",
    correct: "d",
  },
];

const questionEl = document.getElementById("question");
const aText = document.getElementById("a");
const bText = document.getElementById("b");
const cText = document.getElementById("c");
const dText = document.getElementById("d");
aText.innerHTML = "text";
let currentQuestion = 0;

loadQuiz();

function loadQuiz() {
  const currentQuizData = quizData[currentQuestion];
  questionEl.innerHTML = currentQuizData.question;
  aText.innerHTML = currentQuizData.a;
  bText.innerHTML = currentQuizData.b;
  cText.innerHTML = currentQuizData.c;
  dText.innerHTML = currentQuizData.d;
  currentQuestion++;
}
