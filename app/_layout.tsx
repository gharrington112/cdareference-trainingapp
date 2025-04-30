import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Platform } from "react-native";

import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

declare global {
  interface Window {
    __EXPO_ROUTER_IMPORT_MODE__?: string;
  }
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    MaterialIcons: require('../assets/fonts/MaterialIcons.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    if (Platform.OS === 'web') {
      window.__EXPO_ROUTER_IMPORT_MODE__ = "static";
    }
  }, []);
  
  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="tests/test1" options={{ headerTitle: 'Test 1', }} />
        <Stack.Screen name="tests/test2" options={{ headerTitle: 'Test 2', }} />
        <Stack.Screen name="tests/test3" options={{ headerTitle: 'Test 3', }} />
        <Stack.Screen name="tests/test4" options={{ headerTitle: 'Test 4', }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
