var LISTENERS = {
    rock: function() {
        var rockButton = document.getElementById('rock');
        rockButton.addEventListener('click', function (event){
            STATE.runGame('rock');
        })
    },
    paper: function() {
        var paperButton = document.getElementById('paper');
        paperButton.addEventListener('click', function (event){
            STATE.runGame('paper');
        })
    },
    scissors: function() {
        var scissorsButton = document.getElementById('scissors');
        scissorsButton.addEventListener('click', function (event){
            STATE.runGame('scissors');
        })
    }
    
}

var UTILS = {
    choices: ["rock", "paper", "scissors"],
    randomInt: function(min, max) { 
        var random = Math.floor(Math.random() * (max - min + 1)) + min;

        if (random > max) random = max;
        return random;
    },
    randomCompChoice: function() {
        return UTILS.choices[UTILS.randomInt(0, 2)]
    },
    isTie: function(userChoice, compChoice) {
        if (userChoice === compChoice) {
            return true;
        } else {
            return false;
        }
    },
    isUserWin: function(userChoice, compChoice) {
        if (userChoice === "rock" && compChoice === "scissors")  {
            return true;
        } else if (userChoice === "paper" && compChoice === "rock") {
            return true;
        } else if (userChoice === "scissors" && compChoice === "paper") {
            return true;
        } else {
            return false;
        }
    }
}

var STATE = {
    userWins: 0,
    compWins: 0,
    lastUserChoice: null,
    lastCompChoice: null,
    lastResult: null,
    runGame: function(userChoice) {
        var compChoice = UTILS.randomCompChoice();
        STATE.lastUserChoice = userChoice;
        STATE.lastCompChoice = compChoice;
        if (UTILS.isTie(userChoice, compChoice)) {
            STATE.lastResult = "tie";
        } else {
            if (UTILS.isUserWin(userChoice, compChoice)) {
                STATE.lastResult = "user";
                STATE.userWins = STATE.userWins + 1;
            } else {
                STATE.lastResult = "comp";
                STATE.compWins = STATE.compWins + 1;
            }
        }
        STATE.displayResult();
    },
    displayResult: function() {
        console.log("=============================");
        console.log("User Choice:", STATE.lastUserChoice);
        console.log("Comp Choice:", STATE.lastCompChoice);
        console.log("Game result:", STATE.lastResult);
        console.log("Total User Wins:", STATE.userWins);
        console.log("Total Comp Wins:", STATE.compWins);
        console.log("=============================");
    }
}

LISTENERS.rock();
LISTENERS.paper();
LISTENERS.scissors();