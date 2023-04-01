import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  onPress,
  ImageBackground,
} from 'react-native';
import CommonStyles from '../Common/CommonStyles';
import MovieCard from '../Components/MovieCard';
import {getNowPlayingMovies} from '../Services/MovieService';
import {getPoster} from '../Services/MovieService';

const MovieScreen = ({poster}) => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState(true);

  useEffect(() => {
    getNowPlayingMovies().then(movieResponse =>
      setNowPlayingMovies(movieResponse.data),
    );
  }, []);

  return (
    <View style={styles.container}>
      {/* <FlatList
        data={nowPlayingMovies.results}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <MovieCard
            title={item.title}
            lanuage={item.original_language}
            voteAverage={item.vote_average}
            voteCount={item.vote_count}
            poster={item.poster_path}
          />
        )}
      /> */}
      <ImageBackground
        style={styles.container1}
        imageStyle={{borderRadius: 20}}
        source={{uri: getPoster(poster)}}
      ></ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    height: 280,
    width: 170,
    borderRadius: 20,
    borderColor: '#cad5e8',
    borderWidth: 2,
  },
});

export default MovieScreen;
