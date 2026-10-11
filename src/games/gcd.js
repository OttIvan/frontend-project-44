const rules = "Find the greatest common divisor of given numbers.";

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
  const first = Math.floor(Math.random() * 100) + 1;
  const second = Math.floor(Math.random() * 100) + 1;

  const question = `${first} ${second}`;
  const correctAnswer = getGcd(first, second);

  return [question, correctAnswer];
};

export default {
  rules,
  generateRound,
};
