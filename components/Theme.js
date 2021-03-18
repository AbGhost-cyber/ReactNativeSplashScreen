import { createText, createTheme } from "@shopify/restyle";
import FontsMappper from "../constants/FontsMappper";

const theme = createTheme({
  colors: {
    mainBackground: palette.white,
    cardPrimaryBackground: palette.purplePrimary,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      fontFamily: FontsMappper.SF_PRO_BOLD,
      color: "white",
      textAlign: "center",
      lineHeight: 80,
    },
    title1: {
      fontSize: 28,
      fontFamily: FontsMappper.SF_PRO_SEMI,
      color: "#0C0D34",
    },
    title2: {
      fontSize: 24,
      fontFamily: FontsMappper.SF_PRO_SEMI,
      color: "#0C0D34",
      lineHeight: 30,
    },
    body: {
      fontSize: 16,
      fontFamily: FontsMappper.SF_PRO,
      color: "rgba(12,12,52, 0.7)",
      lineHeight: 30,
    },
  },
  breakpoints: {},
});

export const Text = createText();

export default theme;
