import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';
import {useProgress} from '../../../../contexts/ProgressContext'; 

export default function CompletionScreen() {
  const { id, correctCount, totalQuestions } = useLocalSearchParams();
  const router = useRouter();

  const correctNum = parseInt(correctCount as string);
  const totalNum = parseInt(totalQuestions as string);
  const accuracy = Math.round((correctNum / totalNum) * 100);
  const xpEarned = correctNum;

  const scale = useSharedValue(0);
  const { addExperience } = useProgress();

  useEffect(() => {
    scale.value = withSpring(1, {
      damping: 8,
      stiffness: 100,
    });
    // Add experience points to user profile
    addExperience(xpEarned);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const getMessage = () => {
    if (accuracy >= 90) return "Outstanding work! You're mastering natural English!";
    if (accuracy >= 70) return "Great job! You're making excellent progress!";
    if (accuracy >= 50) return "Good effort! Keep practicing and you'll improve!";
    return "Nice try! Practice makes perfect!";
  };

  return (
    <SafeAreaView className="flex-1 bg-cream">
      <View className="flex-1 px-5 py-12 items-center justify-center">
        <Animated.View style={animatedStyle} className="items-center">
          <Text className="text-8xl mb-6">🎉</Text>
          <Text className="text-4xl font-bold text-charcoal mb-6 text-center">
            Great Job!
          </Text>
          
          <View
            className="bg-white rounded-3xl p-8 mb-6 w-full"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.03,
              shadowRadius: 12,
              elevation: 3,
            }}
          >
            <View className="items-center mb-6">
              <Text className="text-6xl font-mono text-terracotta mb-2" style={{ color: '#FACC15' }}>
                {xpEarned}
              </Text>
              <Text className="text-sm font-mono text-gray-medium">
                XP EARNED
              </Text>
            </View>

            <View className="items-center mb-6">
              <Text className="text-5xl font-mono text-primary mb-2">
                {accuracy}%
              </Text>
              <Text className="text-sm font-mono text-gray-medium">
                ACCURACY
              </Text>
            </View>

            <View className="items-center">
              <Text className="text-sm font-mono text-gray-medium">
                {correctNum} / {totalNum} correct
              </Text>
            </View>
          </View>

          <Text className="text-base text-charcoal text-center mb-8 px-4 leading-6">
            {getMessage()}
          </Text>

          <Pressable
            onPress={() => router.push('/esl')}
            className="bg-primary rounded-full py-4 px-12 active:scale-[0.97] w-full"
            style={{
              backgroundColor: '#3B82F6',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Text className="text-white text-center text-lg font-semibold">
              Continue
            </Text>
          </Pressable>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
