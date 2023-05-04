import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../../consts/Color';
import Star from '../../img/homeImg/star.svg';
import Slocation from '../../img/homeImg/Slocation.svg';
import Scalender from '../../img/homeImg/Scalendar.svg';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../utils/ResponsiveStyle';
export default function Schedule() {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Text style={styles.maintext}>My Schedule</Text>
        <Text style={styles.mainsee}>See all</Text>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={true}>

        <View style={styles.maindest}>
          <View style={{flexDirection: 'row',flex:1,}}>
            <View style={{height: 84, width: 84,marginLeft:12,}}>
              <Image
                source={require('../../img/homeImg/desti.png')}
                style={styles.mainImg}
              />
            </View>
            <View style={{flex:2,marginVertical:17,marginLeft:pixelSizeHorizontal(16),marginRight:pixelSizeHorizontal(12)}}>
              <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                <Text style={styles.dollersText}>Asteria hotel </Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.dollers}> $165,3 </Text>
                <Text style={{fontSize:fontPixel(14),color: COLORS.grey,alignSelf:'center'}}>/night</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row',gap:8,paddingTop:pixelSizeVertical(8)}}>
                <Slocation />
                <Text style={styles.location}>Wilora NT 0872, Australia</Text>
              </View>
              <View style={{flexDirection: 'row',gap:8,paddingTop:pixelSizeVertical(8)}}>
              <Scalender />
                <Text style={styles.location}>27 October 2022</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.maindest}>
          <View style={{flexDirection: 'row',flex:1,}}>
            <View style={{height: 84, width: 84,marginLeft:12,}}>
              <Image
                source={require('../../img/homeImg/hotel2.png')}
                style={styles.mainImg}
              />
            </View>
            <View style={{flex:2,marginVertical:17,marginLeft:pixelSizeHorizontal(16),marginRight:pixelSizeHorizontal(12)}}>
              <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                <Text style={styles.dollersText}>Golden Pelece </Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.dollers}> $175,3 </Text>
                <Text style={{fontSize:fontPixel(14),color: COLORS.grey,alignSelf:'center'}}>/night</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row',gap:8,paddingTop:pixelSizeVertical(8)}}>
                <Slocation />
                <Text style={styles.location}>Wilora NT 0872, Australia</Text>
              </View>
              <View style={{flexDirection: 'row',gap:8,paddingTop:pixelSizeVertical(8)}}>
              <Scalender />
                <Text style={styles.location}>27 October 2022</Text>
              </View>
            </View>
          </View>
        </View>

{/* 
        <View style={styles.maindest}>
          <View style={{flexDirection: 'row',flex:1,marginLeft:12,}}>
            <View style={{height: heightPixel(84), width: widthPixel(84),}}>
              <Image
                source={require('../../img/homeImg/hotel2.png')}
                style={styles.mainImg}
              />
            </View>
            <View style={{flex:2,backgroundColor:'red',marginVertical:17,gap:8,marginLeft:pixelSizeHorizontal(16),marginRight:pixelSizeHorizontal(12)}}>
              <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                <Text style={styles.dollersText}>Golden Pelece </Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.dollers}> $175,3 </Text>
                <Text style={{fontSize:fontPixel(14),color: COLORS.grey,alignSelf:'center'}}>/night</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row',gap:8}}>
                <Slocation />
                <Text style={styles.location}>Wilora NT 0872, Australia</Text>
              </View>
              <View style={{flexDirection: 'row',gap:8}}>
              <Scalender />
                <Text style={styles.location}>27 October 2022</Text>
              </View>
            </View>
          </View>
        </View> */}



        {/* <View style={styles.maindest}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex:1,}}>
              <Image
                source={require('../../img/homeImg/hotel2.png')}
                style={styles.mainImg}
              />
            </View>
            <View style={{flex:2, marginHorizontal: pixelSizeHorizontal(18),paddingVertical:pixelSizeVertical(16), gap: 8}}>
              <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
                <Text style={styles.dollersText}>Golden Pelece  </Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.dollers}> $175,3 </Text>
                <Text style={{fontSize:fontPixel(14),color: COLORS.grey,alignSelf:'center'}}>/night</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row',gap:8}}>
                <Slocation />
                <Text style={styles.location}>Wilora NT 0872, Australia</Text>
              </View>
              <View style={{flexDirection: 'row',gap:8}}>
              <Scalender />
                <Text style={styles.location}>19 October 2022</Text>
              </View>
            </View>
          </View>
        </View> */}


      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  price: {
    color: COLORS.$color,
  },
  Text: {
    color: COLORS.black,
    fontSize: fontPixel(14),
    fontFamily: 'PlusJakartaSans-Bold',
  },
  location: {
    color: COLORS.grey,
    fontSize: fontPixel(12),
    fontFamily: 'PlusJakartaSans-Medium',
  },
  dollersText: {
    color: COLORS.black,
    fontSize: fontPixel(14),
    fontFamily: 'PlusJakartaSans-Bold',
    gap: 10,
  },
  dollers: {
    color: COLORS.$color,
    fontSize: fontPixel(14),
    fontFamily: 'PlusJakartaSans-Bold',
  },
  number: {
    color: COLORS.black,
    fontSize: fontPixel(12),
    alignSelf: 'baseline',
    paddingLeft: pixelSizeHorizontal(4),
    paddingTop: pixelSizeVertical(1),
    fontFamily: 'PlusJakartaSans-Bold',
  },
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: pixelSizeHorizontal(24),
  },
  maintext: {
    fontFamily: 'PlusJakartaSans-Bold',
    color: COLORS.black,
    fontSize: fontPixel(16),
  },
  mainsee: {
    color: COLORS.lightBlue,
    fontSize: fontPixel(14),
    fontFamily: 'PlusJakartaSans-Medium',
  },
  maindest: {
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    marginHorizontal:pixelSizeHorizontal(24),
    marginVertical:pixelSizeVertical(16),
    minHeight:108
  },
  mainImg: {width:"100%", height:84, borderRadius:4,resizeMode: 'contain',marginVertical:12}
});
