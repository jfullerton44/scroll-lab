/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './components/HomeScreen';
import { Card } from 'react-native-paper';


export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
