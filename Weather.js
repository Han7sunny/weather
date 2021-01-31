import React from "react";
import { View, Text, StyleSheet, StatusBar} from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#4B79A1", "#283E51"],
        title: "Thunderstorm",
        subtitle: "Be careful!"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#649173", "#dbd5a4"],
        title: "Drizzle",
        subtitle: "Take your umbrella"
    },
    Dust: {
        iconName: "weather-windy",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dust",
        subtitle: "Take your mask :X"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#808080", "#3fada8"],
        title: "Rain",
        subtitle: "Take your umbrella"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#e6dada", "#274046"],
        title: "Snow",
        subtitle: "Is it your first snow?"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#0575e6", "#021b79"],
        title: "Atmosphere",
        subtitle: "Look at the sky"
    }, 
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#2F80ED", "#56CCF2"],
        title: "Clear",
        subtitle: "Have a good day :)"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#606c88", "#3f4c6b"],
        title: "Clouds",
        subtitle: "Don't be gloomy :)"
    },
    Haze: {
        iconName: "weather-hazy",
        gradient: ["#C9D6FF", "#E2E2E2"],
        title: "Haze",
        subtitle: "Drive safely!"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#8e9eab", "#eef2f3"],
        title: "Mist",
        subtitle: "Drive safely!"
    },
    Smoke: {
        iconName: "weather-hail",
        gradient: ["#3C3B3F", "#605C3C"],
        title: "Smoke",
        subtitle: "Take your mask :X"
    },
    Fog: {
        iconName: "weather-fog",
        gradient: ["#8e9eab", "#eef2f3"],
        title: "Fog",
        subtitle: "Drive safely!"
    },
    Sand: {
        iconName: "weather-hail",
        gradient: ["#d1913c", "#ffd194"],
        title: "Sand",
        subtitle: "Take your mask :X"
    },
    Ash: {
        iconName: "weather-fog",
        gradient: ["#2c3e50", "#bdc3c7"],
        title: "Ash",
        subtitle: "Take your mask :X"
    },
    Squall: {
        iconName: "weather-windy",
        gradient: ["#141e30", "#243b55"],
        title: "Squall",
        subtitle: "Be careful!"
    },
    Tornado: {
        iconName: "weather-tornado",
        gradient: ["#20002c", "#cbb4d4"],
        title: "Tornado",
        subtitle: "Prepare for a Tornado"
    }
}

export default function Weather({ temp, condition }){
    return (
        <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content"/>
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={80} color="white"/>
                <Text style={styles.temp}>{temp}</Text>
            </View>
            <View style={styles.halfContainer}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Dust", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Smoke", "Fog", "Sand", "Ash", "Squall", "Tornado"]).isRequired
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 30,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subtitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "600"
    }
});