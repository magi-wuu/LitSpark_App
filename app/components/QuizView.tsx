import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Story, Question } from '../types/story';
import { useState } from 'react';
import { X, Check } from 'lucide-react-native';

interface QuizViewProps {
  story: Story;
  onClose: () => void;
  onComplete: () => void;
}

export function QuizView({ story, onClose, onComplete }: QuizViewProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());

  const currentQuestion = story.questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;

    setSelectedAnswer(answerIndex);
    const correct = answerIndex === currentQuestion.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setCorrectAnswers(prev => prev + 1);
    }
    
    setAnsweredQuestions(prev => new Set(prev).add(currentQuestionIndex));
    
    setTimeout(() => {
      setShowFeedback(true);
    }, 300);
  };

  const handleNext = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);
    setIsCorrect(null);

    if (currentQuestionIndex < story.questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 300);
    } else {
      setTimeout(() => {
        onComplete();
      }, 300);
    }
  };

  const progressPercentage = ((currentQuestionIndex + 1) / story.questions.length) * 100;

  return (
    <SafeAreaView className="flex-1 bg-[#FAF8F3]" edges={['top']}>
      {/* Header */}
      <View 
        className="bg-white px-4 py-4"
        style={{
          shadowColor: '#A8D8EA',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 2,
        }}
      >
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-[#3A3A3A] text-xl font-bold" style={{ fontFamily: 'System' }}>
            Comprehension Quiz
          </Text>
          <Pressable onPress={onClose} className="p-2">
            <X size={24} color="#3A3A3A" />
          </Pressable>
        </View>

        {/* Progress Bar */}
        <View className="flex-row items-center mb-2">
          <Text className="text-[#7A7A7A] text-sm mr-2">
            Question {currentQuestionIndex + 1} of {story.questions.length}
          </Text>
        </View>
        <View className="h-2 bg-[#FAF8F3] rounded-full overflow-hidden">
          <View 
            className="h-full bg-[#A8D8EA] rounded-full"
            style={{ width: `${progressPercentage}%` }}
          />
        </View>
      </View>

      {/* Question Card */}
      <View className="flex-1 p-6">
        <View 
          className="bg-white rounded-2xl p-6 mb-6"
          style={{
            shadowColor: '#A8D8EA',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 3,
          }}
        >
          <Text className="text-[#3A3A3A] text-xl font-bold mb-6" style={{ fontFamily: 'System' }}>
            {currentQuestion.question}
          </Text>

          {/* Answer Options */}
          <View className="gap-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrectAnswer = index === currentQuestion.correctAnswer;
              const showAsCorrect = isSelected && isCorrect;
              const showAsIncorrect = isSelected && !isCorrect;

              return (
                <Pressable
                  key={index}
                  onPress={() => handleAnswerSelect(index)}
                  disabled={selectedAnswer !== null}
                  className={`rounded-2xl p-4 ${
                    showAsCorrect
                      ? 'bg-[#B8E6D5]'
                      : showAsIncorrect
                      ? 'bg-[#FFB4B4]'
                      : 'bg-[#FAF8F3]'
                  } active:scale-98`}
                  style={{
                    borderWidth: 2,
                    borderColor: showAsCorrect
                      ? '#B8E6D5'
                      : showAsIncorrect
                      ? '#FFB4B4'
                      : 'transparent',
                  }}
                >
                  <View className="flex-row items-center justify-between">
                    <Text 
                      className={`flex-1 text-base ${
                        isSelected ? 'font-semibold' : 'font-normal'
                      }`}
                      style={{ color: '#3A3A3A' }}
                    >
                      {option}
                    </Text>
                    {showAsCorrect && (
                      <View className="bg-white rounded-full p-1">
                        <Check size={16} color="#B8E6D5" />
                      </View>
                    )}
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>
      </View>

      {/* Feedback Modal */}
      {showFeedback && (
        <View
          className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl p-6"
          style={{
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 10,
          }}
        >
          <View className={`w-16 h-16 rounded-full items-center justify-center mb-4 ${
            isCorrect ? 'bg-[#B8E6D5]' : 'bg-[#FFB4B4]'
          }`}>
            <Text className="text-3xl">{isCorrect ? '🎉' : '💪'}</Text>
          </View>

          <Text className="text-[#3A3A3A] text-2xl font-bold mb-2" style={{ fontFamily: 'System' }}>
            {isCorrect ? 'Excellent!' : 'Keep Learning!'}
          </Text>

          <Text className="text-[#7A7A7A] text-base mb-6">
            {isCorrect
              ? 'You got it right! Great comprehension skills.'
              : `The correct answer was: ${currentQuestion.options[currentQuestion.correctAnswer]}`}
          </Text>

          <Pressable
            onPress={handleNext}
            className="bg-[#A8D8EA] rounded-full py-4 px-8 active:scale-95"
            style={{
              shadowColor: '#A8D8EA',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 8,
              elevation: 5,
            }}
          >
            <Text className="text-white text-center text-lg font-bold">
              {currentQuestionIndex < story.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
}
