import { View, Text, Pressable } from 'react-native';
import { Story } from '../types/story';
import { Clock, BookOpen } from 'lucide-react-native';
import { router } from '@/.expo/types/router';

interface StoryCardProps {
  story: Story;
  onPress: () => void;
}

export function StoryCard({ story, onPress }: StoryCardProps) {
  const difficultyColors = {
    Beginner: 'bg-[#B8E6D5]',
    Intermediate: 'bg-[#FFF4A3]',
    Advanced: 'bg-[#FFB4B4]'
  };

  return (
    <Pressable
      onPress={onPress}
      className="bg-white rounded-2xl p-6 mb-4 mx-4 active:scale-[0.98]"
      style={{
        shadowColor: '#A8D8EA',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
      }}
    >
      <View className="flex-row justify-between items-start mb-3">
        <View className="flex-1 mr-3">
          <Text className="text-[#3A3A3A] text-xl font-bold mb-2" style={{ fontFamily: 'System' }}>
            {story.title}
          </Text>
        </View>
        <View className={`${difficultyColors[story.difficulty]} px-3 py-1 rounded-full`}>
          <Text className="text-[#3A3A3A] text-xs font-semibold uppercase tracking-wider">
            {story.difficulty}
          </Text>
        </View>
      </View>

      <View className="flex-row items-center mb-4">
        <Clock size={16} color="#7A7A7A" />
        <Text className="text-[#7A7A7A] text-sm ml-2">
          {story.readingTime} min read
        </Text>
      </View>

      {story.progress > 0 && (
        <View className="mt-2">
          <View className="flex-row justify-between items-center mb-2">
            <Text className="text-[#7A7A7A] text-xs">Progress</Text>
            <Text className="text-[#A8D8EA] text-xs font-semibold">{story.progress}%</Text>
          </View>
          <View className="h-2 bg-[#FAF8F3] rounded-full overflow-hidden">
            <View 
              className="h-full bg-[#A8D8EA] rounded-full"
              style={{ width: `${story.progress}%` }}
            />
          </View>
        </View>
      )}

      {story.progress === 0 && (
        <View className="flex-row items-center">
          <BookOpen size={16} color="#A8D8EA" />
          <Text className="text-[#A8D8EA] text-sm ml-2 font-medium">
            Start Reading
          </Text>
        </View>
      )}
    </Pressable>
  );
}
