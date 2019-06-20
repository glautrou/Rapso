/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

type Props = {};
const AboutScreen = class AboutScreen extends React.Component<Props> {
  static navigationOptions = {
    headerTitle: "About",
    headerRight: <Text>1.0</Text>
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>About Screen</Text>
        <Button title="Sign out" onPress={this.signOutAsync} />
      </View>
    );
  }

  signOutAsync = async () => {
    await AsyncStorage.removeItem("userToken");
    this.props.navigation.navigate("Auth");
  };
};

export default AboutScreen;
