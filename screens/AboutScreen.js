/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

type Props = {};
const AboutScreen = class AboutScreen extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
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
