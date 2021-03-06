import React from "react";
import { View, Text } from "react-native";
import Animated, { Extrapolate, interpolate } from "react-native-reanimated";

const Dot = (props) => {
  const { index, currentIndex } = props;
  const opacity = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [0.5, 1, 0.5],
    extrapolate: Extrapolate.CLAMP,
  });
  const scale = interpolate(currentIndex, {
    inputRange: [index - 1, index, index + 1],
    outputRange: [1, 1.25,1],
    extrapolate: Extrapolate.CLAMP,
  });
  return (
    <Animated.View
      style={{
        opacity: opacity,
        backgroundColor: "#2CB9B0",
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 8,
        transform: [{ scale }],
      }}
    ></Animated.View>
  );
};

export default Dot;
