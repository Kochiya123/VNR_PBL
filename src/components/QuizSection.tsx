import React, { useState, useEffect } from 'react';
import { quizQuestions, QuizQuestion } from '../utils/quizData';
import { CheckCircle, XCircle, RotateCcw, Trophy } from 'lucide-react';

// Fisher-Yates shuffle algorithm
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Shuffle questions and their options
const shuffleQuiz = (questions: QuizQuestion[]): QuizQuestion[] => {
  // Shuffle the questions array
  const shuffledQuestions = shuffleArray(questions);
  
  // Shuffle options within each question and update correctAnswer index
  return shuffledQuestions.map((question) => {
    const options = [...question.options];
    const correctAnswerValue = options[question.correctAnswer];
    
    // Shuffle options
    const shuffledOptions = shuffleArray(options);
    
    // Find new index of correct answer
    const newCorrectAnswer = shuffledOptions.findIndex(opt => opt === correctAnswerValue);
    
    return {
      ...question,
      options: shuffledOptions,
      correctAnswer: newCorrectAnswer
    };
  });
};

export const QuizSection: React.FC = () => {
  const [shuffledQuestions, setShuffledQuestions] = useState<QuizQuestion[]>(() => 
    shuffleQuiz(quizQuestions)
  );
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const totalQuestions = shuffledQuestions.length;
  const progress = (answeredQuestions.size / totalQuestions) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (answerIndex === currentQuestion.correctAnswer) {
      if (!answeredQuestions.has(currentQuestionIndex)) {
        setScore(score + 1);
      }
    }

    setAnsweredQuestions(new Set(answeredQuestions).add(currentQuestionIndex));
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    // Reshuffle questions for a new play
    setShuffledQuestions(shuffleQuiz(quizQuestions));
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(new Set());
    setQuizCompleted(false);
  };

  const getAnswerClass = (index: number) => {
    if (!showExplanation) {
      return selectedAnswer === index
        ? 'border-red-700 bg-red-50'
        : 'border-gray-300 hover:border-red-700 hover:bg-red-50';
    }

    if (index === currentQuestion.correctAnswer) {
      return 'border-green-600 bg-green-50';
    }

    if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
      return 'border-red-600 bg-red-50';
    }

    return 'border-gray-300 opacity-60';
  };

  if (quizCompleted) {
    const percentage = Math.round((score / totalQuestions) * 100);
    
    return (
      <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 text-center">
        <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-3xl text-gray-800 mb-4">Hoàn thành bài kiểm tra!</h2>
        <div className="text-6xl mb-4">
          {percentage >= 80 ? '🎉' : percentage >= 60 ? '👏' : '📚'}
        </div>
        <p className="text-xl text-gray-700 mb-6">
          Bạn đạt <span className="text-red-700">{score}</span> trên <span className="text-red-700">{totalQuestions}</span> câu
        </p>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
          <div 
            className="bg-gradient-to-r from-red-700 to-red-600 h-4 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <p className="text-lg text-gray-600 mb-8">
          {percentage >= 80 ? 'Xuất sắc! Bạn có hiểu biết vững vàng về giai đoạn lịch sử này.' :
           percentage >= 60 ? 'Tốt lắm! Bạn biết khá nhiều về thời kỳ này.' :
           'Hãy tiếp tục học hỏi! Lịch sử rất thú vị.'}
        </p>
        <button
          onClick={handleRestart}
          className="flex items-center gap-2 mx-auto px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors"
        >
          <RotateCcw className="w-5 h-5" />
          Làm lại
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-700 to-red-600 text-white p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl">Bài Kiểm Tra Lịch Sử</h2>
          <div className="text-right">
            <div className="text-sm opacity-90">Điểm</div>
            <div className="text-xl">{score} / {answeredQuestions.size}</div>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-red-900/30 rounded-full h-2">
          <div 
            className="bg-white h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm mt-2 opacity-90">
          Câu hỏi {currentQuestionIndex + 1} / {totalQuestions}
        </p>
      </div>

      {/* Question */}
      <div className="p-8">
        <div className="mb-2 inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
          Năm: {currentQuestion.year}
        </div>
        <h3 className="text-xl text-gray-800 mb-6">
          {currentQuestion.question}
        </h3>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              disabled={showExplanation}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${getAnswerClass(index)} ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-800">{option}</span>
                {showExplanation && (
                  <>
                    {index === currentQuestion.correctAnswer && (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    )}
                    {index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                      <XCircle className="w-6 h-6 text-red-600" />
                    )}
                  </>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className={`p-4 rounded-lg mb-6 ${selectedAnswer === currentQuestion.correctAnswer ? 'bg-green-50 border border-green-200' : 'bg-yellow-50 border border-yellow-200'}`}>
            <h4 className="text-gray-800 mb-2">
              {selectedAnswer === currentQuestion.correctAnswer ? '✓ Đúng!' : '✗ Sai'}
            </h4>
            <p className="text-gray-700">{currentQuestion.explanation}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Trước
          </button>
          
          <button
            onClick={handleNext}
            disabled={!showExplanation}
            className="px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-red-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {currentQuestionIndex === totalQuestions - 1 ? 'Hoàn thành' : 'Tiếp theo'}
          </button>
        </div>
      </div>
    </div>
  );
};
