import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherList = {
    Rain: {
        colors:["#00C6FB", "#006BEA"],
        title: "Rainy",
        subtitle: "For more info look outside",
        icon: 'weather-rainy'
    },
    Clear: {
        colors:["#FEF253", "#FF7300"],
        title: "Sunny",
        subtitle: "Go get your ass burnt",
        icon: 'weather-sunny'       
    },
    Thunderstorm: {
        colors:["#00ECBC", "#007ADF"],
        title: "Thunderstorm",
        subtitle: "Actually, outside of the house",
        icon: 'weather-lightning'       
    },   
    Clouds: {
        colors:["#D7D2CC", "#304352"],
        title: "Cloudy",
        subtitle: "brah brah",
        icon: 'weather-cloudy'       
    },
    Snow: {
        colors:["#7DE2FC", "#B9B6E5"],
        title: "Snowy",
        subtitle: "Do you want to build a snow man?",
        icon: 'weather-snowy'       
    },            
    Drizzle: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Actually, outside of the house",
        icon: 'weather-hail'       
    },
    Mist: {
        colors:["#89F7FE", "#66A6FF"],
        title: "Mist",
        subtitle: "Actually, outside of the house",
        icon: 'weather-rainy'       
    },
    Smoke: {
        colors:["#D7D2CC", "#304352"],
        title: "Smoke",
        subtitle: "Actually, outside of the house",
        icon: 'weather-fog'       
    },
    Haze: {
        colors:["#D7D2CC", "#304352"],
        title: "Haze",
        subtitle: "Actually, outside of the house",
        icon: 'weather-fog'       
    },
    Dust: {
        colors:["#D7D2CC", "#304352"],
        title: "Dust",
        subtitle: "Actually, outside of the house",
        icon: 'weather-fog'       
    },
    Fog: {
        colors:["#D7D2CC", "#304352"],
        title: "Fog",
        subtitle: "Actually, outside of the house",
        icon: 'weather-fog'       
    },
    Sand: {
        colors:["#D7D2CC", "#304352"],
        title: "Sand",
        subtitle: "Actually, outside of the house",
        icon: 'weather-fog'       
    },
    Ash: {
        colors:["#D7D2CC", "#304352"],
        title: "Ash",
        subtitle: "Actually, outside of the house",
        icon: 'weather-fog'       
    },
    Squall: {
        colors:["#D7D2CC", "#304352"],
        title: "Squall",
        subtitle: "Actually, outside of the house",
        icon: 'weather-hurricane'       
    },
    Tornado: {
        colors:["#D7D2CC", "#304352"],
        title: "Tornado",
        subtitle: "Actually, outside of the house",
        icon: 'weather-hurricane'       
    },                                                
}

function Weather( { temp, weatherName } ) {
    return(
        <LinearGradient
            colors={weatherList[weatherName].colors}
            style={styles.container}
        >
            <View style={styles.upper}>
                <MaterialCommunityIcons color="white" size={144} name={weatherList[weatherName].icon} />
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={styles.lower}>
                <Text style={styles.title}>{weatherList[weatherName].title}</Text>
                <Text style={styles.subtitle}>{weatherList[weatherName].subtitle}</Text>
            </View>        
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired
}

export default Weather;

const styles = StyleSheet.create({
    container: {
     flex: 1
    },
    upper: {
        flex: 1,
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: "transparent"
    },
    temp: {
        fontSize: 48,
        backgroundColor: "transparent",
        color: "white",
        marginTop: 10
    },
    lower: {
        flex: 1,
        alignItems: "flex-start",
        justifyContent: "flex-end",
        paddingLeft: 25
    },
    title: {
        fontSize: 38,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 10,
        fontWeight: "300"
    },
    subtitle: {
        fontSize: 24,
        backgroundColor: "transparent",
        color: "white",
        marginBottom: 24
    }
});