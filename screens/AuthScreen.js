/**
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View, Button, TextInput, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

type Props = {};
class AuthScreen extends React.Component<Props> {
  static navigationOptions = {
    title: 'Please sign in'
  };

  state = {
    loading: false,
    username: '',
    password: ''
  };

  render() {
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={username => this.setState({ username })}
          value={this.state.username}
          textContentType={'username'}
          placeholder="Username"
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          textContentType={'password'}
          secureTextEntry={true}
          placeholder="Password"
        />
        {!this.state.loading && (
          <Button title="Sign in" onPress={this.signInAsync} />
        )}
        {this.state.loading && (
          <>
            <Button title="Sign in" disabled={true} />
            <ActivityIndicator />
          </>
        )}
      </View>
    );
  }

  signInAsync = async () => {
    this.setState({ loading: true });
    await AsyncStorage.setItem('userToken', 'abc');
    this.setState({ loading: false });
    this.props.navigation.navigate('App');
  };
}

export default AuthScreen;
