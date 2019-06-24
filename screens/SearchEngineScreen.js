/**
 * @format
 * @flow
 */

import React, { Component, useState } from 'react';
import { Text, View, TextInput, Button, ActivityIndicator } from 'react-native';

const SearchEngineScreen = props => {
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState('');
  const [results, setResults] = useState(null);

  const search = criteria => {
    setLoading(true);
    alert(criteria);
    setResults(['Result 1', 'Result 2']);
    setLoading(false);
  };

  const viewResult = id => {
    props.navigation.navigate('SearchResultScreen');
  };

  return (
    <View>
      <Text>SearchEngineScreen</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={address => setAddress(address)}
        value={address}
        placeholder="Address"
      />
      <Text>Address : {address}</Text>
      {!loading && <Button title="Search" onPress={() => search(address)} />}
      {loading && (
        <>
          <Button title="Search" disabled={true} />
          <ActivityIndicator />
        </>
      )}
      {results && <Text>Results:</Text>}
      {results &&
        results.map(result => {
          return (
            <React.Fragment key={result}>
              <Text>- {result}</Text>
              <Button title="View" onPress={() => viewResult(result)} />
            </React.Fragment>
          );
        })}
    </View>
  );
};

SearchEngineScreen.navigationOptions = {
  headerTitle: 'Search address'
};

export default SearchEngineScreen;
