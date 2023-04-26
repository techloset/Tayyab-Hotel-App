import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import COLORS from '../../consts/Color';
import hotels from '../../consts/Hotel';
import HotelCard from '../../components/hotelCard/HotelCard';
import Destination from '../../components/popularDestination/Destination';
import {InputIcon} from '../../components/inputIcon/InputIcon';
import Location from '../../img/homeImg/location.svg';
import ArrowDown from '../../img/homeImg/arrow-down.svg';
import Notifi from '../../img/homeImg/Notification.svg';
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveStyle.js';

const {height} = Dimensions.get('window');
function HomeScreen() {
  return (
    <>
      <View style={{flex: 0}}>
        <View style={styles.header}>
          <View style={styles.headLocation}>
            <Text style={styles.cuurentLocation}>Current location</Text>
            <View style={styles.Location1}>
              <Location />
              <Text style={styles.innerText}>Wallace, Australia</Text>
              <ArrowDown />
            </View>
          </View>
          <Notifi />
        </View>
        <View style={styles.container1}>
          <InputIcon />
        </View>
      </View>
        {/* Cards Item Landing form Cards components */}
        {/* <View> */}
        {/* </View> */}
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={{flex: 0}}>
            <View style={styles.Nearby}>
              <Text style={styles.NearbyLocation}>Nearby your location</Text>
              <Text style={styles.see}>See all</Text>
            </View>
            <FlatList
              horizontal
              data={hotels}
              contentContainerStyle={{
                paddingTop: pixelSizeVertical(16),
                paddingBottom: pixelSizeVertical(24),
                paddingLeft: pixelSizeHorizontal(20),
              }}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <HotelCard hotel={item} index={index} />
              )}
            />
          </View>
          <View style={{flex: 0, justifyContent: 'flex-end'}}>
            {/* Popular Destination Cards */}
            <Destination />
          </View>
        </ScrollView>
      </View>
    </>
  );
}
export default function Home() {
  return (
    <>
      {height >= 670 ? (
        <View style={{flex: 1}}>
          <HomeScreen />
        </View>
      ) : (
        <ScrollView>
          <HomeScreen />
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: pixelSizeVertical(29),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: pixelSizeHorizontal(20),
  },
  Location1: {
    flex: 0,
    flexDirection: 'row',
    paddingTop: pixelSizeVertical(4),
  },
  cuurentLocation: {
    color: COLORS.grey,
    fontSize: fontPixel(12),
    fontFamily: 'PlusJakartaSans-Medium',
  },
  innerText: {
    color: COLORS.black,
    paddingLeft: pixelSizeHorizontal(10),
    paddingRight: pixelSizeHorizontal(5),
    fontSize: fontPixel(14),
    fontFamily: 'PlusJakartaSans-Bold',
  },

  container1: {
    paddingHorizontal: pixelSizeHorizontal(16),
    paddingVertical: pixelSizeVertical(24),
  },
  // Bottom: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   marginHorizontal: pixelSizeHorizontal(24),
  //   paddingVertical: pixelSizeVertical(16),
  //   backgroundColor: 'white',
  //   borderRadius: 12,
  //   elevation: 5,
  //   shadowColor: '#000',
  //   gap: 10,
  // },
  Nearby: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: pixelSizeHorizontal(24),
  },
  NearbyLocation: {
    color: COLORS.black,
    fontSize: fontPixel(16),
    fontFamily: 'PlusJakartaSans-Bold',
  },
  see: {
    color: COLORS.lightBlue,
    fontSize: fontPixel(14),
    fontFamily: 'PlusJakartaSans-Medium',
  },
});