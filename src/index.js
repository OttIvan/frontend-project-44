import readlineSync from "readline-sync";
import welcome from "./cli.js";

const ROUNDS_COUNT = 3;

const startGame = (game) => {
  const name = welcome();

  console.log(game.rules);

  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const [question, correctAnswer] = game.generateRound();

    console.log(`Question: ${question}`);

    const answer = readlineSync.question("Your answer: ");

    if (answer !== String(correctAnswer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log("Correct!");
  }

  console.log(`Congratulations, ${name}!`);
};

export default startGame;
