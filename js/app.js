//Create Questions
var questions = [
    new Question("Which singer joined Mel Gibson in the movie Mad Max: Beyond The Thunderdome?", ["Tina Turner", "Whitney Houston"], "Tine Turner"),
    new Question("Which American state is nearest to the former Soviet Union?", ["Hawaii", "Alaska"], "Alaska")
];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();