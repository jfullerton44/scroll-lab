/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import {Text, Image, TouchableHighlight, TouchableOpacity, StyleSheet, View, Button} from 'react-native';
import dude from '../assets/boy.png';
import moment from 'moment';


export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <View>
          <Button
            title = "Create New Event"
            style = {alignSelf='center'}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flexDirection: 'column',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    paddingleft: 10,
    marginRight: 5,
    //marginTop: 10,
    height: 50,
    width: 315,
    backgroundColor: '#FFFFFF',
  },
  topContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 150,
    paddingBottom: 36,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 51,
  },
  nameText: {
    fontSize: 14,
    color: 'black',
    paddingTop: 10,
  },
  dateText: {
    fontSize: 14,
    opacity: .5,
  },
  profileImg: {
    padding: 10,
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  image: {
    padding: 10,
  },
  TopText: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 51,
    alignItems: 'stretch',
    borderRadius: 4,
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
