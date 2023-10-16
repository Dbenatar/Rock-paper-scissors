const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  } else {
    console.log("Error!");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "This round is a tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "Sorry, Computer wins";
    } else {
      return "Congratulations";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "Sorry, Computer wins";
    } else {
      return "Congratulations";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock");
    return "Sorry, Computer wins";
  } else {
    return "Congratulations";
  }
};

const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log("You chose: " + userChoice);
  console.log("The computer chose: " + computerChoice);

  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
