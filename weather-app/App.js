import React from 'react';
import { StyleSheet, Text, View, ActivityInidcator, StatusBar } from 'react-native';
import Weather from './Weather';

export default class App extends React.Component {
  state = {
    isLoaded: false
  };
  componentDidMount() {
     navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          isLoaded: true
        });
      },
      err => {
        this.setState({
          error: err
        })
      }
    );
  }
  render() {
    const { isLoaded, error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        { isLoaded ? null : 
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
