import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/labimage.png')} // edit this image
          style = {styles.image}
        />
      }>
       <ThemedView style = {styles.titleContainer}>
          <ThemedText type = "title">Commonly Used Drugs in Dentistry</ThemedText>
       </ThemedView>
       <ThemedView style = {styles.subtitleContainter}>
        <ThemedText type = 'subtitle' style = {{fontSize: 26}}>Antibiotic Therapy</ThemedText>
       </ThemedView>
       <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Amoxicillin">
        <ThemedText>(Up to 21 Lbs)</ThemedText>
        {["RX: Amoxicillin 125 mg/ 5 ml", "Disp: 150 ml", "Sig: Take 1 tsp. TID Until Gone"].map((directions, index) => 
          (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(22 - 31 Lbs)</ThemedText>
        <ThemedText>(32 - 42 Lbs)</ThemedText>
        <ThemedText>(43 - 62 Lbs)</ThemedText>
        <ThemedText>(63 Lbs and Over)</ThemedText>
          {/*}
          {["(Up to 21 Lbs)", "(22 - 31 Lbs)", "(32 - 42 Lbs)", "(43 - 62 Lbs)", "(63 Lbs and Over)"].map((weight, index) =>
            (<ThemedText key={index}>• {weight}</ThemedText>))}
            */}
  
       
        </Collapsible>
       </ThemedView>
       
    </ParallaxScrollView>
    
  );
}
const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  subtitleContainter: {
    flexDirection: 'row',
    gap: 5,
  },
  contentContainer: {
    flexDirection: 'row',
    gap: 2,
  },
  image: {
    height: 178,
    width: 190,
    bottom: 0,
    left: 5,
    position: 'absolute',
  },
});
