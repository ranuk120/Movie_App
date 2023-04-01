import {CommonActions} from '@react-navigation/native';
import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import CommonStyles from '../Common/CommonStyles';
import {fonts} from '../../assets/Fonts';

const GenreCard = ({GenreName, active, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        backgroundColor: active ? CommonStyles.colors.blue : '#fff',
      }}
      //   onPress={(GenreName) => active? CommonStyles.colors.blue : '#fff'}
      onPress={() => onPress(GenreName)}
      activeOpacity={0.1}
    >
      <Text
        style={{
          ...styles.txtStyles,
          color: active ? CommonStyles.colors.grey1 : '#959dc7',
        }}
      >
        {GenreName}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    backgroundColor: '#fcfcfc',
    borderRadius: 5,
    marginHorizontal: 15,
    width: CommonStyles.width * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },

  txtStyles: {
    padding: 5,
    fontSize: 15,
    color: '#959dc7',
    // fontFamily: 'DeliciousHandrawn-Regular',
  },
});

export default GenreCard;
