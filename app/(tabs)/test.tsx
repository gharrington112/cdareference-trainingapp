import { Image, StyleSheet, Platform } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';


export default function TabFourScreen(){

    return(

    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      
      headerImage={
      <Image
        source={require('@/assets/images/Placeholder.png')} // edit this image
        style = {styles.image}
      /> 
    }>

    <ThemedText>BeginTest here</ThemedText>



    </ParallaxScrollView>
)}

const styles = StyleSheet.create({
    image: {
      height: 178,
      width: 190,
      bottom: 0,
      left: 5,
      position: 'absolute',
    },
});