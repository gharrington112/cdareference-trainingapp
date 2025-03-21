import { Image, StyleSheet, Platform } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ParallaxScrollView from '@/components/ParallaxScrollView';

export default function TabThreeScreen(){

    return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      
      headerImage={
      <Image
        source={require('@/assets/images/Placeholder.png')} // edit this image
        style = {styles.image}
      /> 
    }>

      <Image 
        source={require('@/assets/images/Placeholder.png')} // replace image with actual dentist tray later
        style = {styles.contentImage}>
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
      height: 200,
      width: 210,
      bottom: 0,
      left: 5,
      position: 'relative',
    },
  });