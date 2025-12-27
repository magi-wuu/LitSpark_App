import { View } from 'react-native';
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = (current / total) * 100;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(`${progress}%`, {
        duration: 500,
      }),
    };
  });

  return (
    <View className="w-full h-2 bg-gray-200">
      <Animated.View
        className="h-full bg-terracotta"
        style={[animatedStyle, { backgroundColor: '#FACC15' }]}
      />
    </View>
  );
}
