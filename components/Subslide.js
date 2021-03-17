import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";

import FontsMapper from "../constants/FontsMappper";

const Subslide = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.desc}>{props.description}</Text>
      <Button
        label={props.last ? "Let's get started" : "Next"}
        variant={props.last ? "primary" : "default"}
        onPress={props.onPress}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
  },
  desc: {
    fontFamily: FontsMapper.SF_PRO,
    fontSize: 16,
    color: "#0C0D34",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 40,
  },
  title: {
    fontFamily: FontsMapper.SF_PRO_BOLD,
    fontSize: 24,
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 12,
  },
});

export default Subslide;
