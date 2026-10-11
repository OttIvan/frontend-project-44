const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const FIRST_DIVISOR = 2;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let divisor = FIRST_DIVISOR; divisor <= Math.sqrt(number); divisor += 1) {
    if (number % divisor === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const number = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;

  const question = String(number);
  const correctAnswer = isPrime(number) ? "yes" : "no";

  return [question, correctAnswer];
};

export default {
  rules,
  generateRound,
};
