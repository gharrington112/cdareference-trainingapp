import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ReactNode } from 'react';

export default function TabThreeScreen(){

    return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#EEEEEE', dark: '#222222' }}
      
      headerImage={
      <Image
        source={require('@/assets/images/resources.png')}
        style = {styles.image}
      /> 
      }>
      
      <ThemedView style = {styles.titleContainer}>
        <ThemedText type = "title">Resources for Dental Work</ThemedText>
      </ThemedView>
      
      <ThemedView style = {styles.subtitleContainer}>
        <ThemedText type = 'subtitle' style = {{fontSize: 26}}>Dentist's Tray</ThemedText>
      </ThemedView>
      
      <Image 
        source={require('@/assets/images/dental_tray.jpg')}
        style = {styles.contentImage}
        resizeMode='contain'
      />

      <Image
        source={require('@/assets/images/Teeth.jpg')}
        style = {styles.contentImage}
        resizeMode='contain'
      />

      <ThemedView style = {styles.subtitleContainer}>
        <ThemedText type = 'subtitle' style = {{fontSize: 26}}>Pathology Descriptions</ThemedText>
       </ThemedView>

      <ThemedView style = {styles.contentContainer}>
        <Collapsible title = "Click or tap here to show information.">
          <Collapsible title = "Angular Cheilitis">
            <ThemedText>(Angular Cheilitis Description)</ThemedText>
            {["A condition characterized by inflammation and cracking at the corners of the mouth, often due to fungal or bacterial infection."].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))} 
          </Collapsible>

          <Collapsible title = "Epulis Fissuratum">
            <ThemedText>(Epulis Fissuratum Description)</ThemedText>
            {["A fibrous hyperplasia that occurs at the site of irritation from dentures, characterized by a firm, pink mass."].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))} 
          </Collapsible>

          <Collapsible title = "Geographic Tongue">
            <ThemedText>(Geographic Tongue Description)</ThemedText>
            {["A benign condition characterized by irregular, smooth, red patches on the dorsum of the tongue, often with a white border."].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))} 
          </Collapsible>

          <Collapsible title = "Kaposi's Sarcoma">
            <ThemedText>(Kaposi's Sarcoma Description)</ThemedText>
            {["A type of cancer that can present as purple or brown lesions in the oral cavity, often associated with HIV/AIDS."].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))} 
          </Collapsible>

          <Collapsible title = "Leukoedema">
            <ThemedText>(Leukoedema Description)</ThemedText>
            {["A milky white or grayish lesion that appears on the buccal mucosa. It disappears when the tissue is stretched, distinguishing it from other conditions."].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))} 
          </Collapsible>

          <Collapsible title = "Leukoplakia">
            <ThemedText>(Leukoplakia Description)</ThemedText>
            {["A white plaque found on the oral mucosa that cannot be wiped off, often considered a precancerous lesion and requiring further examination."].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))} 
          </Collapsible>

          <Collapsible title = "Lichen Planus">
            <ThemedText>(Lichen Planus Description)</ThemedText>
            {["A chronic inflammatory condition that can affect the oral mucosa, characterized by white striations or patches."].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))} 
          </Collapsible>

          <Collapsible title = "Median Rhomboid Glossitis">
            <ThemedText>(Median Rhomboid Glossitis Description)</ThemedText>
            {["A condition characterized by a smooth, red, rhomboid-shaped area on the midline of the dorsum of the tongue, often associated with fungal infection."].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))} 
          </Collapsible>

          <Collapsible title = "Nicotinic Stomatitis (Smoker’s Palate)">
            <ThemedText>(Nicotinic Stomatitis (Smoker’s Palate) Description)</ThemedText>
            {["A condition characterized by a white, wrinkled appearance of the hard palate, often associated with smoking."].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))} 
          </Collapsible>

          <Collapsible title = "Papillary Hyperplasia">
            <ThemedText>(Papillary Hyperplasia Description)</ThemedText>
            {["A condition characterized by the presence of multiple small, red or pink nodules on the hard palate, often associated with ill-fitting dentures."].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))} 
          </Collapsible>

          <Collapsible title = "Peripheral Giant Cell Granuloma">
            <ThemedText>(Peripheral Giant Cell Granuloma Description)</ThemedText>
            {["A reactive lesion that appears as a red or purple mass on the gingiva, often associated with irritation or trauma."].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))} 
          </Collapsible>

          <Collapsible title = "Pseudomembranous Candidiasis (Thrush)">
            <ThemedText>(Pseudomembranous Candidiasis (Thrush) Description)</ThemedText>
            {["A fungal infection characterized by white patches on the oral mucosa, which can be wiped off, revealing a red and inflamed base."].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))} 
          </Collapsible>

          <Collapsible title = "Scurvy">
            <ThemedText>(Scurvy Description)</ThemedText>
            {["A deficiency of vitamin C characterized by swollen, bleeding gums and loose teeth."].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))} 
          </Collapsible>

          <Collapsible title = "Tori">
            <ThemedText>(Tori Description)</ThemedText>
            {["Bony growths that can occur on the hard palate or mandible, often asymptomatic and requiring no treatment."].map((directions, index) =>
              (<ThemedText key={index}>• {directions}</ThemedText>))} 
          </Collapsible>
        </Collapsible>
      </ThemedView>
      </ParallaxScrollView>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
      padding: 5, // maybe there's a better way to pad text
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    subtitleContainer: {
      flexDirection: 'row',
      gap: 5,
    },
    contentContainer: {
      flexDirection: 'row',
      gap: 2,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
    image: {
      height: 178,
      width: 190,
      bottom: 0,
      left: 5,
      position: 'absolute',
    },
    contentImage: {
      width: 100%,
      aspectRatio: 1.5,
      position: 'relative',
    },
  });
