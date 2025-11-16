import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { ArrowLeft, Send, Award, MessageCircle } from "lucide-react-native";

// Hide the native/stack header
export const screenOptions = {
  headerShown: false,
};

const topics = [
  { id: "1", name: "Greetings", icon: "👋" },
  { id: "2", name: "Food & Dining", icon: "🍽️" },
  { id: "3", name: "Travel", icon: "✈️" },
  { id: "4", name: "Shopping", icon: "🛍️" },
  { id: "5", name: "Hobbies", icon: "🎨" },
];

const defaultMessages = [
  { id: "1", text: "Hello! How can I help you practice today?", sender: "ai" },
  {
    id: "2",
    text: "I want to practice ordering food at a restaurant",
    sender: "user",
  },
  {
    id: "3",
    text: "Great! Let's role-play. I'll be the server. Welcome to our restaurant! Would you like a table for one?",
    sender: "ai",
  },
];

export default function ChatScreen() {
  const router = useRouter();
  const [selectedTopic, setSelectedTopic] = useState(topics[0]);
  const [messages, setMessages] = useState(defaultMessages);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.trim() === "") return;

    // Add user message
    const newUserMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: "user",
    };

    setMessages([...messages, newUserMessage]);
    setInputText("");

    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse = {
        id: (Date.now() + 1).toString(),
        text: "That's good! Your sentence structure is improving. Try using more descriptive adjectives next time.",
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="dark" />

      {/* Header */}
      <View className="flex-row items-center justify-between px-4 py-3 bg-[#f0f8ff] border-b border-[#e0e0e0]">
        <TouchableOpacity onPress={() => router.back()} className="p-2">
          <ArrowLeft size={24} color="#000080" />
        </TouchableOpacity>
        <View className="flex-row items-center">
          <Image
            source={{
              uri: "https://api.dicebear.com/7.x/avataaars/svg?seed=kitty",
            }}
            style={{ width: 32, height: 32 }}
            className="rounded-full bg-[#ffeb3b]"
          />
          <Text className="ml-2 text-lg font-bold text-[#000080]">
            Chat Practice
          </Text>
        </View>
        <TouchableOpacity className="p-2">
          <Award size={24} color="#000080" />
        </TouchableOpacity>
      </View>

      {/* Topic Selection */}
      <View className="px-4 py-3 bg-[#f0f8ff]">
        <Text className="text-sm font-medium text-[#000080] mb-2">
          Select a topic:
        </Text>
        <FlatList
          data={topics}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedTopic(item)}
              className={`mr-3 px-4 py-2 rounded-full flex-row items-center ${selectedTopic.id === item.id ? "bg-[#000080]" : "bg-[#add8e6]"}`}
            >
              <Text className="mr-1">{item.icon}</Text>
              <Text
                className={`font-medium ${selectedTopic.id === item.id ? "text-white" : "text-[#000080]"}`}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          className="pb-2"
        />
      </View>

      {/* Chat Messages */}
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        className="flex-1 px-4 pt-2"
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <View
            className={`mb-4 max-w-[80%] ${item.sender === "user" ? "self-end ml-auto" : "self-start"}`}
          >
            <View
              className={`rounded-2xl p-3 ${item.sender === "user" ? "bg-[#000080]" : "bg-[#add8e6]"}`}
            >
              <Text
                className={`${item.sender === "user" ? "text-white" : "text-[#000080]"}`}
              >
                {item.text}
              </Text>
            </View>
            {item.sender === "ai" && (
              <View className="mt-1 flex-row items-center">
                <Image
                  source={{
                    uri: "https://api.dicebear.com/7.x/avataaars/svg?seed=kitty",
                  }}
                  style={{ width: 16, height: 16 }}
                  className="rounded-full bg-[#ffeb3b]"
                />
                <Text className="text-xs text-gray-500 ml-1">Kitty</Text>
              </View>
            )}
          </View>
        )}
      />

      {/* Feedback Section */}
      <View className="px-4 py-3 bg-[#fffde7] border-t border-[#ffeb3b]">
        <View className="flex-row items-center">
          <MessageCircle size={16} color="#000080" />
          <Text className="ml-2 text-sm font-medium text-[#000080]">
            Feedback
          </Text>
        </View>
        <Text className="mt-1 text-sm text-gray-700">
          Good job! Try using more complex sentence structures in your next
          response.
        </Text>
      </View>

      {/* Input Area */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="border-t border-[#e0e0e0] bg-white"
      >
        <View className="flex-row items-center px-4 py-2">
          <TextInput
            value={inputText}
            onChangeText={setInputText}
            placeholder="Type your message..."
            className="flex-1 border border-[#add8e6] rounded-full px-4 py-2 mr-2 bg-[#f0f8ff]"
            multiline
          />
          <TouchableOpacity
            onPress={handleSend}
            className="bg-[#000080] p-3 rounded-full"
            disabled={inputText.trim() === ""}
          >
            <Send size={20} color="white" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
