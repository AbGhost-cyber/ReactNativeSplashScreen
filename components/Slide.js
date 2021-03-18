import React from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";

import FontsMappper from "../constants/FontsMappper";
import Text from "../components/Theme"

const { width, height } = Dimensions.get("window");
export const SLIDER_HEIGHT = 0.61 * height;
export const BORDER_RADIUS = 75;

const Slide = (props) => {
  const transform = [
    { translateY: (SLIDER_HEIGHT - 100) / 2 },
    { translateX: props.right ? width / 2 - 50 : -width / 2 + 50 },
    { rotate: props.right ? "-90deg" : "90deg" },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.underlay}>
        <Image source={props.picture} style={styles.picture} />
      </View>
      <View style={{ ...styles.titleContainer, transform: transform }}>
        <Text>{props.label}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width,
    overflow: "hidden",
  },
  picture: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  title: {
    fontSize: 80,
    fontFamily: FontsMappper.SF_PRO_BOLD,
    color: "white",
    textAlign: "center",
    lineHeight: 80,
  },
  titleContainer: {
    height: 100,
    justifyContent: "center",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
  },
});

export default Slide;
