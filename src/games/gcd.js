const rules = "Find the greatest common divisor of given numbers.";

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const getGcd = (first, second) => {
  let a = first;
  let b = second;

  while (b !== 0) {
    const remainder = a % b;
    a = b;
    b = remainder;
  }

  return a;
};

const generateRound = () => {
  const first = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
  const second = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;

  const question = `${first} ${second}`;
  const correctAnswer = getGcd(first, second);

  return [question, correctAnswer];
};

export default {
  rules,
  generateRound,
};
