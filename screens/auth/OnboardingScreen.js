import React from "react";
import { View, StyleSheet, ScrollView, Dimensions, Text } from "react-native";
import {
  useValue,
  onScrollEvent,
  interpolateColor,
} from "react-native-redash/lib/module/v1";
import Animated, { multiply } from "react-native-reanimated";

import Slide, { SLIDER_HEIGHT } from "../../components/Slide";
import Subslide from "../../components/Subslide";

const { width } = Dimensions.get("window");
const BORDER_RADIUS = 75;

const slides = [
  {
    label: "Relaxed",
    color: "#BFEAF5",
    description:
      "Confused about your outfit? Don't worry find the best outfit here!",
    title: "Find Your Outfits",
  },
  {
    label: "Playful",
    color: "#BEECC4",
    description:
      "Hating the clothes in yout wardrobe? Explore hundreds of outfit",
    title: "Hear it First, Wear it First",
  },
  {
    label: "Eccentric",
    color: "#FFE4D9",
    description:
      "Create your individual & unique style and look amazing everyday",
    title: "Your Style, Your Way",
  },
  {
    label: "Funky",
    color: "#FFDDDD",
    description:
      "Discover the latest trends in fashion and explore your personality",
    title: "Look Good, Feel Good",
  },
];
const OnBoardingScreen = (props) => {
  const x = useValue(0);
  const onScroll = onScrollEvent({ x });
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map((slide) => slide.color),
  });
  return (
    <View style={styles.container}>
      <Animated.View
        style={{ ...styles.slider, backgroundColor: backgroundColor }}
      >
        <Animated.ScrollView
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...{ onScroll }}
        >
          {slides.map((slide, index) => (
            <Slide label={slide.label} right={!(index % 2)} key={index} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor: backgroundColor,
          }}
        />
        <Animated.View
          style={{
            ...styles.footerContainer,
            width: width * slides.length,
            transform: [
              {
                translateX: multiply(x, -1),
              },
            ],
          }}
        >
          {slides.map((slide, index) => (
            <Subslide
              title={slide.title}
              key={index}
              description={slide.description}
              last={index === slides.length - 1}
            />
          ))}
        </Animated.View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  footer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: BORDER_RADIUS,
    flexDirection: "row",
  },
  slider: {
    height: SLIDER_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
});

export default OnBoardingScreen;
