const rules = "What is the result of the expression?";

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
  const first = Math.floor(Math.random() * 25) + 1;
  const second = Math.floor(Math.random() * 25) + 1;
  const operators = ["+", "-", "*"];
  const operator = operators[Math.floor(Math.random() * operators.length)];

  const question = `${first} ${operator} ${second}`;
  const correctAnswer = calculate(first, operator, second);

  return [question, correctAnswer];
};

export default {
  rules,
  generateRound,
};
