const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
  const correctAnswer = isEven(number) ? "yes" : "no";

  return [number, correctAnswer];
};

export default {
  rules,
  generateRound,
};
