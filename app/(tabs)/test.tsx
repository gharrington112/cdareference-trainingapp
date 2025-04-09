import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function TabFourScreen() {
  const router = useRouter();

  return (
    <ParallaxScrollView headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Select a Test</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/tests/test1')}>
          <Text style={styles.buttonText}>Tests 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/test2')}>
          <Text style={styles.buttonText}>Test 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/test3')}>
          <Text style={styles.buttonText}>Test 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/test4')}>
          <Text style={styles.buttonText}>Test 4</Text>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
    image: {
      height: 178,
      width: 190,
      bottom: 0,
      left: 5,
      position: 'absolute',
    },
});