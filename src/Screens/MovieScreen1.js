import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  onPress,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CastCard from '../Components/CastCard';
import CommonStyles from '../Common/CommonStyles';

import {GetMovieById, getPoster} from '../Services/MovieService';

const MovieScreen1 = ({route, navigation, voteCount}) => {
  const {movieId} = route.params;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    GetMovieById(movieId).then(Response => setMovie(Response.data));
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.mainViewContainer}>
        <View style={styles.viewContainer}>
          <Image
            style={styles.moviePoster}
            source={{uri: getPoster(movie?.backdrop_path)}}
          />
          <Text style={styles.posterTitle}>{movie.title}</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate('HomeScreen')}
          >
            <Icon name="md-chevron-back-sharp" size={35} color={'white'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Icon name="share-social-sharp" size={30} color={'white'} />
          </TouchableOpacity>
        </View>
        <View style={styles.movieDescriptionView}>
          <View style={styles.genreTextView}>
            <Text style={styles.genreText}>
              Genre : {movie?.genres?.map(genre => genre?.name)?.join(' , ')}
            </Text>
            <Text style={styles.durationText}>
              Duration : {movie?.runtime} Minutes
            </Text>
          </View>
          <View style={styles.descriptionView}>
            <Text style={styles.descriptionTitle}> Runtime Story :</Text>
            <Text style={styles.movieDescription}>{movie?.overview}</Text>
            <Text style={styles.budget}>Budget: {movie?.budget} Dollors</Text>
            <Text style={styles.revenue}>Budget: {movie?.revenue} Dollors</Text>
            <Text style={styles.releaseData}>
              Release Date: {movie?.release_date}
            </Text>
          </View>
        </View>
        {/* <View>
          <Text>Cast</Text>
          <FlatList
            data={movie?.credits?.cast}
            keyExtractor={item => item?.credit_id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <CastCard />}
          />
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2e59',
  },
  mainViewContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: {
    // justifyContent: 'center',
    // backgroundColor: 'red',
    alignItems: 'center',
    paddingTop: 5,
  },
  moviePoster: {
    width: CommonStyles.width * 0.98,
    height: CommonStyles.height * 0.3,
    borderRadius: 20,
  },
  posterTitle: {
    paddingTop: 10,
    fontSize: 20,
    color: 'white',
  },
  backButton: {
    color: 'white',
    position: 'absolute',
    left: 16,
    top: 16,
  },
  shareButton: {
    color: 'white',
    position: 'absolute',
    right: 20,
    top: 20,
  },
  genreTextView: {
    // paddingTop: 5,
    marginTop: 10,
    paddingHorizontal: 11,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    height: CommonStyles.height * 0.1,
    width: CommonStyles.width * 0.95,
  },
  descriptionView: {
    width: CommonStyles.width * 0.94,
    // height: CommonStyles.height * 0.4,
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
    marginTop: 10,
  },
  budget: {
    paddingTop: 15,
    paddingLeft: 10,
    color: 'white',
  },
  revenue: {
    paddingLeft: 10,
    paddingTop: 5,
    color: 'white',
  },
  releaseData: {
    paddingLeft: 10,
    paddingTop: 5,
    color: 'white',
  },
  movieDescription: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: 'red',
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  genres: {
    color: 'white',
  },
  descriptionTitle: {
    color: '#9592f0',
    marginBottom: 10,
    fontSize: 17,
  },
  genreText: {
    color: 'white',
  },
  durationText: {
    color: 'white',
  },
  movieDescriptionView: {
    backgroundColor: '#26274d',
    marginTop: 10,
    paddingBottom: 25,
    borderRadius: 20,
    paddingHorizontal: 5,
    shadowOpacity: 50,
    shadowRadius: 5,
    shadowColor: 'white',
  },
});

export default MovieScreen1;
