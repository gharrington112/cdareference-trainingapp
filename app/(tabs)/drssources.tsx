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
      
      <ThemedView style = {styles.titleContainer}>
        <ThemedText type = 'subtitle' style = {{fontSize: 26}}>Dentist's Tray</ThemedText>
      </ThemedView>
      
      <Image 
        source={require('@/assets/images/dental_tray.jpg')}
        style = {styles.contentImage}
        resizeMode='contain'
      />
      </Image>
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
      height: undefined,
      width: 100%,
      bottom: 0,
      left: 5,
      position: 'relative',
    },
  });
