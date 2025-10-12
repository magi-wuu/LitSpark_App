import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the shape of our user profile data
interface UserProfile {
  name: string;
  email: string;
  profilePicture: string;
  joinDate: string;
  bio: string;
}

// Define what functions our context will provide
interface UserProfileContextType {
  profile: UserProfile;
  updateProfile: (updates: Partial<UserProfile>) => void;
  updateProfilePicture: (uri: string) => void;
}

// Default profile data for new users
const defaultProfile: UserProfile = {
  name: "New Learner",
  email: "learner@example.com", 
  profilePicture: "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
  joinDate: new Date().toISOString(),
  bio: "Passionate language learner exploring new cultures through conversation!"
};

// Create the context - this will be undefined until we provide it
const UserProfileContext = createContext<UserProfileContextType | undefined>(undefined);

// This is our provider component that wraps the app and provides profile data
export const UserProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // State to hold the current profile data
  const [profile, setProfile] = useState<UserProfile>(defaultProfile);

  // Load saved profile data when the app starts
  useEffect(() => {
    loadProfile();
  }, []);

  // Save profile data whenever it changes
  useEffect(() => {
    saveProfile();
  }, [profile]);

  // Function to load profile from device storage
  const loadProfile = async () => {
    try {
      const savedProfile = await AsyncStorage.getItem('userProfile');
      if (savedProfile) {
        // Parse the JSON string back into an object and update state
        setProfile(JSON.parse(savedProfile));
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  // Function to save profile to device storage
  const saveProfile = async () => {
    try {
      // Convert profile object to JSON string and save
      await AsyncStorage.setItem('userProfile', JSON.stringify(profile));
    } catch (error) {
      console.error('Error saving profile:', error);
    }
  };

  // Function to update profile with partial data (only the fields that changed)
  const updateProfile = (updates: Partial<UserProfile>) => {
    setProfile(prev => ({
      ...prev,  // Keep all existing data
      ...updates  // Override with new data
    }));
  };

  // Specific function for updating just the profile picture
  const updateProfilePicture = (uri: string) => {
    setProfile(prev => ({
      ...prev,
      profilePicture: uri
    }));
  };

  // Provide the profile data and functions to all child components
  return (
    <UserProfileContext.Provider value={{
      profile,
      updateProfile,
      updateProfilePicture
    }}>
      {children}
    </UserProfileContext.Provider>
  );
};

// Custom hook to use the profile context - this makes it easy to access profile data
export const useUserProfile = () => {
  const context = useContext(UserProfileContext);
  if (context === undefined) {
    throw new Error('useUserProfile must be used within a UserProfileProvider');
  }
  return context;
};