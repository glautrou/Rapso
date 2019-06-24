/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View } from 'react-native';

type Props = {};
const SearchResultScreen = class SearchResultScreen extends React.Component<Props> {
  static navigationOptions = {
    headerTitle: 'Search'
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>SearchResultScreen</Text>
      </View>
    );
  }
};

export default SearchResultScreen;
