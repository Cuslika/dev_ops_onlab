import React, { useState, useEffect } from "react";

import Questionaire from "./components/Questionaire";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [question.correct_answer, ...question.incorrect_answers].sort(
            () => Math.random() - 0.5),
        }));
        setQuestions(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }
    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);

    setCurrentIndex(currentIndex + 1);
  };

  return questions.length > 0 ? (
    <div className="container">
      {currentIndex >= questions.length ? (
        <h1 className="text-3xl text-white font-bold">You scored {score}!</h1>
      ) : (
        <Questionaire
          data={questions[currentIndex]}
          handleNextQuestion={handleNextQuestion}
          showAnswers={showAnswers}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  ) : (
    <h2 className="text-2xl text-white font-bold">Loading questions...</h2>
  );
}

export default App;
