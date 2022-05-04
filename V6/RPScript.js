//----------MENU FUNCTIONS------------
/* Open the options menu */
function openNav() {
    document.getElementById("optionsMenu").style.display = "block";
}
//Toggle Sound
function soundToggle() {
    if (document.getElementById("soundSetting").style.backgroundColor === "orange") {
        document.getElementById("soundSetting").style.backgroundColor = "antiquewhite";
        playAudio();
    } else {
        document.getElementById("soundSetting").style.backgroundColor = "orange";
    }
}
//Control Sound
function playAudio(buttonId) {
    if (document.getElementById("soundSetting").style.backgroundColor === "orange") {
        return;
    }
    else{
        if (buttonId === "random"){
            document.getElementById("randomPressSFX").play();
        }
        else{
            document.getElementById("buttonPressSFX").play();
        }
    }
}
//Toggle Music
function musicToggle() {
    if (document.getElementById("musicSetting").style.backgroundColor === "orange") {
        document.getElementById("musicSetting").style.backgroundColor = "antiquewhite";
        document.getElementById("musicSFX").play();
    } else {
        document.getElementById("musicSetting").style.backgroundColor = "orange";
        document.getElementById("musicSFX").pause();
    }
}
/* Close the options menu */
function closeNav() {
    document.getElementById("optionsMenu").style.display = "none";
}
/* Open the pause menu */
function togglePause() {
    if (document.getElementById("pauseMenu").style.display === "block") {
        document.getElementById("pauseMenu").style.display = "none";
    } else {
        document.getElementById("pauseMenu").style.display = "block";
    }
}
function openHelp() {
    document.getElementById("helpMenu").style.display = "block";
}
function closeHelp() {
    document.getElementById("helpMenu").style.display = "none";
}

/* Close the pause menu*/
function closePause() {
    document.getElementById("pauseMenu").style.display = "none";
}
//Play the game, close the main menu
function openGame() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("pauseButton").style.display = "block";
    document.getElementById("scoresButton").style.display = "block";
}

/* Close */
function closeGame() {
    document.getElementById("Play").style.height = "0%";
}

//Open the Main Menu
function openMenu() {
    document.getElementById("mainMenu").style.display = "block";
    document.getElementById("pauseButton").style.display = "none";
    document.getElementById("pauseMenu").style.display = "none";
    document.getElementById("scoresButton").style.display = "none";
}

//Toggle Scores
function toggleScores() {
    if (document.getElementById("scoresTable").style.display === "block") {
        document.getElementById("scoresTable").style.height = "0px";
        document.getElementById("scoresTable").style.display = "none";
    } else {
        document.getElementById("scoresTable").style.height = "600px";
        document.getElementById("scoresTable").style.display = "block";
    }
}

function closeScores() {
    document.getElementById("scoresTable").style.height = "0px";
    document.getElementById("scoresTable").style.display = "none";
}
//Open the points shop STILL UNDER CONSTRUCTION

/*function toggleShop() {
    if (document.getElementById("pointsShop").style.display === "none"){
        document.getElementById("pointsShop").style.height = "600px";
        document.getElementById().style.display = "block";
    }
    else {
        document.getElementById("pointsShop").style.height = "0px";
        document.getElementById().style.display = "none";
    }
}*/


//----------Rock Paper Scissors Javascript---------------

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.choice');
const inpName = document.getElementById("plName");
const btInsert = document.getElementById("submitButton");
const lsOutput = document.getElementById("lsOutput");
let userChoice;
let computerChoice;
let result;
let score = 0;
let highScore = 0;
let compScore = 0;
let drawScore = 0;
let totalGames = 0;
let scoreDisplay = 1;
let check = 0;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    if (userChoice === "random") {
        const randomNumber = Math.floor(Math.random() * 3) + 1
        if (randomNumber === 1) {
            userChoice = 'rock'
        }
        if (randomNumber === 2) {
            userChoice = 'scissors'
        }
        if (randomNumber === 3) {
            userChoice = 'paper'
        }
    }
    userChoiceDisplay.innerHTML = userChoice
    getResult()
    let yourScore = score.toString();
    document.getElementById('theScore').innerHTML = yourScore;
    scoringSystem();
}))
//this generates the computers choice
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}
//game play results display
function getResult() {
    if (computerChoice === userChoice) {
        result = 'its a draw!'
        check = 0;
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'you win!'
        check = 1;
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'you lose!'
        check = 0;
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'you win!'
        check = 1;
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'you lose!'
        check = 0;
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'you win!'
        check = 1;
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'you lose!'
        check = 0;
    }
    //refresesh score page
    if (userChoice === 'refresh') {
        result = "Refreshing page";
        window.alert("Name is confirmed. Click to view high scores.");
		totalGames = 0;
		drawScore = 0;
        SortLocalStorage()

        let refresh1Element = document.getElementById("link1");
        let refresh = "Refreshing"
        refresh1Element.innerHTML = refresh;

        let refresh2Element = document.getElementById("link2");
        refresh2Element.innerHTML = refresh;

        let refresh3Element = document.getElementById("link3");
        refresh3Element.innerHTML = refresh;

        let refresh4Element = document.getElementById("link4");
        refresh4Element.innerHTML = refresh;

        let refresh5Element = document.getElementById("link5");
        refresh5Element.innerHTML = refresh;
    }
    //resets score
    if (userChoice === 'reset') {
        result = "Clearing High Score Data";
        window.alert("Refreshing now.");
		totalGames = 0;
		drawScore = 0;
		localStorage.clear();
		location.reload();
    }
	//goes back to previous page
    if (userChoice === 'back'){
        result = "back";
        totalGames = 0;
        drawScore = 0;
        location.reload();
    }
    //display results
    resultDisplay.innerHTML = result
    if (check === 1) {
        score = score + 1
    }
    ///Addition for High Score
    resultDisplay.innerHTML = result
    if (score > highScore) {
        highScore = score;
    }
}

function scoringSystem() {
    totalGames++;
    switch (result) {
        case 'you win!':
            score++;
            break;
        case 'you lose!':
            compScore++;
            score--;
            break;
        default:
            drawScore++;

    }
    /*Bonuses*/
    if (totalGames === 10 && score > compScore) {
        window.alert("Bonus 5 points for being ahead after 10 games!");
        score += 5;
    } else if (totalGames === 10 && score < compScore) {
        window.alert("Subtracting 5 points for being behind after 10 games!");
        score -= 5;
    }
    /*Updating the values in the HTML document*/
    document.getElementById('theScore').innerHTML = score;
    document.getElementById('compScore').innerHTML = compScore;
    document.getElementById('drawScore').innerHTML = drawScore;
    document.getElementById('totalGames').innerHTML = totalGames;
}
/**Anon function to store player name & score */
btInsert.onclick = function() {
    const dateID = Date.now();
    const key = dateID;

    const value = inpName.value + " : " + document.getElementById('theScore').innerHTML;

    if (key && value) {
        localStorage.setItem(key, value);
    }
};

let sortArray = SortLocalStorage();

function SortLocalStorage() {
    if (localStorage.length > 0) {
        var localStorageArray = new Array();
        for (i = 0; i < localStorage.length; i++) {
            localStorageArray[i] = localStorage.key(i) + ";" + localStorage.getItem(localStorage.key(i));
        }
    }
    var sortedArray = localStorageArray.sort();
    sortedArray.reverse();
    return sortedArray;
}

const scoreArray = new Array();
for (let i = 0; i < sortArray.length; i++) {
    scoreArray[i] = sortArray[i].split(";");
}

let link1Element = document.getElementById("link1");
let link1 = scoreArray[0][1]
link1Element.innerHTML = link1;

let link2Element = document.getElementById("link2");
let link2 = scoreArray[1][1]
link2Element.innerHTML = link2;

let link3Element = document.getElementById("link3");
let link3 = scoreArray[2][1]
link3Element.innerHTML = link3;

let link4Element = document.getElementById("link4");
let link4 = scoreArray[3][1]
link4Element.innerHTML = link4;

let link5Element = document.getElementById("link5");
let link5 = scoreArray[4][1]
link5Element.innerHTML = link5;