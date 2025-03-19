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
        {["RX: Amoxicillin 125 mg / 5 ml", "Disp: 150 ml", "Sig: Take 1 tsp. TID Until Gone"].map((directions, index) => 
          (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(22 - 31 Lbs)</ThemedText>
        {["RX: Amoxicillin 125 mg / 5 ml", "Disp: 225 ml", "Sig: take 1.5 tsp. TID Until Gone"].map((directions, index) =>
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(32 - 42 Lbs)</ThemedText>
        {["RX: Amoxicillin 250 mg / 5 ml", "Disp: 150 ml", "Sig: take 1 tsp. TID Until Gone"].map((directions, index) =>
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(43 - 62 Lbs)</ThemedText>
        {["RX: Amoxicillin 250 mg / 5 ml", "Disp: 225 ml", "Sig: take 1.5 tsp. TID Until Gone"].map((directions, index) =>
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(Over 62 Lbs)</ThemedText>
        {["RX: Amoxicillin 250 mg / 5 ml", "Disp: 300 ml", "Sig: take 2 tsp. TID Until Gone"].map((directions, index) =>
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>OR</ThemedText>
        {["RX: Amoxicillin 500 mg tablets", "Disp: 30 tablets", "Sig: take 1 tab TID Until Gone \n \n \n ** Avail. in 125/250 mg chewing tab"].map((directions, index) =>
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
       </ThemedView>
       <ThemedView style = {styles.contentContainer}>
       <Collapsible title = "Pen VK">
       <ThemedText>(Up to 22 Lbs)</ThemedText>
       {["RX: Pen VK 125 mg / 5 ml", "Disp: 200 ml", "Sig: Take 1 tsp. QID Until Gone"].map((directions, index) => 
          (<ThemedText key={index}>• {directions}</ThemedText>))}
       <ThemedText>(23 - 33 Lbs)</ThemedText>
       {["RX: Pen VK 125 mg / 5 ml", "Disp: 300 ml", "Sig: Take 1.5 tsp QID Until Gone"].map((directions, index) => 
          (<ThemedText key={index}>• {directions}</ThemedText>))}
       <ThemedText>(34 - 44 Lbs)</ThemedText>
       {["RX: Pen VK 250 mg / 5 ml", "Disp: 200 ml", "Sig: Take 1 tsp. QID Until Gone"].map((directions, index) => 
          (<ThemedText key={index}>• {directions}</ThemedText>))}
       <ThemedText>(45 - 66 Lbs)</ThemedText>
       {["RX: Pen VK 250 mg / 5 ml", "Disp: 300 ml", "Sig: Take 1.5 tsp. QID Until Gone"].map((directions, index) => 
          (<ThemedText key={index}>• {directions}</ThemedText>))}
       <ThemedText>(Over 66 Lbs)</ThemedText>
       {["RX: Pen VK 500 mg tablets", "Disp: 40 tablets", "Sig: Take 1 tab TID Until Gone"].map((directions, index) => 
          (<ThemedText key={index}>• {directions}</ThemedText>))}
       </Collapsible>
       </ThemedView>
      <ThemedView style = {styles.contentContainer}>
        <ThemedText type = 'subtitle' style = {{fontSize: 16}}>If Patient Allergic to Penicillin</ThemedText>
      </ThemedView>
      <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Clindamycin">
        <ThemedText>(Up to 18 Lbs)</ThemedText>
        {["RX: Pediatric Cleocin 75 mg / 5 ml", "Disp: 75 ml", "Sig: Take 1/2 tsp. TID Until Gone"].map((directions, index) => 
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(19 - 33 Lbs)</ThemedText>
        {["RX: Pediatric Cleocin 75 mg / 5 ml", "Disp: 150 ml", "Sig: Take 1 tsp. TID Until Gone"].map((directions, index) => 
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(34 - 49 Lbs)</ThemedText>
        {["RX: Pediatric Cleocin 75 mg / 5 ml", "Disp: 225 ml", "Sig: Take 1.5 tsp. TID Until Gone"].map((directions, index) => 
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(50 - 67 Lbs)</ThemedText>
        {["RX: Pediatric Cleocin 75 mg / 5 ml", "Disp: 300 ml", "Sig: Take 2 tsp. TID Until Gone"].map((directions, index) => 
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(68 - 99 Lbs)</ThemedText>
        {["RX: Pediatric Cleocin 75 mg / 5 ml", "Disp: 450 ml", "Sig: Take 3 tsp. TID Until Gone"].map((directions, index) => 
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(Over 99 Lbs)</ThemedText>
        {["RX: Pediatric Cleocin 300 mg", "Disp: 40 capsules", "Sig: Take 1 cap QID Until Gone"].map((directions, index) => 
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        </Collapsible>
      </ThemedView>
      <ThemedView style = {styles.subtitleContainter}>
        <ThemedText type = 'subtitle' style = {{fontSize: 26}}>SBE Prophylaxis</ThemedText>
       </ThemedView>
       <Collapsible title = "Amoxicillin">
       <ThemedText>Less than 33 Lbs</ThemedText>
       {["RX: Amoxicillin 250 mg / 5 ml", "Disp: 15 ml", "Sig: Take 3 tsp. 1 hr Prior to Appt."].map((directions, index) => 
          (<ThemedText key={index}>• {directions}</ThemedText>))}
       <ThemedText>Less than 33 Lbs</ThemedText>
       {["RX: Amoxicillin 250 mg / 5 ml", "Disp: 40 ml", "Sig: Take 6 tsp. 1 hr Prior to Appt."].map((directions, index) => 
          (<ThemedText key={index}>• {directions}</ThemedText>))}
       <ThemedText>Less than 33 Lbs</ThemedText>
       {["RX: Amoxicillin 250 mg / 5 ml", "Disp: 40 ml", "Sig: Take 8 tsp."].map((directions, index) => 
          (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>OR</ThemedText>
        {["RX: Amoxicillin 500 mg", "Disp: 4 tabs", "Sig: Take 4 tab 1 hr Prior to Appt."].map((directions, index) => 
          (<ThemedText key={index}>• {directions}</ThemedText>))}
       </Collapsible>
       <ThemedView style = {styles.contentContainer}>
        <ThemedText type = 'subtitle' style = {{fontSize: 16}}>If Patient Allergic to Penicillin</ThemedText>
      </ThemedView>
      <Collapsible title = "Clindamycin">
        <ThemedText>(Less than 24 Lbs)</ThemedText>
        {["RX: Cleocin 75 mg / 5 ml", "Disp: 15 ml", "Sig: Take 3 tsp. 1 hr Prior to Appt."].map((directions, index) => 
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(24 - 33 Lbs)</ThemedText>
        {["RX: Cleocin 75 mg / 5 ml", "Disp: 20 ml", "Sig: Take 4 tsp. 1 hr Prior to Appt."].map((directions, index) => 
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(34 - 42 Lbs)</ThemedText>
        {["RX: Cleocin 75 mg / 5 ml", "Disp: 25 ml", "Sig: Take 5 tsp. 1 hr Prior to Appt."].map((directions, index) => 
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(43 - 49 Lbs)</ThemedText>
        {["RX: Cleocin 75 mg / 5 ml", "Disp: 30 ml", "Sig: Take 6 tsp. 1 hr Prior to Appt."].map((directions, index) => 
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(50 - 57 Lbs)</ThemedText>
        {["RX: Cleocin 75 mg / 5 ml", "Disp: 35 ml", "Sig: Take 7 tsp. 1 hr Prior to Appt."].map((directions, index) => 
        (<ThemedText key={index}>• {directions}</ThemedText>))}
        <ThemedText>(Over 57 Lbs)</ThemedText>
        {["RX: Cleocin 75 mg / 5 ml", "Disp: 40 ml", "Sig: Take 8 tsp. 1 hr Prior to Appt."].map((directions, index) => 
        (<ThemedText key={index}>• {directions}</ThemedText>))}
      </Collapsible>
      <ThemedView style = {styles.subtitleContainter}>
        <ThemedText type = 'subtitle' style = {{fontSize: 26}}>Fluoride Therapy</ThemedText>
       </ThemedView>
      <Collapsible title = "Topical">
      {["RX: Prevident 5000 (1% NAF)", "Disp: One 2 oz Tube"].map((directions, index) => 
      (<ThemedText key={index}>• {directions}</ThemedText>))}
      <ThemedText>If Over 16 Yrs</ThemedText>
      {["Sig: Apply thin ribbon on toothbrush after regular brushing. Brush 1 min then expectorate. Refrain from eating, drinking, or rinsing for 30 mins."].map((directions, index) => 
      (<ThemedText key={index}>• {directions}</ThemedText>))}
      <ThemedText>6 - 16 Yrs</ThemedText>
      {["Sig: Same as above, except after expectorating rinse with water."].map((directions, index) => 
      (<ThemedText key={index}>• {directions}</ThemedText>))}
      <ThemedText>Under 6 Yrs</ThemedText>
      {["DO NOT USE"].map((directions, index) => 
      (<ThemedText key={index}>• {directions}</ThemedText>))}
      </Collapsible>
      <Collapsible title = "Rinses">
      {["RX: Prevident Dental Rinse", "Disp: One Bottle", "Sig (6 Yrs or Older) Rinse with 2 tsp. for 1 min then expectorate 1 time a day"].map((directions, index) => 
      (<ThemedText key={index}>• {directions}</ThemedText>))}
      </Collapsible>
      <ThemedView style = {styles.subtitleContainter}>
        <ThemedText type = 'subtitle' style = {{fontSize: 26}}>Analgesics</ThemedText>
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
