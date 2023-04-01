import {CommonActions} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  onPress,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Foundation';
import Icon1 from 'react-native-vector-icons/FontAwesome';

import CommonStyles from '../Common/CommonStyles';
import {fonts} from '../../assets/Fonts';
import ImageIndex from '../Common/ImageIndex';

import {getPoster} from '../Services/MovieService';

const movieCard = ({
  title,
  poster,
  language,
  voteAverage,
  voteCount,
  onPress,
}) => {
  const [like, setLike] = useState(false);

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <ImageBackground
        style={styles.container}
        imageStyle={{borderRadius: 20}}
        source={{uri: getPoster(poster)}}
      >
        <View style={styles.imdbContainer}>
          <Image source={ImageIndex.IMDB} />
          <Text style={styles.imdbRating}>{voteAverage}</Text>
        </View>
        <View style={styles.heartFavourite}>
          <TouchableOpacity onPress={() => setLike(!like)}>
            <Icon1
              name={like ? 'heart' : 'heart-o'}
              // name="heart-o"
              size={17}
              color={like ? '#e31231' : CommonStyles.colors.white}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.movieInformation}>
        <View>
          <Text style={styles.title}>{title}</Text>
          {/* <Text style={styles.movieLanguage}>{language}</Text> */}
        </View>
        <View style={styles.rating}>
          <Icon name="heart" color="red" />
          <Text style={styles.heart}>{voteCount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    height: 370,
    width: 170,
    marginHorizontal: 10,
    borderRadius: 20,
  },
  container: {
    height: 280,
    width: 170,
    borderRadius: 20,
    borderColor: '#cad5e8',
    borderWidth: 2,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingTop: 15,
  },
  movieInformation: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 4,
    paddingTop: 5,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heart: {
    paddingHorizontal: 3,
    color: 'white',
  },
  imdbContainer: {
    backgroundColor: '#FFC107',
    width: 70,
    height: 27,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    alignSelf: 'flex-end',
    borderTopRightRadius: 13,
  },
  imdbRating: {
    color: CommonStyles.colors.red,
  },
  heartFavourite: {
    top: 225,
    left: 10,
    // position: 'absolute',
  },
  movieLanguage: {
    // color: 'red',
  },
  /*  rating: {
    // backgroundColor: 'red',
    width: 50,
    height: 50,
  }, */
  title: {
    color: 'white',
  },
});

export default movieCard;
