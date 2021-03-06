import React, { useState } from "react";
import { StyleSheet } from "react-native";
import FashionNavigation from "./navigation/FashionNavigation";
import * as Font from "expo-font";
import { enableScreens } from "react-native-screens";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "@shopify/restyle";

import Theme from "./components/Theme";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    "sf-pro-bold": require("./assets/fonts/SF-Pro-Display-Bold.otf"),
    "sf-pro-semi": require("./assets/fonts/SF-Pro-Display-Semibold.otf"),
    "sf-pro-regular": require("./assets/fonts/SF-Pro-Display-Regular.otf"),
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
  return (
    <ThemeProvider theme={Theme}>
      <FashionNavigation />;
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
