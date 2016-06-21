//Create Questions
var questions = [
    new Question("Which singer joined Mel Gibson in the movie Mad Max: Beyond The Thunderdome?", ["TINA TURNER", "WHITNEY HOUSTON"], "TINA TURNER"),
    new Question("Which American state is nearest to the former Soviet Union?", ["HAWAII", "ALASKA"], "ALASKA"),
    new Question("On TV, who did the character Lurch work for?", ["ADDAMS FAMILY", "BRADY BUNCH"], "ADDAMS FAMILY"),
    new Question("What is converted into alcohol during brewing?", ["SUGAR", "BARLEY"], "SUGAR"),
    new Question("What is infant whale commonly called?", ["CALF", "PUP"], "CALF"),
    new Question("Which actor appeared in Papillion and The Great Escape and died in 1980?", ["STEVE MCQUEEN", "JOHN LENNON"], "JOHN LENNON"),
    new Question("In which bay is Alcatraz?", ["SAN FRANCISCO BAY", "MONTEGO BAY"], "SAN FRANCISCO BAY"),
    new Question("Which TV character said, 'Live long and prosper'?", ["MR SPOCK", "ALF"], "MR SPOCK"),

    new Question("What make of car was the time-machine in the film Back To The Future?", ["CORVETTE", "DE LOREAN"], "DE LOREAN"),
    new Question("How old is a horse when it changes from a filly to a mare?", ["SIX YEARS", "FOUR YEARS"], "FOUR YEARS"),
];

//Create Quiz
var quiz = new Quiz(questions);

//Display Quiz
QuizUI.displayNext();