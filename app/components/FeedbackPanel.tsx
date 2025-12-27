import { View, Text, Pressable, Modal } from 'react-native';
import { BlurView } from 'expo-blur';
import Animated, { FadeInDown, FadeOut } from 'react-native-reanimated';

interface FeedbackPanelProps {
  visible: boolean;
  correct: boolean;
  explanation: string;
  onContinue: () => void;
}

export default function FeedbackPanel({
  visible,
  correct,
  explanation,
  onContinue,
}: FeedbackPanelProps) {
  if (!visible) return null;

  return (
    <Modal transparent visible={visible} animationType="none">
      <View className="flex-1 justify-end">
        <Pressable className="flex-1" onPress={onContinue} />
        <Animated.View
          entering={FadeInDown.duration(400)}
          exiting={FadeOut.duration(300)}
        >
          <BlurView intensity={90} tint="light" className="px-5 py-8">
            <View
              className="bg-white rounded-3xl p-6"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                shadowColor: '#000',
                shadowOffset: { width: 0, height: -4 },
                shadowOpacity: 0.1,
                shadowRadius: 12,
                elevation: 5,
              }}
            >
              <Text 
                className={`text-3xl font-bold mb-4 ${
                  correct ? 'text-sage' : 'text-rose'
                }`}
                style={{ color: correct ? 'rgba(91, 231, 119, 0.95)' : 'rgba(237, 90, 90, 0.95)' }}
              >
                {correct ? 'Correct!' : 'Almost!'}
              </Text>
              <Text className="text-base text-charcoal leading-6 mb-6">
                {explanation}
              </Text>
              <Pressable
                onPress={onContinue}
                className="bg-primary rounded-full py-4 px-8 active:scale-[0.97]"
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
            </View>
          </BlurView>
        </Animated.View>
      </View>
    </Modal>
  );
}
