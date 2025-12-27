import { View, Text, Pressable, SafeAreaView, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { modules } from '../../..//data/modules';
import { useState } from 'react';
import ProgressBar from '../../../components/ProgressBar';
import QuestionCard from '../../../components/QuestionCard';
import FeedbackPanel from '../../../components/FeedbackPanel';
import { ArrowLeft } from 'lucide-react-native';

export default function PracticeScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const module = modules.find((m) => m.id === id);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  if (!module) {
    return (
      <SafeAreaView className="flex-1 bg-cream">
        <View className="flex-1 items-center justify-center">
          <Text className="text-xl text-charcoal">Module not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const currentQuestion = module.questions[currentQuestionIndex];
  const totalQuestions = module.questions.length;

  const handleAnswer = (answer: string | number) => {
    const correct =
      currentQuestion.type === "sentence-building"
        ? answer === currentQuestion.correctAnswer
        : answer === currentQuestion.correctAnswer;

    setIsCorrect(correct);
    if (correct) {
      setCorrectCount(correctCount + 1);
    }
    setShowFeedback(true);
  };

  const handleContinue = () => {
    setShowFeedback(false);

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Navigate to completion screen
      router.replace({
        pathname: '/esl/modules/[id]/complete',
        params: {
          id: module.id,
          correctCount: correctCount.toString(),
          totalQuestions: totalQuestions.toString(),
        },
      });
    }
  };

  const handleExit = () => {
    Alert.alert("Exit Practice?", "Your progress will not be saved.", [
      { text: "Cancel", style: "cancel" },
      { text: "Exit", style: "destructive", onPress: () => router.push('/esl') },
    ]);
  };

  return (
    <SafeAreaView className="flex-1 bg-cream">
      <View className="flex-1">
        {/* Progress Bar */}
        <ProgressBar
          current={currentQuestionIndex + 1}
          total={totalQuestions}
        />

        {/* Header */}
        <View className="flex-row items-center justify-between px-5 py-4">
          <Pressable
            onPress={() => router.push('/esl')}
            className="w-10 h-10 items-center justify-center active:scale-90"
          >
            <ArrowLeft size={24} color="#1E293B" />
          </Pressable>
          <Text className="text-sm font-mono text-gray-medium">
            {currentQuestionIndex + 1} / {totalQuestions}
          </Text>
          <View className="w-10" />
        </View>

        {/* Question Card */}
        <QuestionCard question={currentQuestion} onAnswer={handleAnswer} />

        {/* Feedback Panel */}
        <FeedbackPanel
          visible={showFeedback}
          correct={isCorrect}
          explanation={currentQuestion.explanation}
          onContinue={handleContinue}
        />
      </View>
    </SafeAreaView>
  );
}