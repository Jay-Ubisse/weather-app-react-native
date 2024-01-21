import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { ImageBackground, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import SearchInput from './components/SearchInput';
import getImageForWeather from './utils/getImageForWeather';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: 'Maputo',
    };
  }
  handleUpdateLocation = city => {
    this.setState({
      location: city,
    });
  };

  render() {
    const { location } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <ImageBackground
          source={getImageForWeather('Clear')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>
            <Text style={[styles.textStyle, styles.largeText]}>{location}</Text>
            <Text style={[styles.textStyle, styles.smallText]}>Céu Nublado</Text>
            <Text style={[styles.textStyle, styles.normalText]}>24° C</Text>
            <SearchInput
              placeholder='Pesquise qualquer cidade aqui...'
              onSubmit={this.handleUpdateLocation}
            />
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  textStyle: {
    textAlign: 'center',
    color: 'white'
  },
  largeText: {
    fontSize: 44,
  },
  normalText: {
    fontSize: 30,
  },
  smallText: {
    fontSize: 18,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
