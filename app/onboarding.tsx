import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowRight } from "lucide-react-native";

export default function OnboardingScreen() {
  const router = useRouter();

  const handleStartLearning = () => {
    router.push("/");
  };

  return (
    <SafeAreaView className="flex-1 bg-[#0a1e3d]">
      <StatusBar style="light" />
      <View className="flex-1 items-center justify-between py-8 px-6">
        {/* Cat mascot image */}
        <View className="flex-1 justify-center items-center w-full">
          <Image
            source={{
              uri: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=ffde59",
            }}
            className="w-72 h-72"
            style={{ width: 280, height: 280 }}
            resizeMode="contain"
          />
        </View>

        {/* Title and button section */}
        <View className="w-full items-center space-y-8 mb-10">
          <Text className="text-4xl font-bold text-white text-center">
            Ready to learn?
          </Text>

          <TouchableOpacity
            onPress={handleStartLearning}
            className="bg-[#ffde59] py-4 px-8 rounded-full flex-row items-center justify-center w-64"
            activeOpacity={0.8}
          >
            <Text className="text-[#0a1e3d] text-xl font-bold mr-2">
              Start Learning
            </Text>
            <ArrowRight size={24} color="#0a1e3d" />
          </TouchableOpacity>

          <Text className="text-[#7fb3ff] text-center text-base">
            Learn languages with our friendly cat companion!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
