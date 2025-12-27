import { View, Text, Pressable } from 'react-native';
import { Module } from '../data/modules';
import { useRouter } from 'expo-router';

interface ModuleCardProps {
  module: Module;
}

export default function ModuleCard({ module }: ModuleCardProps) {
  const router = useRouter();

  return (
    <Pressable
      onPress={() => router.push(`/esl/modules/${module.id}` as any)}
      className="bg-white rounded-3xl p-2 mb-5 active:scale-[0.97]"
      style={{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 8,
        elevation: 2,
      }}
    >
      <View className="flex items-center">
        <Text className="text-6xl p-7 mb-1">{module.icon}</Text>
        <Text className="text-2xl font-semibold text-charcoal mb-2 text-center">
          {module.title}
        </Text>
        <Text className="text-base text-gray-medium text-center mb-4">
          {module.description}
        </Text>
        <View className="flex-row items-center" style={{ gap: 16 }}>
          <Text className="text-sm font-mono text-gray-medium">
            {module.questions.length} questions
          </Text>
          <Text className="text-sm font-mono text-gray-medium">•</Text>
          <Text className="text-sm font-mono text-gray-medium">
            {module.estimatedTime}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
