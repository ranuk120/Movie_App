import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const CastCard = () => {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    backgroundColor: 'red',
  },
});
export default CastCard;
