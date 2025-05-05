import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#EEEEEE', dark: '#222222' }} // need to change color scheme to make image viewable

      headerImage={
        <Image
          source={require('@/assets/images/centurydentallogo2.png')}
          style={styles.reactLogo}
        />
      }>

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to the Century Dental Training & Resource App</ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Here's what you can do with this app: </ThemedText>
          <ThemedText>1. Select the "Drugs" icon to view some commonly used drugs in dentistry {"\n"} 
          2. Select the Resources Icon to review proper standards in dentistry as well as other review material {"\n"}
          3. Select the Test icon to test your knowledge in various tests
        </ThemedText>
      </ThemedView>        

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
