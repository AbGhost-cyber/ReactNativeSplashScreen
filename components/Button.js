import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import FontsMappper from "../constants/FontsMappper";

const Button = (props) => {
  const backgroundColor =
    props.variant === "primary" ? "#2CB9B0" : "rgba(12,13,52,0.05)";
  const color = props.variant === "primary" ? "white" : "#0C0D34";
  return (
    <RectButton
      style={{ ...styles.container, backgroundColor: backgroundColor }}
      onPress={props.onPress}
    >
      <Text style={{ ...styles.label, color: color }}>{props.label}</Text>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 50,
    width: 245,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    fontFamily: FontsMappper.SF_PRO,
    textAlign: "center",
  },
});

export default Button;
