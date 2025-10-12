import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface UserProgress {
  totalMinutesSpoken: number;
  currentLevel: number;
  experiencePoints: number;
  sessionsCompleted: number;
  averageScore: number;
  streak: number;
  lastSessionDate: string | null;
  achievements: string[];
}

interface ProgressContextType {
  progress: UserProgress;
  addSpeakingTime: (minutes: number) => void;
  addExperience: (points: number) => void;
  updateScore: (score: number) => void;
  getLevelProgress: () => { currentLevel: number; progress: number; minutesForNext: number };
  resetProgress: () => void;
}

const defaultProgress: UserProgress = {
  totalMinutesSpoken: 0,
  currentLevel: 1,
  experiencePoints: 0,
  sessionsCompleted: 0,
  averageScore: 0,
  streak: 0,
  lastSessionDate: null,
  achievements: []
};

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

// Level system: Each level requires more minutes
const getLevelRequirements = (level: number): number => {
  // Level 1: 0-10 minutes, Level 2: 10-25 minutes, Level 3: 25-50 minutes, etc.
  return Math.floor(10 * Math.pow(1.5, level - 1));
};

const calculateLevel = (totalMinutes: number): number => {
  let level = 1;
  let requiredMinutes = 0;
  
  while (totalMinutes >= requiredMinutes + getLevelRequirements(level)) {
    requiredMinutes += getLevelRequirements(level);
    level++;
  }
  
  return level;
};

const calculateExperienceFromMinutes = (minutes: number): number => {
  return Math.floor(minutes * 10); // 10 XP per minute
};

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgress>(defaultProgress);

  // Load progress from storage on app start
  useEffect(() => {
    loadProgress();
  }, []);

  // Save progress whenever it changes
  useEffect(() => {
    saveProgress();
  }, [progress]);

  const loadProgress = async () => {
    try {
      const savedProgress = await AsyncStorage.getItem('userProgress');
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      }
    } catch (error) {
      console.error('Error loading progress:', error);
    }
  };

  const saveProgress = async () => {
    try {
      await AsyncStorage.setItem('userProgress', JSON.stringify(progress));
    } catch (error) {
      console.error('Error saving progress:', error);
    }
  };

  const addSpeakingTime = (minutes: number) => {
    setProgress(prev => {
      const newTotalMinutes = prev.totalMinutesSpoken + minutes;
      const newLevel = calculateLevel(newTotalMinutes);
      const newExperience = prev.experiencePoints + calculateExperienceFromMinutes(minutes);
      
      // Check for level up achievements
      const newAchievements = [...prev.achievements];
      if (newLevel > prev.currentLevel && !newAchievements.includes(`level_${newLevel}`)) {
        newAchievements.push(`level_${newLevel}`);
      }
      
      // Check for time-based achievements
      if (newTotalMinutes >= 10 && !newAchievements.includes('10_minutes')) {
        newAchievements.push('10_minutes');
      }
      if (newTotalMinutes >= 60 && !newAchievements.includes('1_hour')) {
        newAchievements.push('1_hour');
      }
      if (newTotalMinutes >= 300 && !newAchievements.includes('5_hours')) {
        newAchievements.push('5_hours');
      }

      return {
        ...prev,
        totalMinutesSpoken: newTotalMinutes,
        currentLevel: newLevel,
        experiencePoints: newExperience,
        sessionsCompleted: prev.sessionsCompleted + 1,
        achievements: newAchievements,
        lastSessionDate: new Date().toISOString()
      };
    });
  };

  const addExperience = (points: number) => {
    setProgress(prev => ({
      ...prev,
      experiencePoints: prev.experiencePoints + points
    }));
  };

  const updateScore = (score: number) => {
    setProgress(prev => {
      const totalScore = (prev.averageScore * prev.sessionsCompleted) + score;
      const newAverage = totalScore / (prev.sessionsCompleted + 1);
      
      return {
        ...prev,
        averageScore: Math.round(newAverage)
      };
    });
  };

  const getLevelProgress = () => {
    const currentLevel = progress.currentLevel;
    const totalMinutes = progress.totalMinutesSpoken;
    
    // Calculate minutes needed for current level
    let minutesForCurrentLevel = 0;
    for (let i = 1; i < currentLevel; i++) {
      minutesForCurrentLevel += getLevelRequirements(i);
    }
    
    const minutesInCurrentLevel = totalMinutes - minutesForCurrentLevel;
    const minutesNeededForNextLevel = getLevelRequirements(currentLevel);
    const progressPercentage = Math.min((minutesInCurrentLevel / minutesNeededForNextLevel) * 100, 100);
    
    return {
      currentLevel,
      progress: Math.round(progressPercentage),
      minutesForNext: minutesNeededForNextLevel - minutesInCurrentLevel
    };
  };

  const resetProgress = () => {
    setProgress(defaultProgress);
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      addSpeakingTime,
      addExperience,
      updateScore,
      getLevelProgress,
      resetProgress
    }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};