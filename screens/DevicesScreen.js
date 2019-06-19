/**
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text, View, Button } from "react-native";

type Props = {};
const DevicesScreen = class AboutScreen extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Devices Screen</Text>
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
};

export default DevicesScreen;
