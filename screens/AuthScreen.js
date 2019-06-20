/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, Button } from "react-native";

const AuthScreen = props => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Auth Screen</Text>
      <Button title="Go back" onPress={() => this.props.navigation.goBack()} />
    </View>
  );
};

export default AuthScreen;
