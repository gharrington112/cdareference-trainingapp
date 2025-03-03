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
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Commonly Used Drugs</ThemedText>
      </ThemedView>
      <Collapsible title="Amoxicillin">
        <ThemedText>Brand Names in US: </ThemedText>
        <ThemedView style={{ paddingLeft: 10 }}>
    {["Augmentin", "Augmentin ES-600", "Augmentin XR"].map((brand, index) => (
      <ThemedText key={index}>• {brand}</ThemedText>
    ))}
  </ThemedView>
        <ThemedText>Dental Uses: </ThemedText>

      </Collapsible>
      <Collapsible title="Drug 2 (placeholder)">
        <ThemedText>Placeholder for drug name</ThemedText>
        <ThemedText>PlaceHolhder for drug info</ThemedText>
        <ThemedText>Placeholder for other info</ThemedText>
      </Collapsible>
  
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
});
