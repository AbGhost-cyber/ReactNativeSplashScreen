import React, { useState } from "react";
import { StyleSheet } from "react-native";
import FashionNavigation from "./navigation/FashionNavigation";
import * as Font from "expo-font";
import { enableScreens } from "react-native-screens";
import AppLoading from "expo-app-loading";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "sf-pro-bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    "sp-pro-semi": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
    "sp-pro-regular": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
  });
};

export default function App() {
  const [fontIsLoaded, setFontIsLoaded] = useState(false);
  if (!fontIsLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontIsLoaded(true)}
        onError={console.warn}
      />
    );
  }
  return <FashionNavigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
