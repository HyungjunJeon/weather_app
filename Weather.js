import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", " #4286f4"],
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", " #66A6FF"],
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", " #005BEA"],
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", " #B9B6E5"],
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", " #D39D38"],
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", " #D39D3B"],
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", " #D39D3B"],
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", " #D39D3B"],
  },
  Fog: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", " #D39D3B"],
  },
  Sand: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", " #D39D3B"],
  },
  Ash: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", " #D39D3B"],
  },
  Squall: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", " #D39D3B"],
  },
  Tornado: {
    iconName: "weather-tornado",
    gradient: ["#4DA0B0", " #D39D3B"],
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#FF7300", " #FEF253"],
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#4DA0B0", " #D39D38"],
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={96}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={styles.halfContainer}></View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  conditon: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Mist",
    "Smoke",
    "Haze",
    "Dust",
    "Fog",
    "Sand",
    "Ash",
    "Squall",
    "Tornado",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 42,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
