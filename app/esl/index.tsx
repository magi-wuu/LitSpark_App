import { View, Text, ScrollView, SafeAreaView, Pressable, TouchableOpacity } from "react-native";
import { modules } from "../data/modules";
import ModuleCard from "../components/ModuleCard";
import { ArrowLeft } from "lucide-react-native";
import { useRouter } from "expo-router";

export default function ESLHomeScreen() {
  const router = useRouter();

  const handleBackPress = () => {
    router.push("/");
  };
  return (
    <SafeAreaView className="flex-1 bg-cream">
      <View className="px-5 pt-6 pb-2 flex-row items-center">
        <TouchableOpacity
          onPress={handleBackPress}
          style={{
            padding: 8,
            borderRadius: 9999,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
          }}
        >
          <ArrowLeft size={24} color="#000080" />
        </TouchableOpacity>
        </View>
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 20 }}
      >
        <View className="mb-8">
          <Text className="text-4xl font-bold text-primary mb-3">
            ESL Practice
          </Text>
          <Text className="text-base text-gray-medium">
            Master real-world English through situational exercises
          </Text>
        </View>

        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

