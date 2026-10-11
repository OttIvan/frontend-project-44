import readlineSync from "readline-sync";
import welcome from "../cli.js";

const isEven = (number) => number % 2 === 0;

const playEven = () => {
  const name = welcome();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;

    console.log(`Question: ${number}`);

    const answer = readlineSync.question("Your answer: ");
    const correctAnswer = isEven(number) ? "yes" : "no";

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log("Correct!");
  }

  console.log(`Congratulations, ${name}!`);
};

export default playEven;
