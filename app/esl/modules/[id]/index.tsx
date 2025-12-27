import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { modules } from '../../../data/modules';
import { ArrowLeft } from 'lucide-react-native';

export default function ModuleIntroScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const module = modules.find((m) => m.id === id);

  if (!module) {
    return (
      <SafeAreaView className="flex-1 bg-cream">
        <View className="flex-1 items-center justify-center">
          <Text className="text-xl text-charcoal">Module not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-cream">
      <View className="flex-1 px-5 py-6">
        {/* Header */}
        <View className="mb-8">
          <Pressable
            onPress={() => router.push('/esl')}
            className="w-10 h-10 items-center justify-center active:scale-90"
          >
            <ArrowLeft size={24} color="#1E293B" />
          </Pressable>
        </View>

        {/* Module Card */}
        <View className="flex-1 justify-center">
          <View
            className="bg-white rounded-3xl p-8 items-center"
            style={{
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.03,
              shadowRadius: 12,
              elevation: 3,
            }}
          >
            <Text className="text-8xl p-7 mb-4">{module.icon}</Text>
            <Text className="text-3xl font-bold text-charcoal mb-3 text-center">
              {module.title}
            </Text>
            <Text className="text-base text-gray-medium text-center mb-6 leading-6">
              {module.description}
            </Text>
            <View className="flex-row items-center mb-8" style={{ gap: 16 }}>
              <Text className="text-sm font-mono text-gray-medium">
                {module.questions.length} questions
              </Text>
              <Text className="text-sm font-mono text-gray-medium">•</Text>
              <Text className="text-sm font-mono text-gray-medium">
                {module.estimatedTime}
              </Text>
            </View>
            <Pressable
              onPress={() => router.push(`/esl/modules/${module.id}/practice`)}
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
                Start Practice
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
