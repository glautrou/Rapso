import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
  createBottomTabNavigator,
  StackActions,
  NavigationActions
} from 'react-navigation';

import AuthLoadingScreen from './screens/AuthLoadingScreen';
import AuthScreen from './screens/AuthScreen';
import HomeScreen from './screens/HomeScreen';
import SearchEngineScreen from './screens/SearchEngineScreen';
import SearchResultScreen from './screens/SearchResultScreen';
import AboutScreen from './screens/AboutScreen';
import DevicesScreen from './screens/DevicesScreen';

const AuthStack = createStackNavigator({
  Auth: AuthScreen
});

const HomeStack = createStackNavigator({
  Home: HomeScreen
});

const SearchStack = createStackNavigator({
  SearchEngine: SearchEngineScreen,
  SearchResult: SearchResultScreen
});

const DevicesStack = createStackNavigator({
  Devices: DevicesScreen
});

const AboutStack = createStackNavigator({
  About: AboutScreen
});

const AppStack = createBottomTabNavigator({
  Home: HomeStack,
  Search: SearchStack,
  Devices: DevicesStack,
  About: AboutStack
});

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

const AppNavigation = createAppContainer(RootStack);

export default AppNavigation;
