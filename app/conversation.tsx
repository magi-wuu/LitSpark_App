import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useProgress } from "../contexts/ProgressContext";
import { Mic, Play, ArrowLeft, Sparkles, Square, X } from "lucide-react-native";
import * as Haptics from "expo-haptics";
import { Audio } from "expo-av";
import * as Speech from "expo-speech";

interface ConversationMessage {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface FeedbackResponse {
  feedback: string;
  response: string;
  improvements?: string[];
}

export default function ConversationScreen() {
  const router = useRouter();
  const { addSpeakingTime, updateScore, getLevelProgress } = useProgress();
  
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hasResponse, setHasResponse] = useState(false);
  const [currentTranscription, setCurrentTranscription] = useState("");
  const [lastFeedback, setLastFeedback] = useState<FeedbackResponse | null>(null);
  const [recordingStartTime, setRecordingStartTime] = useState<Date | null>(null);
  const [sessionSpeakingTime, setSessionSpeakingTime] = useState(0);
  
  const recording = useRef<Audio.Recording | null>(null);
  const sound = useRef<Audio.Sound | null>(null);

  // Simulated conversation data
  const [conversation, setConversation] = useState<ConversationMessage[]>([
    { 
      id: 1, 
      text: "Hello! How are you today?", 
      isUser: false, 
      timestamp: new Date() 
    },
  ]);

  const handleBackPress = () => {
    // Save session progress before leaving
    if (sessionSpeakingTime > 0) {
      addSpeakingTime(sessionSpeakingTime / 60); // Convert seconds to minutes
    }
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    router.back();
  };

  const startRecording = async () => {
    try {
      console.log('Requesting permissions..');
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      console.log('Starting recording..');
      const { recording: newRecording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      recording.current = newRecording;
      setIsRecording(true);
      setRecordingStartTime(new Date());
      console.log('Recording started');
    } catch (err) {
      console.error('Failed to start recording', err);
      Alert.alert('Error', 'Failed to start recording. Please check microphone permissions.');
    }
  };

  const stopRecording = async () => {
    console.log('Stopping recording..');
    if (!recording.current || !recordingStartTime) return;

    // Calculate speaking time for this recording
    const recordingEndTime = new Date();
    const speakingDuration = (recordingEndTime.getTime() - recordingStartTime.getTime()) / 1000; // in seconds
    setSessionSpeakingTime(prev => prev + speakingDuration);

    setIsRecording(false);
    setIsTranscribing(true);
    setRecordingStartTime(null);
    
    try {
      await recording.current.stopAndUnloadAsync();
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
      });
      
      const uri = recording.current.getURI();
      console.log('Recording stopped and stored at', uri);
      console.log(`Speaking duration: ${speakingDuration.toFixed(1)} seconds`);
      
      // Simulate transcription process
      await transcribeAudio(uri);
      
    } catch (error) {
      console.error('Error stopping recording:', error);
      setIsTranscribing(false);
    }
    
    recording.current = null;
  };

  const transcribeAudio = async (audioUri: string | null) => {
    try {
      // Simulate API call to speech-to-text service
      // In a real app, you would send the audio file to a service like:
      // - Google Speech-to-Text
      // - Azure Speech Services
      // - AWS Transcribe
      // - OpenAI Whisper API
      
      console.log('Transcribing audio...');
      
      // Simulate transcription delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock transcription result
      const mockTranscriptions = [
        "I'm doing well, thank you for asking!",
        "I love learning new languages.",
        "Can you help me practice pronunciation?",
        "What's the weather like today?",
        "I enjoy reading books in my free time."
      ];
      
      const transcribedText = mockTranscriptions[Math.floor(Math.random() * mockTranscriptions.length)];
      setCurrentTranscription(transcribedText);
      
      // Add user message to conversation
      const userMessage: ConversationMessage = {
        id: conversation.length + 1,
        text: transcribedText,
        isUser: true,
        timestamp: new Date()
      };
      
      setConversation(prev => [...prev, userMessage]);
      setIsTranscribing(false);
      
      // Send to AI for feedback and response
      await generateAIResponse(transcribedText);
      
    } catch (error) {
      console.error('Transcription error:', error);
      setIsTranscribing(false);
      Alert.alert('Error', 'Failed to transcribe audio. Please try again.');
    }
  };

  const generateAIResponse = async (userText: string) => {
    try {
      console.log('Generating AI response for:', userText);
      
      // Simulate API call to ChatGPT or similar service
      // In a real app, you would make an API call like:
      /*
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [
            {
              role: 'system',
              content: 'You are a language learning assistant. Provide feedback on pronunciation and grammar, then respond naturally to continue the conversation.'
            },
            {
              role: 'user',
              content: userText
            }
          ]
        })
      });
      */
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock AI response with scoring
      const mockResponses: (FeedbackResponse & { score: number })[] = [
        {
          feedback: "Great job! Your pronunciation is clear and natural.",
          response: "That's wonderful to hear! What would you like to talk about next?",
          improvements: ["Try to emphasize the 'th' sound more clearly"],
          score: 85
        },
        {
          feedback: "Good effort! Your grammar is improving.",
          response: "I'm glad you're enjoying language learning. What's your favorite book genre?",
          improvements: ["Work on verb tenses", "Practice linking words smoothly"],
          score: 78
        },
        {
          feedback: "Excellent pronunciation! Keep up the good work.",
          response: "Of course! Let's practice some common phrases. Repeat after me.",
          improvements: [],
          score: 92
        }
      ];
      
      const aiResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)];
      setLastFeedback(aiResponse);
      
      // Update user score
      updateScore(aiResponse.score);
      
      // Add AI response to conversation
      const aiMessage: ConversationMessage = {
        id: conversation.length + 2,
        text: aiResponse.response,
        isUser: false,
        timestamp: new Date()
      };
      
      setConversation(prev => [...prev, aiMessage]);
      setHasResponse(true);
      
    } catch (error) {
      console.error('AI response error:', error);
      Alert.alert('Error', 'Failed to get AI response. Please try again.');
    }
  };

  const toggleRecording = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    
    if (isRecording) {
      await stopRecording();
    } else {
      await startRecording();
    }
  };

  const playResponse = async () => {
    if (isSpeaking) {
      Speech.stop();
      setIsSpeaking(false);
      return;
    }

    if (!lastFeedback) return;
    
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setIsSpeaking(true);
    
    try {
      // Configure speech options
      const speechOptions = {
        language: 'en-US',
        pitch: 1.0,
        rate: 0.8,
        voice: undefined, // Use default voice
        onStart: () => {
          console.log('Speech started');
        },
        onDone: () => {
          console.log('Speech finished');
          setIsSpeaking(false);
        },
        onStopped: () => {
          console.log('Speech stopped');
          setIsSpeaking(false);
        },
        onError: (error: any) => {
          console.error('Speech error:', error);
          setIsSpeaking(false);
        }
      };
      
      // Speak the AI response
      await Speech.speak(lastFeedback.response, speechOptions);
      
    } catch (error) {
      console.error('Text-to-speech error:', error);
      setIsSpeaking(false);
      Alert.alert('Error', 'Failed to play response. Please try again.');
    }
  };

  const getRecordingButtonText = () => {
    if (isTranscribing) return "Transcribing...";
    if (isRecording) return "Recording...";
    return "Tap to speak";
  };

  // Get current level progress for display
  const levelProgress = getLevelProgress();

  return (
    <SafeAreaView className="flex-1 bg-[#f0f8ff]">
      <StatusBar style="dark" />

      {/* Header with Progress */}
      <View className="flex-row items-center justify-between px-4 py-2">
        <TouchableOpacity
          onPress={handleBackPress}
          className="p-2 rounded-full bg-white shadow-sm"
        >
          <ArrowLeft size={24} color="#000080" />
        </TouchableOpacity>
        <View className="flex-1 mx-4">
          <Text className="text-lg font-bold text-[#000080] text-center">
            Practice Speaking
          </Text>
          <View className="flex-row items-center justify-center mt-1">
            <Text className="text-sm text-gray-600 mr-2">
              Level {levelProgress.currentLevel}
            </Text>
            <View className="flex-1 bg-gray-200 h-2 rounded-full max-w-[100px]">
              <View 
                className="bg-[#FFD700] h-2 rounded-full" 
                style={{ width: `${levelProgress.progress}%` }}
              />
            </View>
            <Text className="text-xs text-gray-500 ml-2">
              {levelProgress.progress}%
            </Text>
          </View>
        </View>
        <View className="w-10" />
      </View>

      {/* Session Progress Indicator */}
      {sessionSpeakingTime > 0 && (
        <View className="mx-4 mb-2 p-2 bg-green-100 rounded-xl border border-green-200">
          <Text className="text-sm text-green-800 text-center">
            🎯 Session: {Math.floor(sessionSpeakingTime / 60)}m {Math.floor(sessionSpeakingTime % 60)}s spoken
          </Text>
        </View>
      )}

      {/* AI Avatar/Orb */}
      <View className="items-center justify-center mt-4">
        <View className={`w-32 h-32 rounded-full bg-[#000080] items-center justify-center shadow-lg ${isSpeaking ? 'animate-pulse' : ''}`}>
          <Image
            source="https://api.dicebear.com/7.x/avataaars/svg?seed=kitty"
            style={{ width: 80, height: 80 }}
            contentFit="contain"
          />
        </View>
        <Text className="mt-2 text-sm text-gray-600">
          {isSpeaking ? "Speaking..." : "Your language buddy"}
        </Text>
      </View>

      {/* Current Transcription Display */}
      {(isTranscribing || currentTranscription) && (
        <View className="mx-4 mt-4 p-3 bg-yellow-100 rounded-2xl border border-yellow-200">
          <Text className="text-sm font-medium text-yellow-800 mb-1">
            {isTranscribing ? "Transcribing..." : "You said:"}
          </Text>
          <Text className="text-gray-700">
            {isTranscribing ? "Processing your speech..." : currentTranscription}
          </Text>
        </View>
      )}

      {/* Conversation Area */}
      <ScrollView
        className="flex-1 px-4 py-4 mt-2 bg-white mx-4 rounded-2xl shadow-sm"
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {conversation.map((message) => (
          <View
            key={message.id}
            className={`mb-4 max-w-[80%] ${message.isUser ? "self-end ml-auto" : "self-start"}`}
          >
            <View
              className={`p-3 rounded-2xl ${message.isUser ? "bg-[#FFD700]" : "bg-[#ADD8E6]"}`}
            >
              <Text className="text-[#000080]">{message.text}</Text>
            </View>
            <Text className="text-xs text-gray-500 mt-1 px-1">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Recording Button */}
      <View className="items-center justify-center my-4">
        <Pressable
          onPress={toggleRecording}
          disabled={isTranscribing}
          className={`w-16 h-16 rounded-full items-center justify-center shadow-lg ${
            isRecording 
              ? "bg-red-500" 
              : isTranscribing 
                ? "bg-gray-400" 
                : "bg-[#000080]"
          }`}
        >
          {isRecording ? (
            <Square size={32} color="white" />
          ) : (
            <Mic size={32} color="white" />
          )}
        </Pressable>
        <Text className="mt-2 text-sm text-gray-600">
          {getRecordingButtonText()}
        </Text>
      </View>

      {/* Feedback Area */}
      {hasResponse && lastFeedback && (
        <View className="bg-[#f0f8ff] mx-4 p-4 rounded-2xl mb-4 border border-[#ADD8E6]">
          <View className="flex-row items-center justify-between mb-2">
            <View className="flex-row items-center">
              <Sparkles size={16} color="#FFD700" />
              <Text className="ml-2 font-bold text-[#000080]">Feedback</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setHasResponse(false);
                setLastFeedback(null);
                if (isSpeaking) {
                  Speech.stop();
                  setIsSpeaking(false);
                }
              }}
              className="p-1 rounded-full bg-gray-200"
            >
              <X size={16} color="#666" />
            </TouchableOpacity>
          </View>
          <Text className="text-gray-700 mb-2">
            {lastFeedback.feedback}
          </Text>
          
          {lastFeedback.improvements && lastFeedback.improvements.length > 0 && (
            <View className="mb-3">
              <Text className="text-sm font-medium text-[#000080] mb-1">
                Improvement tips:
              </Text>
              {lastFeedback.improvements.map((tip, index) => (
                <Text key={index} className="text-sm text-gray-600 ml-2">
                  • {tip}
                </Text>
              ))}
            </View>
          )}

          {/* Play Response Button */}
          <TouchableOpacity
            onPress={playResponse}
            className={`flex-row items-center mt-3 self-start px-4 py-2 rounded-full ${
              isSpeaking ? "bg-red-500" : "bg-[#000080]"
            }`}
          >
            <Play size={16} color="white" />
            <Text className="ml-2 text-white">
              {isSpeaking ? "Stop" : "Play Response"}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}