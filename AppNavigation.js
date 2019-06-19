import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  StackActions,
  NavigationActions
} from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import DevicesScreen from "./screens/DevicesScreen";

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     About: AboutScreen
//   },
//   {
//     initialRouteName: "Home"
//   }
// );

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  About: AboutScreen
});

const DevicesStack = createStackNavigator({
  Devices: DevicesScreen
});

const RootStack = createBottomTabNavigator({
  Home: HomeStack,
  Devices: DevicesStack
});

const AppNavigation = createAppContainer(RootStack);

export default AppNavigation;
