import { StyleSheet, View, Pressable, Text,} from 'react-native';
  import React from 'react';
  import Wifi from '../../img/homeImg/wifi.svg'
  import Coffee1 from '../../img/homeImg/coffee1.svg'
  import Star from '../../img/homeImg/star.svg'
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../utils/ResponsiveStyle';
import COLORS from '../../consts/Color';

  
  const DetailsButton = () => {

    return (
      <>
    
         <View style={{flexDirection: 'row',gap:8}}>
            <Pressable style={styles.PressableHouse}>
              <Wifi width={widthPixel(20)} height={heightPixel(20)}/>
              <Text style={styles.text}>Free Wifi  </Text>
            </Pressable>
            <Pressable style={styles.PressableShop}>
              <Coffee1 width={widthPixel(20)} height={heightPixel(20)}/>
              <Text style={styles.text} >
              Free Breakfast
              </Text>
            </Pressable>
            <Pressable style={styles.PressableCoffee}>
              <Star width={widthPixel(20)} height={heightPixel(20)}/>
              <Text style={styles.text}>5.0 </Text>
            </Pressable>
          </View>
      </>
    );
  };
  
  export default DetailsButton;
  
  const styles = StyleSheet.create({
    PressableHouse: {
      backgroundColor: COLORS.bt,
      borderRadius: 8,
      flexDirection: 'row',
      paddingHorizontal: pixelSizeHorizontal(12),
      paddingVertical: pixelSizeVertical(9),
    },
    PressableShop: {
      backgroundColor: COLORS.bt,
      borderRadius: 8,
      flexDirection: 'row',
      paddingHorizontal: pixelSizeHorizontal(12),
      paddingVertical: pixelSizeVertical(9),
    },
    PressableCoffee: {
      backgroundColor: COLORS.bt,
      borderRadius: 8,
      flexDirection: 'row',
      paddingHorizontal: pixelSizeHorizontal(12),
      paddingVertical: pixelSizeVertical(9),
    },
    text:{paddingLeft: pixelSizeHorizontal(8), color: '#101010',fontSize:fontPixel(12),fontFamily: 'PlusJakartaSans-Medium',}
  });
  