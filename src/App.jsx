import React, { useState, useEffect } from 'react';
import { questions as staticQuestions } from './questions';
import { generateMathQuestion } from './mathutils';
import './App.css';

export default function App() {
  // NEW: State to hold combined questions
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem('quiz-high-score');
    return saved ? parseInt(saved) : 0;
  });

  // Initialize Quiz: Mix static and math questions
  useEffect(() => {
    const mathBatch = Array.from({ length: 5 }, () => generateMathQuestion());
    const combined = [...staticQuestions, ...mathBatch].sort(() => Math.random() - 0.5);
    setQuizQuestions(combined);
  }, []); // Only runs once on mount

  // Timer & High Score Logic (Keep the same as before...)
  useEffect(() => {
    if (showScore || quizQuestions.length === 0) return;
    if (timer === 0) {
      handleNextQuestion();
      return;
    }
    const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timer, showScore, quizQuestions]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) setScore(score + 1);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setTimer(10);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    const mathBatch = Array.from({ length: 5 }, () => generateMathQuestion());
    const combined = [...staticQuestions, ...mathBatch].sort(() => Math.random() - 0.5);
    setQuizQuestions(combined);
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setTimer(10);
  };

  // Prevent rendering before questions are ready
  if (quizQuestions.length === 0) return <div className="loader">Loading Quiz...</div>;

  return (
    <div className="app-container">
      <div className="quiz-card">
        {showScore ? (
          <div className="score-section">
            <h2>Quiz Over!</h2>
            <div className="final-stats">
              <p>Current Score: <strong>{score}</strong></p>
              <p className="high-score-label">Best Ever: <strong>{highScore}</strong></p>
            </div>
            <button className="reset-btn" onClick={resetQuiz}>Restart Quiz</button>
          </div>
        ) : (
          <>
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
              ></div>
            </div>

            <div className="quiz-header">
              <div className="question-count">
                <span>{currentQuestion + 1}</span>/{quizQuestions.length}
              </div>
              <div className={`timer-display ${timer < 5 ? 'timer-low' : ''}`}>
                {timer}s
              </div>
            </div>

            <div className="question-section">
              <h1 className="question-text">
                {/* Render math as LaTeX if you prefer, or standard text */}
                {quizQuestions[currentQuestion].questionText}
              </h1>
            </div>

            <div className="answer-section">
              {quizQuestions[currentQuestion].answerOptions.map((option, index) => (
                <button
                  key={index}
                  className="answer-button"
                  onClick={() => handleAnswerOptionClick(option.isCorrect)}
                >
                  {option.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}