import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';
// import assets from '../assets';
import CommonStyles from '../Common/CommonStyles';
import {DeliveryBike} from '../src/Icons/DeliveryBike';

export const AddOnList = ({
  title,
  customStyle,
  customTextStyle,
  onPressBtn,
  icon,
  image,
  title1,
}) => {
  return (
    <TouchableOpacity style={[styles.container]} onPress={onPressBtn}>
      <Image style={styles.imagestyle} source={image} />
      <Text style={[styles.txt1]}>{title}</Text>
      <Text style={[styles.txt2]}>{title1}</Text>
      <View style={[styles.touchbutton, customStyle]}>
        <View style={[styles.insidetouchbutton]}></View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    // width: 200,
    // justifyContent: 'flex-start',
    padding: 4,
  },

  imagestyle: {
    width: 25,
    height: 25,
  },

  txt1: {
    paddingLeft: 15,
    // paddingRight: 50,
    width: 230,
  },

  txt2: {
    // paddingLeft: 15,
    paddingRight: 20,
  },

  touchbutton: {
    width: 20,
    height: 20,
    borderWidth: 0.5,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(212, 213, 218, 0.7)',
    // backgroundColor: 'red',
  },

  txt3: {
    // paddingLeft: 30,
  },

  insidetouchbutton: {
    borderColor: 'white',
    borderWidth: 1,
    width: 14,
    height: 14,
    borderRadius: 30,
    // backgroundColor: 'red',
    shadowColor: 'rgba(254, 114, 76, 0.4)',
  },
});
