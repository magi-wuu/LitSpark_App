import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Clock, MessageCircle, Mic, Award, History, Trophy, Target } from "lucide-react-native";
import { useProgress } from "../contexts/ProgressContext";
import { useUserProfile } from "../contexts/UserProfileContext";

export default function HomePage() {
  const router = useRouter();
  const { progress, getLevelProgress } = useProgress();
  const { profile } = useUserProfile();

  // Get level progress data
  const levelProgress = getLevelProgress();

  // Dummy data for topics
  const topics = [
    { id: 1, title: "Greetings", icon: "👋", progress: 75 },
    { id: 2, title: "Food & Dining", icon: "🍽️", progress: 50 },
    { id: 3, title: "Travel", icon: "✈️", progress: 30 },
    { id: 4, title: "Shopping", icon: "🛍️", progress: 10 },
    { id: 5, title: "Emergencies", icon: "🚨", progress: 5 },
  ];

  // Dynamic achievements based on actual progress
  const achievements = [
    { 
      id: 1, 
      title: "First Steps", 
      icon: "🎯", 
      unlocked: progress.achievements.includes('level_1') || progress.totalMinutesSpoken > 0
    },
    { 
      id: 2, 
      title: "10 Minutes", 
      icon: "🔊", 
      unlocked: progress.achievements.includes('10_minutes')
    },
    { 
      id: 3, 
      title: "1 Hour Spoken", 
      icon: "⏰", 
      unlocked: progress.achievements.includes('1_hour')
    },
    { 
      id: 4, 
      title: "Level 3", 
      icon: "🏆", 
      unlocked: progress.achievements.includes('level_3')
    },
    { 
      id: 5, 
      title: "5 Hours", 
      icon: "🔥", 
      unlocked: progress.achievements.includes('5_hours')
    },
  ];

  // Dummy data for history
  const history = [
    { id: 1, title: "Practiced Greetings", date: "2 hours ago", score: 85 },
    { id: 2, title: "Restaurant Conversation", date: "Yesterday", score: 92 },
    { id: 3, title: "Airport Dialog", date: "2 days ago", score: 78 },
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
              source={profile.profilePicture}
              className="h-full w-full"
            />
          </TouchableOpacity>
        </View>

        {/* Enhanced Progress Card with Cat Mascot */}
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
                {Math.max(0, levelProgress.minutesForNext)} minutes to go
              </Text>
            </View>
            <View className="w-24 h-24 justify-center items-center">
              <Image
                source="https://api.dicebear.com/7.x/bottts/svg?seed=cat&backgroundColor=ffb300"
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
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-xl font-bold text-[#0a1e3d]">Topics</Text>
            <TouchableOpacity>
              <Text className="text-[#4dabf7]">See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {topics.map((topic) => (
              <TouchableOpacity
                key={topic.id}
                className="bg-[#f0f8ff] mr-3 p-4 rounded-2xl w-32 h-32 justify-between"
              >
                <Text className="text-3xl">{topic.icon}</Text>
                <View>
                  <Text className="font-bold text-[#0a1e3d]">
                    {topic.title}
                  </Text>
                  <View className="bg-[#d0e8ff] h-2 rounded-full w-full mt-2">
                    <View
                      className="bg-[#4dabf7] h-2 rounded-full"
                      style={{ width: `${topic.progress}%` }}
                    />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Enhanced Achievements Section */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-3">
            <View className="flex-row items-center">
              <Award size={20} color="#0a1e3d" />
              <Text className="text-xl font-bold text-[#0a1e3d] ml-2">
                Achievements
              </Text>
            </View>
            <TouchableOpacity>
              <Text className="text-[#4dabf7]">See All</Text>
            </TouchableOpacity>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {achievements.map((achievement) => (
              <View
                key={achievement.id}
                className={`mr-3 p-4 rounded-2xl w-28 h-28 justify-between items-center ${
                  achievement.unlocked ? "bg-[#ffd700]" : "bg-[#f0f0f0]"
                }`}
              >
                <Text className="text-3xl">{achievement.icon}</Text>
                <Text
                  className={`text-center font-bold text-xs ${
                    achievement.unlocked ? "text-[#0a1e3d]" : "text-gray-500"
                  }`}
                  numberOfLines={2}
                >
                  {achievement.title}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* History Section */}
        <View className="mb-6">
          <View className="flex-row justify-between items-center mb-3">
            <View className="flex-row items-center">
              <History size={20} color="#0a1e3d" />
              <Text className="text-xl font-bold text-[#0a1e3d] ml-2">
                Recent Activity
              </Text>
            </View>
          </View>

          {history.map((item) => (
            <View
              key={item.id}
              className="bg-[#f0f8ff] mb-3 p-4 rounded-2xl flex-row justify-between items-center"
            >
              <View>
                <Text className="font-bold text-[#0a1e3d]">{item.title}</Text>
                <Text className="text-gray-500">{item.date}</Text>
              </View>
              <View className="bg-[#4dabf7] h-10 w-10 rounded-full items-center justify-center">
                <Text className="text-white font-bold">{item.score}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}