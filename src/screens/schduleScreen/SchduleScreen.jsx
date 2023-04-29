// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const SchduleScreen = () => {
//   return (
//     <View>
//       <Text>SchduleScreen</Text>
//     </View>
//   )
// }

// export default SchduleScreen

// const styles = StyleSheet.create({})

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
import Setting from '../../img/homeImg/Setting.svg';
import Location from '../../img/homeImg/location.svg';
import DetailsButton from '../../components/detailsButton/DetailsButton';
import Indicator from '../../img/homeImg/Indicator.svg';
import {Calendar} from 'react-native-calendars';
import Schedule from '../../components/mySchdule/MySchdule'
import { useState } from 'react';
import { fontPixel, heightPixel, pixelSizeHorizontal, pixelSizeVertical, widthPixel } from '../../utils/ResponsiveStyle';

const SchduleScreen = ({navigation, route}) => {
  const items = route.params;

  const [selected, setSelected] = useState('2023-04-19');

  return (
    <>
    <View style={styles.header}>
        <Back onPress={navigation.goBack} width={widthPixel(40)} height={heightPixel(40)}/>
        <Text style={styles.Toptext}>Schedule</Text>
        <Setting width={widthPixel(40)} height={heightPixel(40)}/>
      </View>
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        // paddingBottom: pixelSizeVertical(20),
      }}>
      <StatusBar
        translucent
        backgroundColor="rgba(0,0,0,0)"
      />
      
      <View style={{marginHorizontal: pixelSizeHorizontal(24),marginTop:pixelSizeVertical(44)}}>
        <Calendar 
        theme={{
          backgroundColor: '#F5F5FF',
          calendarBackground: '#F5F5FF',
          textSectionTitleColor: '#101010',
          textSectionTitleDisabledColor: '#A7AFB2',
          // selectedDayBackgroundColor: '#101010',
          selectedDayTextColor: '#ffffff',
          todayTextColor: 'white',
          dayTextColor: '#101010',
          textDisabledColor: '#A7AFB2',
          dotColor: '#00adf5',
          selectedDotColor: 'red',
          arrowColor: '#4C4DDC',
          disabledArrowColor: '#A7AFB2',
          monthTextColor: '#101010',
          indicatorColor: 'blue',
          textDayFontFamily: 'Plus Jakarta Sans',
          textMonthFontFamily: 'Plus Jakarta Sans',
          textDayHeaderFontFamily: 'Plus Jakarta Sans',
          textDayFontWeight: '500',
          textMonthFontWeight: 'bold',
          textDayHeaderFontWeight: '500',
          textDayFontSize: fontPixel(12),
          textMonthFontSize: fontPixel(14),
          textDayHeaderFontSize: fontPixel(12)
        }}
        style={{borderRadius:8}}
         markingType='custom'
         markedDates={{
           [selected]:{selected: true, selectedColor: 'red',customStyles:{container:{backgroundColor:COLORS.lightBlue}}}
           
          //  ,
          // [selected]: {selected: true, disableTouchEvent: true,}
         }}
         
         onDayPress={day => {
           setSelected(day.dateString);
           console.log(day);
          }}
          // markedDates={{
            
          // }}

          
          />
      </View>

<Schedule/>

     
    </ScrollView>
</>
  );
};

const styles = StyleSheet.create({
  // btn: {
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: pixelSizeVertical(10),
  //   backgroundColor: COLORS.lightBlue,
  //   borderRadius: 12,
  // },

  // priceTag: {
  //   height: heightPixel(40),
  //   alignItems: 'center',
  //   marginLeft: pixelSizeHorizontal(40),
  //   paddingLeft: pixelSizeHorizontal(20),
  //   flex: 1,
  //   backgroundColor: COLORS.secondary,
  //   borderTopLeftRadius: 20,
  //   borderBottomLeftRadius: 20,
  //   flexDirection: 'row',
  // },
  // headerImage: {
  //   marginTop: pixelSizeVertical(36),
  //   marginBottom: pixelSizeVertical(16),
  //   height: heightPixel(250),
  //   overflow: 'hidden',
  //   marginHorizontal: pixelSizeHorizontal(24),
  //   borderRadius: 8,
  // },
  header: {
    marginTop: pixelSizeVertical(40),
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: pixelSizeHorizontal(24),
    justifyContent: 'space-between',
  },
  Toptext: {
    color: '#101010',
    fontSize: fontPixel(16),
    fontFamily: 'PlusJakartaSans-Bold',
  },
  // detailsText: {
  //   marginTop: pixelSizeVertical(16),
  //   flexDirection: 'row',
  // },
  // d1: {
  //   fontSize: fontPixel(16),
  //   fontFamily: 'PlusJakartaSans-Bold',
  //   color: '#101010',
  // },
  // d2: {flex: 1, flexDirection: 'row', gap: 10, marginTop: pixelSizeVertical(8)},
  // d3: {
  //   color: '#878787',
  //   fontSize: fontPixel(12),
  //   fontFamily: 'PlusJakartaSans-Regular',
  // },
  // d4: {
  //   fontSize: fontPixel(14),
  //   fontFamily: 'PlusJakartaSans-Bold',
  //   color: COLORS.lightBlue,
  // },
  // text: {marginTop: pixelSizeVertical(16)},
  // d6: {
  //   color: '#101010',
  //   fontSize: fontPixel(14),
  //   fontFamily: 'PlusJakartaSans-Bold',
  // },
  // d7: {
  //   fontSize: fontPixel(12),
  //   fontFamily: 'PlusJakartaSans-Regular',
  //   color: COLORS.grey,
  // },
  // d8: {marginTop: pixelSizeVertical(16)},
  // preview: {
  //   fontSize: fontPixel(14),
  //   fontFamily: 'PlusJakartaSans-Bold',
  //   color: '#101010',
  // },
  // previewImg: {flex: 1, flexDirection: 'row', gap: 10, marginTop: 8},
  // BtnColor: {
  //   color: COLORS.white,
  //   fontSize: fontPixel(18),
  //   fontWeight: 'bold',
  //   paddingVertical: pixelSizeVertical(16),
  // },
});

export default SchduleScreen;
