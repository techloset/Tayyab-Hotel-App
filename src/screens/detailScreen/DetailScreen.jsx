import React from 'react';
import {
  ImageBackground,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import COLORS from '../../consts/Color';
import Back from '../../img/homeImg/Back.svg';
import Menu from '../../img/homeImg/Menu.svg';
import Location from '../../img/homeImg/location.svg';
import DetailsButton from '../../components/detailsButton/DetailsButton';
import Heart from '../../img/homeImg/favorite.svg'
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveStyle.js';
import { Positions } from 'react-native-calendars/src/expandableCalendar';

const DetailsScreen = ({navigation, route}) => {
  const items = route.params;
  // console.log('items', items);
  // const navigation = useNavigation();
  return (
    <>
      <View style={styles.header}>
            <Back
              onPress={navigation.goBack}
              width={widthPixel(40)}
              height={heightPixel(40)}
            />
            <Text style={styles.Toptext}>Detail</Text>
            <Menu width={widthPixel(40)} height={heightPixel(40)} />
          </View>
        <StatusBar
        translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
      />
        <View
          style={{
            flex: 0.67,
            marginHorizontal: pixelSizeHorizontal(24),
          }}>
          
          <View>
          <Heart style={{position:'absolute',right:13,top:'12%',zIndex:10}}/>

            <ImageBackground
              style={styles.headerImage}
              source={items.hotel.image}></ImageBackground>
            <DetailsButton />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: pixelSizeHorizontal(24),
            flex: 0,
            // backgroundColor: 'blue',
          }}>
          <View style={styles.detailsText}>
            <Text style={styles.d1}>{items.hotel.name} </Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <Text style={styles.d4}>${items.hotel.price} <Text style={{color: '#878787', }}>
                {' '}
                /night
              </Text></Text>
              
            </View>
          </View>
          <View style={styles.d2}>
            <Location width={widthPixel(18)} height={heightPixel(18)} />
            <Text style={styles.d3}>{items.hotel.location} </Text>
          </View>

          <View style={styles.text}>
            <Text style={styles.d6}>Description</Text>
            <Text style={styles.d7}>
              {items.hotel.details}{' '}
              <Text
                style={{
                  color: '#4C4DDC',
                  fontSize: fontPixel(12),
                  fontFamily: 'PlusJakartaSans-Bold',
                }}>
                Read More. . .
              </Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.29,
            // backgroundColor: 'green',
            marginHorizontal: pixelSizeHorizontal(24),
          }}>
          <View style={styles.d8}>
            <Text style={styles.preview}>Preview</Text>
            <View style={styles.previewImg}>
              <Image
                source={require('../../img/homeImg/preview1.png')}
                style={{width: widthPixel(98), height: heightPixel(82)}}
              />

              <Image
                source={require('../../img/homeImg/preview2.png')}
                style={{width: widthPixel(98), height: heightPixel(82)}}
              />
              <Image
                source={require('../../img/homeImg/preview3.png')}
                style={{width: widthPixel(98), height: heightPixel(82)}}
              />
            </View>
          </View>
          <View style={{backgroundColor:'red'}}> 

          {/* <Image source={require('../../img/homeImg/favorite.svg')} width={50} height={50} /> */}
          </View>

          <View style={styles.btn}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Schdule');
              }}>
              <Text style={styles.BtnColor}>Booking Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        
       
    
    </>
  );
};

const styles = StyleSheet.create({
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: pixelSizeVertical(100),
    backgroundColor: COLORS.lightBlue,
    borderRadius: 12,
  },

  priceTag: {
    height: heightPixel(40),
    alignItems: 'center',
    marginLeft: pixelSizeVertical(40),
    paddingLeft: pixelSizeVertical(20),
    flex: 1,
    backgroundColor: COLORS.secondary,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  headerImage: {
    marginTop: pixelSizeVertical(28),
    marginBottom: pixelSizeVertical(16),
    height: heightPixel(250),
    overflow: 'hidden',
    borderRadius: 8,
  },
  header: {
    marginTop: pixelSizeVertical(40),
    marginHorizontal: pixelSizeHorizontal(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Toptext: {
    color: '#101010',
    fontSize: fontPixel(16),
    fontFamily: 'PlusJakartaSans-Bold',
  },
  detailsText: {
    // paddingTop: pixelSizeVertical(16),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  d1: {
    fontSize: fontPixel(16),
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#101010',
  },
  d2: { flexDirection: 'row',alignItems:'center',paddingTop:pixelSizeVertical(8)},
  d3: {
    color: '#878787',
    fontSize: fontPixel(12),
    fontFamily: 'PlusJakartaSans-Regular',
  },
  d4: {
    fontSize: fontPixel(16),
    fontFamily: 'PlusJakartaSans-Bold',
    color: COLORS.lightBlue,
  },
  text: {marginTop: pixelSizeVertical(16)},
  d6: {
    color: '#101010',
    fontSize: fontPixel(14),
    fontFamily: 'PlusJakartaSans-Bold',
  },
  d7: {
    fontSize: fontPixel(12),
    fontFamily: 'PlusJakartaSans-Regular',
    color: COLORS.grey,
    paddingTop:pixelSizeVertical(12),
    lineHeight:fontPixel(21)
    
  },
  // d8: {marginTop: pixelSizeVertical(16)},
  preview: {
    fontSize: fontPixel(14),
    fontFamily: 'PlusJakartaSans-Bold',
    color: '#101010',
  },
  previewImg: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    justifyContent:'space-between',
    marginTop: pixelSizeVertical(8),
  },
  BtnColor: {
    color: COLORS.white,
    fontSize: fontPixel(18),
    fontFamily: 'PlusJakartaSans-Bold',
    paddingVertical: pixelSizeVertical(16),
  },
});

export default DetailsScreen;
