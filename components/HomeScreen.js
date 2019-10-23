import React, { Component } from 'react';
import { Easing,Text, Image, Animated,TouchableOpacity, StyleSheet, View, ScrollView,TouchableHighlight } from 'react-native';
import InviteCard from './InviteCard';


class HomeScreen extends Component {
  render() {
    return (
      <View>
        <InviteCard id = "some ID"  name="fake name" date="fake date" />
      </View>
    )
  }
}


export default HomeScreen;