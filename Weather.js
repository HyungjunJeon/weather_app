import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#373B44", " #4286f4"],
    title: "Thunderstorm in the house",
    subtitle: "Actually, outside of the house",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#89F7FE", " #66A6FF"],
    title: "Drizzle",
    subtitle: "Is like rain, but gay🌈",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#00C6FB", " #005BEA"],
    title: "Raining like a MF",
    subtitle: "For more info look outside",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#7DE2FC", " #B9B6E5"],
    title: "Cold as balls",
    subtitle: "Do you want to build a snowman? Fuck no.",
  },
  Mist: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", " #D39D38"],
    title: "Mist!",
    subtitle: "It's like you have no glasses on",
  },
  Smoke: {
    iconName: "weather-fog",
    gradient: ["#4DA0B0", " #D39D3B"],
  },
  Haze: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", " #D39D3B"],
    title: "Haze",
    subtitle: "Just don't go outside",
  },
  Dust: {
    iconName: "weather-hail",
    gradient: ["#4DA0B0", " #D39D3B"],
    title: "Dusty",
    subtitle: "Thanks a lot china",
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
    title: "Sunny as fuck",
    subtitle: "Go get your ass burnt",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#4DA0B0", " #D39D38"],
    title: "Clouds",
    subtitle: "I know, fucking boring",
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

      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subtitle}>
          {weatherOptions[condition].subtitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
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
  title: {
    color: "white",
    fontSize: 44,
    fontWeight: "300",
    marginBottom: 10,
  },
  subtitle: {
    fontWeight: "600",
    color: "white",
    fontSize: 24,
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
