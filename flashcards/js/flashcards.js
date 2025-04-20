// I will be adding more flashcards to the list.
// This is a simple flashcard application using JavaScript.
const flashcards =  [ { question: "What is Azure DevOps?", answer: "A set of tools for DevOps lifecycle on Azure." },
{ question: "What does CI/CD stand for?", answer: "Continuous Integration / Continuous Deployment" },
{ question: "What is a container?", answer: "A lightweight, standalone software package." },
{ question: "What is Terraform?", answer: "An IaC tool for managing cloud infrastructure." }
];

let currentIndex = 0;
let showingAnswer = false;

const cardContent = document.getElementById('card-content');
const flipbtn = document.getElementById('flip');
const nextBtn = document.getElementById('next');
const prevbtn = document.getElementById('prev');

function showCard() {
    const currentCard = flashcards[currentIndex];
    cardContent.textContent = showingAnswer ? currentCard.answer : currentCard.question;
}