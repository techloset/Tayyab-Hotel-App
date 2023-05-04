import {
  StyleSheet,
  View,
  Pressable,
  Text,
  TouchableOpacity,
  Button,
} from 'react-native';
import React from 'react';
import House from '../../img/homeImg/house.svg';
import Shop from '../../img/homeImg/shop.svg';
import Coffee from '../../img/homeImg/coffee.svg';
import COLORS from '../../consts/Color';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
import { InputIcon } from '../inputIcon/InputIcon';
import {widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,} from '../../utils/ResponsiveStyle.js'
const SearchButton = ({navigation, setShowItems }) => {

//   }

  return (
    <>

       <View style={{flexDirection: 'row', justifyContent: 'space-between',gap:12}}>
          <Pressable style={styles.PressableHouse}>
            <House width={widthPixel(20)} height={heightPixel(20)}/>
            <Text style={{color: 'white',fontSize:fontPixel(14)}}>Hotel</Text>
          </Pressable>

          <Pressable style={styles.PressableShop}>
            <Shop width={widthPixel(20)} height={heightPixel(20)}/>
            <Pressable onPress={()=>setShowItems(false)} style={{}} >
              <Text style={{fontSize:fontPixel(14),color: COLORS.grey,}}> Market</Text> 
            </Pressable>
          </Pressable>
          <Pressable style={styles.PressableCoffee}>
            <Coffee width={widthPixel(20)} height={heightPixel(20)}/>
            <Pressable onPress={()=>setShowItems(false)} style={{}}>
              <Text style={{fontSize:fontPixel(14),color: COLORS.grey,}}>Coffee</Text>
              </Pressable>
          </Pressable>
        </View>
        {/* :<InputIcon/>} */}
    </>
  );
};

export default SearchButton;

const styles = StyleSheet.create({
  PressableHouse: {
    backgroundColor: COLORS.lightBlue,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems:'center',
    gap:8,

    paddingHorizontal: pixelSizeHorizontal(12),
    paddingVertical: pixelSizeVertical(8),
  },
  PressableShop: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems:'center',
    gap:8,
    paddingHorizontal: pixelSizeHorizontal(12),
    paddingVertical: pixelSizeVertical(8),
  },
  PressableCoffee: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    flexDirection: 'row',
    gap:8,
    alignItems:'center',
    paddingHorizontal: pixelSizeHorizontal(12),
    paddingVertical: pixelSizeVertical(8),
  },
});
