import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  StackActions,
  NavigationActions
} from "react-navigation";

import AuthLoadingScreen from "./screens/AuthLoadingScreen";
import AuthScreen from "./screens/AuthScreen";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import DevicesScreen from "./screens/DevicesScreen";

const AuthStack = createStackNavigator({
  Auth: AuthScreen
});

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  About: AboutScreen
});

const DevicesStack = createStackNavigator({
  Devices: DevicesScreen
});

const AppStack = createBottomTabNavigator({
  Home: HomeStack,
  Devices: DevicesStack
});

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: "AuthLoading"
  }
);

const AppNavigation = createAppContainer(RootStack);

export default AppNavigation;
