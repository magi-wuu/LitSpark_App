import { View, Text, Pressable, Modal, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import { Trophy } from 'lucide-react-native';

interface CompletionModalProps {
  visible: boolean;
  score: number;
  total: number;
  onClose: () => void;
}

export function CompletionModal({ visible, score, total, onClose }: CompletionModalProps) {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      Animated.sequence([
        Animated.spring(animation, {
          toValue: 1,
          useNativeDriver: true,
          tension: 50,
          friction: 7,
        }),
      ]).start();
    } else {
      animation.setValue(0);
    }
  }, [visible]);

  const percentage = (score / total) * 100;
  const getMessage = () => {
    if (percentage === 100) return 'Perfect Score!';
    if (percentage >= 70) return 'Great Job!';
    if (percentage >= 50) return 'Good Effort!';
    return 'Keep Practicing!';
  };

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View className="flex-1 bg-black/50 items-center justify-center px-6">
        <Animated.View
          className="bg-white rounded-3xl p-8 w-full max-w-md"
          style={{
            transform: [
              {
                scale: animation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.8, 1],
                }),
              },
            ],
            opacity: animation,
          }}
        >
          <View className="items-center mb-6">
            <View className="bg-[#FFF4A3] w-24 h-24 rounded-full items-center justify-center mb-4">
              <Trophy size={48} color="#3A3A3A" />
            </View>
            <Text className="text-3xl mb-2">🎉</Text>
            <Text className="text-[#3A3A3A] text-3xl font-bold text-center mb-2" style={{ fontFamily: 'System' }}>
              {getMessage()}
            </Text>
            <Text className="text-[#7A7A7A] text-base text-center">
              You completed the reading comprehension quiz
            </Text>
          </View>

          <View 
            className="bg-[#FAF8F3] rounded-2xl p-6 mb-6"
          >
            <View className="flex-row justify-between items-center mb-2">
              <Text className="text-[#7A7A7A] text-base">Your Score</Text>
              <Text className="text-[#A8D8EA] text-2xl font-bold">
                {score}/{total}
              </Text>
            </View>
            <View className="h-3 bg-white rounded-full overflow-hidden">
              <View 
                className="h-full bg-[#A8D8EA] rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </View>
            <Text className="text-[#7A7A7A] text-sm mt-2 text-center">
              {percentage.toFixed(0)}% Correct
            </Text>
          </View>

          <Pressable
            onPress={onClose}
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
              Back to Stories
            </Text>
          </Pressable>
        </Animated.View>
      </View>
    </Modal>
  );
}
