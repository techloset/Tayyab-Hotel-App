// import { View, Text } from 'react-native'
// import React from 'react'

// export default function HotelCard() {
//   return (
//     <View>
//       <Text>HotelCard</Text>
//     </View>
//   )
// }

import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Image} from 'react-native';
import COLORS from '../../consts/Color';
import Favorite from '../../img/homeImg/favorite.svg';
import Star from '../../img/homeImg/star.svg';
import HeartIcon from '../../img/homeImg/IconHeart.svg'
import {useNavigation} from '@react-navigation/native';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveStyle.js';

const {width} = Dimensions.get('window');
const cardWidth = width / 1.4;
const Card = ({hotel, index,showItems,setShowItems,handleSlideIconPress}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{...styles.cards}}
      activeOpacity={1}
      onPress={() => {
        navigation.navigate('Detail', {hotel});
      }}
      >
      <View style={styles.priceTag}>
       {showItems? <HeartIcon/> :<Favorite />
       } 
      </View>
      <View>
        <Image source={hotel.image} style={styles.mainimg} />
        
      </View>
      <View style={styles.cardDetails}>
        <View style={styles.maincard}>
          <Text style={styles.hotelname}>{hotel.name}</Text>

          <View style={styles.starwala}>
            <Star width={widthPixel(16)} height={heightPixel(16)} />
            <Text style={styles.number}>5.0</Text>
          </View>
        </View>
        <Text style={styles.hotellocation}>{hotel.location}</Text>
        <View style={styles.mainprice}>
          <Text style={styles.cardprice}>${hotel.price}</Text>
          <Text style={{fontSize:fontPixel(14)}}> /night</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cards: {
    width: cardWidth,
    elevation: 15,
    backgroundColor: COLORS.white,
    marginRight: pixelSizeHorizontal(16),
    borderRadius: 12,
  },
  priceTag: {
    position: 'absolute',
    zIndex: 1,
    right: 10,
    top: 12,
  },

  cardDetails: {
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    paddingHorizontal: pixelSizeHorizontal(12),
    paddingVertical: pixelSizeVertical(12),
  },
  number: {
    color: COLORS.black,
    fontSize: fontPixel(12),
    // lineHeight: 18,
    fontFamily: 'PlusJakartaSans-Bold',
    // alignSelf: 'baseline',
    // paddingLeft: 5,
  },
  mainimg: {
    // flex: 2,
    width: '100%',
    height: heightPixel(209),
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: 'stretch',
  },
  maincard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  hotelname: {
    fontSize: fontPixel(14),
    fontFamily: 'PlusJakartaSans-Bold',
    color: COLORS.black,
  },
  hotellocation: {
    color: COLORS.grey,
    fontSize: fontPixel(12),
    fontFamily: 'PlusJakartaSans-Medium',
    marginTop: pixelSizeVertical(8),
  },
  mainprice: {flexDirection: 'row', marginTop: pixelSizeVertical(8),alignItems:'center'},
  cardprice: {
    color: COLORS.$color,
    fontSize: fontPixel(14),
    fontFamily: 'PlusJakartaSans-Bold',
  },
  starwala: {flexDirection: 'row', alignItems: 'center'},
});

export default Card;
