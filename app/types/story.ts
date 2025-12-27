export type DifficultyLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export interface Story {
  id: string;
  title: string;
  difficulty: DifficultyLevel;
  readingTime: number; // in minutes
  progress: number; // 0-100
  content: string;
  questions: Question[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}
