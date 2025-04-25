import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { useTheme } from '@react-navigation/native';

export type Question = {
  question: string;
  options: string[];
  answer: string;
  imageKey: string;
};

export default function TabFourScreen() {
  const router = useRouter();
  const { colors, dark } = useTheme();

  const styles = StyleSheet.create({
    container: {
      padding: 20,
      alignItems: 'center',
    },
    title: {
      fontSize: 22,
      fontWeight: 'bold',
      marginBottom: 20,
      color: colors.text,
    },
    button: {
      backgroundColor: dark ? '#1D3D47' : '#A1CEDC',
      padding: 15,
      marginVertical: 10,
      borderRadius: 5,
      width: '80%',
      alignItems: 'center',
    },
    buttonText: {
      color: colors.text,
      fontSize: 16,
    },
  });

  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#EEEEEE', dark: '#222222' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Select a Test</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/tests/test1')}>
          <Text style={styles.buttonText}>Test 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/tests/test2')}>
          <Text style={styles.buttonText}>Test 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/tests/test3')}>
          <Text style={styles.buttonText}>Test 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/tests/test4')}>
          <Text style={styles.buttonText}>Test 4</Text>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}
