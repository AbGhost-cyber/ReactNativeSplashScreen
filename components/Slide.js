import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";

const { width, height } = Dimensions.get("window");
export const SLIDER_HEIGHT = 0.61 * height;

const Slide = (props) => {
  const transform = [
    { translateY: (SLIDER_HEIGHT - 100) / 2 },
    { translateX: props.right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: props.right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={{ ...styles.titleContainer, transform: transform }}>
        <Text style={styles.title}>{props.label}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width,
  },
  title: {
    fontSize: 80,
    fontFamily: "sf-pro-bold",
    color: "white",
    textAlign: "center",
    lineHeight: 80,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
});

export default Slide;
