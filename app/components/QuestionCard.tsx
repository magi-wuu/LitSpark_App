import { View, Text, Pressable, ScrollView } from 'react-native';
import { Question } from '../data/modules';
import { useState } from 'react';

interface QuestionCardProps {
  question: Question;
  onAnswer: (answer: string | number) => void;
}

export default function QuestionCard({ question, onAnswer }: QuestionCardProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<string | number | null>(null);
  const [arrangedWords, setArrangedWords] = useState<string[]>([]);

  const handleSelect = (answer: string | number) => {
    setSelectedAnswer(answer);
  };

  const handleWordTap = (word: string, index: number) => {
    if (arrangedWords.includes(word)) {
      setArrangedWords(arrangedWords.filter((w) => w !== word));
    } else {
      setArrangedWords([...arrangedWords, word]);
    }
  };

  const handleCheck = () => {
    if (question.type === 'sentence-building') {
      onAnswer(arrangedWords.join(' '));
    } else if (selectedAnswer !== null) {
      onAnswer(selectedAnswer);
    }
  };

  const isAnswerSelected = question.type === 'sentence-building' 
    ? arrangedWords.length > 0 
    : selectedAnswer !== null;

  return (
    <View className="flex-1 px-5 py-6">
      <ScrollView 
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        showsVerticalScrollIndicator={false}
      >
        <View
          className="bg-white rounded-3xl p-6"
          style={{
            backgroundColor: '#ffffff',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.03,
            shadowRadius: 12,
            elevation: 3,
          }}
        >
          <Text className="text-sm text-gray-medium mb-4 leading-5">
            {question.scenario}
          </Text>
          <Text className="text-lg font-semibold text-charcoal mb-6 leading-6">
            {question.question}
          </Text>

          {question.type === 'sentence-building' ? (
            <>
              {arrangedWords.length > 0 && (
                <View className="rounded-2xl p-4 mb-4" style ={{ backgroundColor: '#f0f8ff' }}>
                  <Text className="text-base text-charcoal">
                    {arrangedWords.join(' ')}
                  </Text>
                </View>
              )}
              <View className="flex-row flex-wrap gap-2">
                {question.options.map((word, index) => (
                  <Pressable
                    style={{backgroundColor: '#f0f8ff' }}
                    key={index}
                    onPress={() => handleWordTap(word, index)}
                    className={`rounded-full px-5 py-3 ${
                      arrangedWords.includes(word)
                        ? 'bg-primary'
                        : 'bg-cream'
                    }`}
                  >
                    <Text
                      className={`text-base ${
                        arrangedWords.includes(word)
                          ? 'text-white'
                          : 'text-charcoal'
                      }`}
                    >
                      {word}
                    </Text>
                  </Pressable>
                ))}
              </View>
              {arrangedWords.length > 0 && (
                <Pressable
                  onPress={() => setArrangedWords([])}
                  className="mt-4 self-center"
                >
                  <Text className="text-sm text-gray-medium underline">
                    Clear
                  </Text>
                </Pressable>
              )}
            </>
          ) : (
            <View style={{ gap: 12 }}>
        
              {question.options.map((option, index) => (
                <Pressable
                  key={index}
                  onPress={() => handleSelect(index)}
                  className={`rounded-full px-6 py-4 ${
                    selectedAnswer === index
                      ? 'bg-primary border-1 border-primary'
                      : 'bg-cream border-2 border-transparent'
                  }`}
                  style={{
                    backgroundColor: selectedAnswer === index ? '#3B82F6' : '#f0f8ff',
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 1 },
                    shadowOpacity: 0.05,
                    shadowRadius: 3,
                    elevation: 1,
                  }}
                >
                  <Text
                    className={`text-base ${
                      selectedAnswer === index ? 'text-white' : 'text-charcoal'
                    }`}
                  >
                    {option}
                  </Text>
                </Pressable>
              ))}
            </View>
          )}
        </View>
      </ScrollView>

      {isAnswerSelected && (
        <View className="px-5 pb-6 pt-4">
          <Pressable
            onPress={handleCheck}
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
              Check
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
