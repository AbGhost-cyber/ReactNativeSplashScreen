import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import OnBoardingScreen from "../screens/auth/OnboardingScreen";

const AuthenticationNavigator = createStackNavigator(
  {
    OnBoarding: OnBoardingScreen,
  },
  {
    defaultNavigationOptions: {
      headerShown: false,
    },
  }
);

export default createAppContainer(AuthenticationNavigator);
