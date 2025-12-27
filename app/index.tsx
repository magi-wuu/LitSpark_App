import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Clock, MessageCircle, Mic, Award, History, Trophy, Target } from "lucide-react-native";
import { useProgress } from "../contexts/ProgressContext";
import { useUserProfile } from "../contexts/UserProfileContext";
import pfp from "../assets/images/LSLOGO.png";

export default function HomePage() {
  const router = useRouter();
  const { progress, getLevelProgress } = useProgress();
  const { profile } = useUserProfile();

  // Get level progress data
  const levelProgress = getLevelProgress();

  // practice topics? module names
  const topics: Array<{ id: number; title: string; icon: string; progress?: number; route: any}> = [
    { id: 1, title: "Reading Practice", icon: "📚", route: "/readingMod"},
    { id: 2, title: "Conversation Basics", icon: "🗣️", route: "/esl"},
  ];
  // Dynamic achievements based on actual progress
  const achievements = [
    {
      id: 1,
      title: "First Steps",
      description: "Speak for the first time",
      icon: "🎯",
      unlocked:
        progress.achievements.includes("level_1") ||
        progress.totalMinutesSpoken > 0,
    },
    {
      id: 2,
      title: "10 Minutes",
      description: "Speak for 10 total minutes",
      icon: "🔊",
      unlocked: progress.achievements.includes("10_minutes"),
    },
    {
      id: 3,
      title: "1 Hour Spoken",
      description: "Reach 60 minutes",
      icon: "⏰",
      unlocked: progress.achievements.includes("1_hour"),
    },
    {
      id: 4,
      title: "Level 3",
      description: "Reach level 3",
      icon: "🏆",
      unlocked: progress.achievements.includes("level_3"),
    },
    {
      id: 5,
      title: "5 Hours",
      description: "Speak for 5 hours total",
      icon: "🔥",
      unlocked: progress.achievements.includes("5_hours"),
    },
    {
      id: 6,
      title: "100 XP",
      description: "Earn 100 XP",
      icon: "⚡",
      unlocked: progress.achievements.includes("xp_100"),
    },
    {
      id: 7,
      title: "500 XP",
      description: "Earn 500 XP",
      icon: "🚀",
      unlocked: progress.achievements.includes("xp_500"),
    },
    {
      id: 8,
      title: "XP Master",
      description: "Earn 800 XP",
      icon: "👑",
      unlocked: progress.achievements.includes("xp_800"),
    },
    {
      id: 9,
      title: "Aura Farmer",
      description: "Earn 1000 XP",
      icon: "🌟",
      unlocked: progress.achievements.includes("xp_1000"),
    },
  ];

  const formatTime = (minutes: number) => {
    if (minutes < 60) {
      return `${Math.floor(minutes)}m`;
    }
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = Math.floor(minutes % 60);
    return `${hours}h ${remainingMinutes}m`;
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4 pt-6">
        {/* Header with user info */}
        <View className="flex-row justify-between items-center mb-6">
          <View>
            <Text className="text-2xl font-bold text-[#0a1e3d]">
              Hello, {profile.name}!
            </Text>
            <Text className="text-sm text-gray-600">
              Level {levelProgress.currentLevel} • {progress.sessionsCompleted} sessions
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push('/profile')}
            className="h-10 w-10 rounded-full bg-[#ffd700] overflow-hidden"
          >
            <Image
              source={pfp}
              className="h-full w-full"
            />
          </TouchableOpacity>
        </View>

        {/* Enhanced Progress Card*/}
        <View className="bg-[#0a1e3d] rounded-3xl p-4 mb-6">
          <View className="flex-row">
            <View className="flex-1 justify-center">
              <Text className="text-white text-lg font-bold mb-2">
                Level {levelProgress.currentLevel} Progress
              </Text>
              <View className="flex-row items-center mb-2">
                <Clock size={18} color="#ffd700" />
                <Text className="text-white ml-2">
                  {formatTime(progress.totalMinutesSpoken)} spoken
                </Text>
              </View>
              <View className="flex-row items-center mb-2">
                <Trophy size={18} color="#4dabf7" />
                <Text className="text-white ml-2">
                  Avg Score: {progress.averageScore}%
                </Text>
              </View>
              <View className="bg-[#1e3a5f] h-3 rounded-full w-full mt-2">
                <View
                  className="bg-[#ffd700] h-3 rounded-full"
                  style={{ width: `${levelProgress.progress}%` }}
                />
              </View>
              <Text className="text-[#4dabf7] mt-2">
                {levelProgress.progress}% to Level {levelProgress.currentLevel + 1}
              </Text>
              <Text className="text-[#4dabf7] text-xs">
                {Math.round(Math.max(0, levelProgress.minutesForNext))} minutes to go
              </Text>
            </View>
            <View className="w-24 h-24 justify-center items-center">
              <Image
                source={pfp}
                className="h-full w-full"
              />
            </View>
          </View>
        </View>

        {/* Stats Cards Row */}
        <View className="flex-row justify-between mb-6">
          <View className="bg-[#f0f8ff] rounded-2xl p-4 flex-1 mr-2 items-center">
            <Target size={24} color="#4dabf7" />
            <Text className="text-2xl font-bold text-[#0a1e3d] mt-1">
              {progress.experiencePoints}
            </Text>
            <Text className="text-sm text-gray-600">XP Earned</Text>
          </View>
          <View className="bg-[#f0f8ff] rounded-2xl p-4 flex-1 ml-2 items-center">
            <Award size={24} color="#ffd700" />
            <Text className="text-2xl font-bold text-[#0a1e3d] mt-1">
              {progress.achievements.length}
            </Text>
            <Text className="text-sm text-gray-600">Achievements</Text>
          </View>
        </View>

        {/* Navigation Buttons */}
        <View className="flex-row justify-between mb-6">
          <TouchableOpacity
            className="bg-[#4dabf7] rounded-2xl py-4 px-6 flex-1 mr-2 flex-row items-center justify-center"
            onPress={() => router.push("/chat")}
          >
            <MessageCircle size={24} color="white" />
            <Text className="text-white font-bold text-lg ml-2">Chat</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-[#ffd700] rounded-2xl py-4 px-6 flex-1 ml-2 flex-row items-center justify-center"
            onPress={() => router.push("/conversation")}
          >
            <Mic size={24} color="#0a1e3d" />
            <Text className="text-[#0a1e3d] font-bold text-lg ml-2">Talk</Text>
          </TouchableOpacity>
        </View>

        {/* Topics Section */}
        <View className="mb-6 ml-3">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-xl font-bold text-[#0a1e3d]">Practice</Text>
          </View>
          {topics.map((topic) => (
            <TouchableOpacity
              key={topic.id}
              className="bg-[#f0f8ff] mr-3 mb-4 p-4 rounded-2xl w-35 h-32 justify-between"
              onPress={() => {
                router.push(topic.route);
              }}
            >
              <Text className="text-4xl">{topic.icon}</Text>
              <View>
                <Text className="font-bold text-[#0a1e3d] text-lg">
                  {topic.title}
                </Text>
              </View>
            </TouchableOpacity> 
          ))}
        </View>

        {/* Enhanced Achievements Section */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-3">
            <View className="flex-row items-center">
              <Award size={20} color="#0a1e3d" />
              <Text className="text-xl font-bold text-[#0a1e3d] ml-2">
                Your Achievements
              </Text>
            </View>
          </View>

          <FlatList
            data={achievements}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}               // 👈 grid columns
            columnWrapperStyle={{
              justifyContent: "space-between",
              marginBottom: 12,
            }}
            scrollEnabled={false}        // 👈 prevents nested scrolling issues
            renderItem={({ item }) => (
              <View
                className={`p-4 rounded-2xl w-[30%] aspect-square items-center ${
                  item.unlocked ? "bg-[#ffd700]" : "bg-[#f0f0f0]"
                }`}
              >
                <Text className="text-3xl mb-1">{item.icon}</Text>

                <Text
                  className={`text-center font-bold text-xs ${
                    item.unlocked ? "text-[#0a1e3d]" : "text-gray-500"
                  }`}
                  numberOfLines={1}
                >
                  {item.title}
                </Text>

                <Text
                  className={`text-center text-[10px] mt-1 ${
                    item.unlocked ? "text-[#0a1e3d]/70" : "text-gray-400"
                  }`}
                  numberOfLines={2}
                >
                  {item.description}
                </Text>
              </View>

            )}
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}