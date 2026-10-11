const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  const correctAnswer = isEven(number) ? "yes" : "no";

  return [number, correctAnswer];
};

export default {
  rules,
  generateRound,
};
