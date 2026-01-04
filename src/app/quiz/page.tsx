'use client';

// AppLayout is now provided globally via ConditionalLayout
import { useState } from 'react';
import { motion } from 'framer-motion';

const quizQuestions = [
  {
    id: 1,
    question: "What does ONOE stand for?",
    options: [
      "One Nation One Economy",
      "One Nation One Election",
      "One Nation One Education",
      "One Nation One Environment"
    ],
    correctAnswer: 1,
    explanation: "ONOE stands for One Nation One Election, referring to the proposal to hold simultaneous elections for the Lok Sabha and all State Legislative Assemblies."
  },
  {
    id: 2,
    question: "During which period did India have simultaneous elections?",
    options: [
      "1947-1960",
      "1951-1967",
      "1970-1980",
      "Never had simultaneous elections"
    ],
    correctAnswer: 1,
    explanation: "India had simultaneous elections from 1951 to 1967. The first four general elections were held together with state assembly elections."
  },
  {
    id: 3,
    question: "Which constitutional articles specify the five-year term for Lok Sabha and State Assemblies?",
    options: [
      "Articles 81 and 170",
      "Articles 82 and 171",
      "Articles 83 and 172",
      "Articles 84 and 173"
    ],
    correctAnswer: 2,
    explanation: "Articles 83 and 172 of the Indian Constitution specify the five-year term for Lok Sabha and State Legislative Assemblies respectively."
  },
  {
    id: 4,
    question: "What is one of the main arguments IN FAVOR of ONOE?",
    options: [
      "It will increase the number of elections",
      "It may reduce election costs and administrative burden",
      "It will eliminate all political parties",
      "It guarantees better governance"
    ],
    correctAnswer: 1,
    explanation: "Proponents argue that ONOE could reduce election costs and administrative burden by consolidating elections, though the exact savings are debated."
  },
  {
    id: 5,
    question: "What is one of the main concerns AGAINST ONOE?",
    options: [
      "It will make elections too cheap",
      "It could undermine India's federal structure",
      "It will eliminate the Election Commission",
      "It requires no constitutional amendments"
    ],
    correctAnswer: 1,
    explanation: "Critics argue that ONOE could undermine India's federal structure by reducing focus on state-specific issues during elections."
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([]);

  const handleAnswerSelect = (optionIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(optionIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;

    setShowExplanation(true);

    if (selectedAnswer === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setAnsweredQuestions([]);
  };

  const currentQ = quizQuestions[currentQuestion];
  const scorePercentage = (score / quizQuestions.length) * 100;

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 dark:from-dark-900 dark:to-dark-800 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {!quizCompleted ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-dark-50">
                  ONOE Knowledge Quiz
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Test your understanding of One Nation One Election
                </p>
              </div>

              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-2">
                  <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
                  <span>Score: {score}/{answeredQuestions.length}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 border border-slate-100 dark:border-dark-700"
              >
                <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-dark-50">
                  {currentQ.question}
                </h2>

                <div className="space-y-3 mb-6">
                  {currentQ.options.map((option, index) => {
                    const isSelected = selectedAnswer === index;
                    const isCorrect = index === currentQ.correctAnswer;
                    const showCorrect = showExplanation && isCorrect;
                    const showIncorrect = showExplanation && isSelected && !isCorrect;

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showExplanation}
                        className={`
                          w-full text-left p-4 rounded-lg border-2 transition-all
                          ${isSelected && !showExplanation ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-dark-700'}
                          ${showCorrect ? 'border-green-500 bg-green-50 dark:bg-green-900/20' : ''}
                          ${showIncorrect ? 'border-red-500 bg-red-50 dark:bg-red-900/20' : ''}
                          ${!showExplanation ? 'hover:border-blue-400 hover:bg-slate-50 dark:hover:bg-dark-700 cursor-pointer' : 'cursor-not-allowed'}
                        `}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-gray-800 dark:text-dark-50">{option}</span>
                          {showCorrect && (
                            <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                          {showIncorrect && (
                            <svg className="h-6 w-6 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {showExplanation && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg mb-6"
                  >
                    <h3 className="font-bold text-blue-900 dark:text-blue-100 mb-2">Explanation:</h3>
                    <p className="text-blue-800 dark:text-blue-200">{currentQ.explanation}</p>
                  </motion.div>
                )}

                <div className="flex justify-between">
                  {!showExplanation ? (
                    <button
                      onClick={handleSubmitAnswer}
                      disabled={selectedAnswer === null}
                      className={`px-6 py-3 rounded-lg font-medium transition-all ${selectedAnswer !== null
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                      Submit Answer
                    </button>
                  ) : (
                    <button
                      onClick={handleNextQuestion}
                      className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium hover:from-blue-700 hover:to-teal-700 transition-all"
                    >
                      {currentQuestion < quizQuestions.length - 1 ? 'Next Question →' : 'View Results'}
                    </button>
                  )}
                </div>
              </motion.div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-12 border border-slate-100 dark:border-dark-700">
                <div className="text-6xl mb-6">
                  {scorePercentage >= 80 ? '🎉' : scorePercentage >= 60 ? '👍' : '📚'}
                </div>
                <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-dark-50">
                  Quiz Completed!
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  You scored <span className="font-bold text-blue-600 dark:text-blue-400">{score}</span> out of <span className="font-bold">{quizQuestions.length}</span>
                </p>

                <div className="mb-8">
                  <div className="text-5xl font-bold mb-2 text-gray-800 dark:text-dark-50">
                    {Math.round(scorePercentage)}%
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-4 max-w-md mx-auto">
                    <div
                      className={`h-4 rounded-full transition-all duration-1000 ${scorePercentage >= 80 ? 'bg-green-500' : scorePercentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                        }`}
                      style={{ width: `${scorePercentage}%` }}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    onClick={handleRestartQuiz}
                    className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium hover:from-blue-700 hover:to-teal-700 transition-all"
                  >
                    Retake Quiz
                  </button>
                  <div>
                    <a
                      href="/learn"
                      className="inline-block px-8 py-3 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
                    >
                      Back to Learning
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}