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
        {["RX: Amoxicillin 125 mg/ 5 ml", "Disp: 225 ml", "Sig: take 1.5 tsp. TID Until Gone"].map((directions, index) =>
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(32 - 42 Lbs)</ThemedText>
        {["RX: Amoxicillin 250 mg/ 5 ml", "Disp: 150 ml", "Sig: take 1 tsp. TID Until Gone"].map((directions, index) =>
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(43 - 62 Lbs)</ThemedText>
        {["RX: Amoxicillin 250 mg/ 5 ml", "Disp: 225 ml", "Sig: take 1.5 tsp. TID Until Gone"].map((directions, index) =>
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(63 Lbs and Over)</ThemedText>
        {["RX: Amoxicillin 250 mg/ 5 ml", "Disp: 300 ml", "Sig: take 2 tsp. TID Until Gone"].map((directions, index) =>
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>OR</ThemedText>
        {["RX: Amoxicillin 500 mg tablets", "Disp: 30 tablets", "Sig: take 1 tab TID Until Gone \n \n \n ** Avail. in 125/250 mg chewing tab"].map((directions, index) =>
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>
      <ThemedView style = {styles.contentContainer}>
        <ThemedText type = 'subtitle' style = {{fontSize: 16}}>If Patient Allergic to Penicillin</ThemedText>
      </ThemedView>
      <ThemedView style = {styles.contentContainer}>
        
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
