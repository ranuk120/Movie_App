import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  onPress,
  TouchableOpacity,
} from 'react-native';
import {getNowPlayingMovies, getSearchMovies} from '../Services/MovieService';
import {getUpcomingMovies} from '../Services/MovieService';
import {TextInput} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CommonStyles from '../Common/CommonStyles';
import GenreCard from '../Components/GenreCard';
import MovieCard from '../Components/MovieCard';
import Favorites from './Favorites';
import {AddOnList} from '../Components/AddOnList';
// import DrawerNavigation from '../Navigation/DrawerNavigation';

import Icon from 'react-native-vector-icons/AntDesign';
import Search from 'react-native-vector-icons/MaterialCommunityIcons';

// import {fetchMovies} from '../Services/MovieService1';

const Genres = ['All', 'Action', 'Comedy', 'Romance', 'Horror', 'Sci-Fi'];

const HomeScreen = ({navigation}) => {
  const [selectedItem, setSelectedItem] = React.useState('All');
  const [nowPlayingMovies, setNowPlayingMovies] = useState(true);
  const [upcomingMovies, setUpcomingMovies] = useState(true);
  // const [searchMovies, setSearchMovies] = useState(true);

  // const [movies, setMovies] = useState([]);
  // const [searchNow, setSearchNow] = useState(false);
  // const [loading, setLoading] = useState(true);
  // const [searchTerm, setSearchTerm] = useState('');

  const [text, onChangeText] = React.useState('');

  useEffect(() => {
    getNowPlayingMovies().then(movieResponse =>
      setNowPlayingMovies(movieResponse.data),
    );
  }, []);

  useEffect(() => {
    getUpcomingMovies().then(movieResponse =>
      setUpcomingMovies(movieResponse.data),
    );
  }, []);

  /*  useEffect(() => {
    setLoading(true);
    fetchMovies(searchTerm, movies).then(data => {
      setMovies(data);
      setLoading(false);
    });
  }, [searchNow]); */

  /*  useEffect(() => {
    getSearchMovies().then(movieResponse =>
      setSearchMovies(movieResponse.data),
    );
  }, []); */

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <View>
        <Search name="movie-search-outline" size={30} color="blue" />
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="  Search Movies"
          // dataDetectorTypes={searchMovies.results}
        />
      </View> */}
      <View style={styles.movieHeaderView1}>
        <View style={styles.movieHeaderView2}>
          <TouchableOpacity
            style={styles.movieTouchView}
            // onPress={() => navigation.navigate(DrawerNavigation)}
          >
            <Icon
              name="bars"
              color="#c5cbe6"
              style={styles.menuIcon}
              size={25}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.movieHeaderView}>
          <View style={styles.movieTitleView}>
            <Text style={styles.movieTitleText}>369M</Text>
            <Icon name="play" size={25} color="#de0910" />
            <Text style={styles.movieTitleText}>VIES</Text>
          </View>
          <Text style={styles.movieTitleText1}>
            Watch Your Favourite Movies Online
          </Text>
        </View>
      </View>

      <View style={styles.searchBar}>
        <TextInput
          placeholder="  Search Movies"
          placeholderTextColor="#4845b0"
          style={styles.searchText}
          // cursorColor={'red'}
        />
        <Icon name="search1" size={15} style={styles.searchBarIcon} />
      </View>

      <FlatList
        data={Genres}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GenreCard
            GenreName={item}
            active={item === selectedItem ? true : false}
            onPress={GenreName => setSelectedItem(GenreName)}
          />
        )}
      />

      <View style={styles.headerStyle}>
        <Text style={styles.txt1}>NOW PLAYING</Text>
        <TouchableOpacity>
          <Text style={styles.txt}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
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
            onPress={() =>
              navigation.navigate('MovieScreen1', {movieId: item.id})
            }
          />
        )}
      />
      <View style={styles.headerStyle}>
        <Text style={styles.txt1}>COMING SOON</Text>
        <TouchableOpacity>
          <Text style={styles.txt}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={upcomingMovies.results}
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
            onPress={() =>
              navigation.navigate('MovieScreen1', {movieId: item.id})
            }
          />
        )}
      />
      <View style={styles.bottomDescriptionView}>
        <Text style={styles.bottomDescriptionText}>
          369Movies is a Free Movies streaming site with zero ads. We let you
          watch movies online without having to register or paying, with over
          1000 movies and TV-Series. You can also Download full movies from
          MoviesCloud and watch it later if you want.
        </Text>
        <Text style={styles.bottomDescriptionText1}>@369MOVIES</Text>
      </View>
      <View style={styles.bottomDescriptionView1}>
        <Text style={styles.bottomDescriptionText2}>
          Copyright 2023 369Movies.net | All Rights Reserved
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: '100%',
    // width: '100%',
    backgroundColor: '#100b30',
  },

  txt1: {
    color: CommonStyles.colors.primary,
    fontSize: 20,
    fontFamily: 'Roboto-Italic',
  },

  txt: {
    color: CommonStyles.colors.primary,
  },

  headerStyle: {
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  searchBar: {
    // backgroundColor: 'blue',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    width: CommonStyles.width * 0.9,
    borderColor: '#4845b0',
    borderWidth: 1,
    left: 13,
    top: 5,
    borderRadius: 10,
    marginTop: 10,
  },
  searchBarIcon: {
    position: 'absolute',
    left: 10,
    color: '#4845b0',
  },
  searchText: {
    // backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: CommonStyles.width * 0.9,
    paddingLeft: 30,
    color: 'white',
  },
  movieHeaderView: {
    // backgroundColor: '#1a1c57',
    // marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',
    height: 70,
    paddingBottom: 9,
    // paddingTop: 20,
    left: 70,
  },
  movieTitleText: {
    color: '#c5cbe6',
    fontSize: 30,
    paddingHorizontal: 2,
    // paddingTop: 20,
  },
  movieTitleView: {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingTop: 20,
    // marginTop: 10,
  },
  movieTitleText1: {
    color: '#c5cbe6',
    fontSize: 10.5,
  },
  movieHeaderView2: {
    // marginTop: 40,
    left: 20,
    top: 20,
  },
  movieHeaderView1: {
    flexDirection: 'row',
    backgroundColor: '#1a1c57',
    // justifyContent: 'center',
  },
  bottomDescriptionView: {
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
    padding: 5,
    margin: 5,
  },
  bottomDescriptionText: {
    color: '#0a70f5',
  },
  bottomDescriptionText1: {
    color: '#0a1df5',
    padding: 10,
  },
  bottomDescriptionText2: {
    color: '#a3153b',
    fontSize: 17,
    marginBottom: 10,
    marginTop: 10,
  },
  bottomDescriptionView1: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#242336',
  },
});

export default HomeScreen;
