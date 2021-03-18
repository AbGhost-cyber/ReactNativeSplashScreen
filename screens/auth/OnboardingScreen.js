import React, { useRef } from "react";
import { View, StyleSheet, ScrollView, Dimensions, Text } from "react-native";
import {
  useValue,
  onScrollEvent,
  interpolateColor,
  useScrollHandler,
} from "react-native-redash/lib/module/v1";
import Animated, { divide, multiply } from "react-native-reanimated";

import Slide, { SLIDER_HEIGHT, BORDER_RADIUS } from "../../components/Slide";
import Subslide from "../../components/Subslide";
import Dot from "../../components/Dot";

const { width } = Dimensions.get("window");


const slides = [
  {
    label: "Relaxed",
    color: "#f2b4b9",
    description:
      "Confused about your outfit? Don't worry find the best outfit here!",
    title: "Find Your Outfits",
    picture: require("../../assets/1.jpeg"),
  },
  {
    label: "Playful",
    color: "#fbbb1f",
    description:
      "Hating the clothes in yout wardrobe? Explore hundreds of outfit",
    title: "Hear it First, Wear it First",
    picture: require("../../assets/2.jpeg"),
  },
  {
    label: "Eccentric",
    color: "#04a5b2",
    description:
      "Create your individual & unique style and look amazing everyday",
    title: "Your Style, Your Way",
    picture: require("../../assets/3.jpeg"),
  },
  {
    label: "Funky",
    color: "#071524",
    description:
      "Discover the latest trends in fashion and explore your personality",
    title: "Look Good, Feel Good",
    picture: require("../../assets/4.jpeg"),
  },
];
const OnBoardingScreen = (props) => {
  const scroll = useRef(null);
  const { scrollHandler, x } = useScrollHandler();
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
          ref={scroll}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          scrollEventThrottle={1}
          {...scrollHandler}
        >
          {slides.map((slide, index) => (
            <Slide
              label={slide.label}
              right={index % 2}
              key={index}
              picture={slide.picture}
            />
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
        <View style={styles.footerContainer}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} index={index} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              flexDirection: "row",
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
                onPress={() => {
                  if (scroll.current) {
                    scroll.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
              />
            ))}
          </Animated.View>
        </View>
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
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  slider: {
    height: SLIDER_HEIGHT,
    borderBottomRightRadius: BORDER_RADIUS,
  },
});

export default OnBoardingScreen;
