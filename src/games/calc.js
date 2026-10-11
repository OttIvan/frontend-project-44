const rules = "What is the result of the expression?";

const MIN_NUMBER = 1;
const MAX_NUMBER = 25;
const OPERATORS = ["+", "-", "*"];

const calculate = (first, operator, second) => {
  switch (operator) {
    case "+":
      return first + second;
    case "-":
      return first - second;
    case "*":
      return first * second;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};

const generateRound = () => {
  const first = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
  const second = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
  const operator = OPERATORS[Math.floor(Math.random() * OPERATORS.length)];

  const question = `${first} ${operator} ${second}`;
  const correctAnswer = calculate(first, operator, second);

  return [question, correctAnswer];
};

export default {
  rules,
  generateRound,
};
