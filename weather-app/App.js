import React from 'react';
import { StyleSheet, Text, View, ActivityInidcator, StatusBar } from 'react-native';
import Weather from './Weather';

const API_KEY = "e32b41f0b078591f0e041e8a127d34de";

export default class App extends React.Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    name: null
  };
  componentDidMount() {
     navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      err => {
        this.setState({
          error: err
        })
      }
    );
  }
  _getWeather= (lat, lon) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        name:json.weather[0].main,
        isLoaded: true
      })
    });
  }
  render() {
    const { isLoaded, error, temperature, name } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        { isLoaded ? <Weather weatherName={name} temp={ Math.floor(temperature - 273.15)}/> : 
        <View style={styles.loading}>
          <Text style={styles.loadingText}>Getting the weather</Text>
          {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  errorText: {
    color: "red",
    backgroundColor: "transparent",
    marginBottom: 40
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    paddingLeft: 25
  },
    loadingText: {
    fontSize: 38,
    marginBottom: 100
  }

});
