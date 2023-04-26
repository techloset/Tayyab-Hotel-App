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
const SearchButton = ({navigation}) => {
//   const navigation = useNavigation();
  const [input, setInput] = useState(true);
//   function hello() {
//     setshowInput(!showInput);
//   }

  return (
    <>
      {/* {!showInput ? (
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Pressable style={styles.PressableHouse}>
            <House />
            <Text style={{paddingLeft: 8, color: 'white'}}>Hotel</Text>
          </Pressable>

          <Pressable style={styles.PressableShop}>
            <Shop />
            <Text style={{paddingLeft: 8, color: '#878787'}} onPress={hello}>
              Market
            </Text>
          </Pressable>
          <Pressable style={styles.PressableCoffee}>
            <Coffee />
            <Text style={{paddingLeft: 8, color: '#878787'}}>Coffee</Text>
          </Pressable>
        </View>
      ) : (
        <View>
          {' '}
          <Button title="hello" />{' '}
        </View>
      )} */}
      {input?
       <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Pressable style={styles.PressableHouse}>
            <House width={widthPixel(20)} height={heightPixel(20)}/>
            <Text style={{paddingLeft: pixelSizeHorizontal(8), color: 'white',fontSize:fontPixel(14)}}>Hotel</Text>
          </Pressable>

          <Pressable style={styles.PressableShop}>
            <Shop width={widthPixel(20)} height={heightPixel(20)}/>
            <Pressable onPress={()=>setInput(false)} style={{paddingLeft: pixelSizeHorizontal(8), color: '#878787',fontSize:fontPixel(14)}} >
              <Text> Market</Text> 
            </Pressable>
          </Pressable>
          <Pressable style={styles.PressableCoffee}>
            <Coffee width={widthPixel(20)} height={heightPixel(20)}/>
            <Pressable onPress={()=>setInput(false)} style={{paddingLeft: pixelSizeHorizontal(8), color: '#878787',fontSize:fontPixel(14)}}>
              <Text>Coffee</Text>
              </Pressable>
          </Pressable>
        </View>:<InputIcon/>}
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

    paddingHorizontal: pixelSizeHorizontal(12),
    paddingVertical: pixelSizeVertical(8),
  },
  PressableShop: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems:'center',

    paddingHorizontal: pixelSizeHorizontal(12),
    paddingVertical: pixelSizeVertical(8),
  },
  PressableCoffee: {
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems:'center',
    paddingHorizontal: pixelSizeHorizontal(12),
    paddingVertical: pixelSizeVertical(8),
  },
});
