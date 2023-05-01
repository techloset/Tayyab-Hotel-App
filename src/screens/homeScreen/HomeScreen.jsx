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
  StatusBar,
} from 'react-native';
import COLORS from '../../consts/Color';
import hotels from '../../consts/Hotel';
import HotelCard from '../../components/hotelCard/HotelCard';
import Destination from '../../components/popularDestination/Destination';
import {InputIcon} from '../../components/inputIcon/InputIcon';
import Location from '../../img/homeImg/location.svg';
import ArrowDown from '../../img/homeImg/arrow-down.svg';
import Notifi from '../../img/homeImg/Notification.svg';
import Noti from '../../img/homeImg/noti.svg'
import {
  widthPixel,
  heightPixel,
  fontPixel,
  pixelSizeVertical,
  pixelSizeHorizontal,
} from '../../utils/ResponsiveStyle.js';
import { useState } from 'react';
// const {height} = Dimensions.get('window');
export default  HomeScreen=()=> {
  const [showItems, setShowItems] = useState(false);
  const handleSlideIconPress = () => {
    setShowItems(!showItems);
  };
  return (
    <>
    <StatusBar  translucent
        backgroundColor={'transparent'}
        barStyle={'dark-content'}/>
        <View style={{flex:1}}>

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
          <View style={{ borderColor: COLORS.borderGrey,alignItems:'center',
    borderWidth: 1,
    borderRadius: 8,paddingVertical:pixelSizeVertical(8),paddingHorizontal:pixelSizeHorizontal(8)}}>
          <Noti width={widthPixel(24)} height={heightPixel(24)}/>

          </View>
        </View>
        <View style={{paddingHorizontal: pixelSizeHorizontal(24),
    // paddingVertical: pixelSizeVertical(24),
    paddingTop:showItems? 32:24,
    paddingBottom:showItems? 32:24}}>
          <InputIcon showItems={showItems} setShowItems={setShowItems}  handleSlideIconPress={handleSlideIconPress} />
        </View>
      </View>
      <ScrollView>

        {/* Cards Item Landing form Cards components */}
        {/* <View> */}
        {/* </View> */}
      <View style={{flex: 1}}>
     
          <View style={{}}>
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
                <HotelCard hotel={item} index={index} showItems={showItems} setShowItems={setShowItems}  handleSlideIconPress={handleSlideIconPress}/>
              )}
            />
          </View>
        
    
      </View>
        <View style={{flex: 0, justifyContent: 'flex-start'}}>
            <Destination />
          </View>
      </ScrollView>

        </View>
            {/* Popular Destination Cards */}

    </>
  );
}
// export default function Home() {
//   return (
//     <>
       
//         {/* <View style={{flex: 1}}>
//           <HomeScreen />
//         </View> */}
     
//         <ScrollView>
//           <HomeScreen />
//         </ScrollView>
      
//     </>
//   );
// }

const styles = StyleSheet.create({
  header: {
    marginTop: pixelSizeVertical(60),
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
    paddingHorizontal: pixelSizeHorizontal(24),
    // paddingVertical: pixelSizeVertical(24),
    paddingTop:32,
    paddingBottom:24
    
  },

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
