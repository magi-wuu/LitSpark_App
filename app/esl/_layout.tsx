import { Stack } from "expo-router";

export default function ESLLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: '#f0f8ff' },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="modules/[id]/index" />
      <Stack.Screen name="modules/[id]/practice" />
      <Stack.Screen name="modules/[id]/complete" />
    </Stack>
  );
}
