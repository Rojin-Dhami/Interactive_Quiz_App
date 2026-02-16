// mathUtils.js

export const generateMathQuestion = () => {
  const num1 = Math.floor(Math.random() * 20) + 1; // 1 to 20
  const num2 = Math.floor(Math.random() * 20) + 1;
  const isAddition = Math.random() > 0.5;
  
  const questionText = isAddition 
    ? `What is ${num1} + ${num2}?` 
    : `What is ${num1} - ${num2}?`;
    
  const correctAnswer = isAddition ? num1 + num2 : num1 - num2;

  // Generate 3 wrong answers close to the real one
  const wrongAnswers = new Set();
  while (wrongAnswers.size < 3) {
    const offset = Math.floor(Math.random() * 5) + 1;
    const wrong = Math.random() > 0.5 ? correctAnswer + offset : correctAnswer - offset;
    if (wrong !== correctAnswer) {
      wrongAnswers.add(wrong);
    }
  }

  // Combine and shuffle answers
  const allOptions = [
    { answerText: correctAnswer.toString(), isCorrect: true },
    ...Array.from(wrongAnswers).map(val => ({ answerText: val.toString(), isCorrect: false }))
  ].sort(() => Math.random() - 0.5);

  return { questionText, answerOptions: allOptions };
};