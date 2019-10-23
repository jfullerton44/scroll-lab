/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import {Text, Image, TouchableHighlight, TouchableOpacity, StyleSheet, View} from 'react-native';
import dude from '../assets/boy.png';


export default class Card extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.topContainer}>
          <View style={styles.image}>
            {this.props.picture ? (
            <Image style={styles.profileImg} source={{uri: this.props.picture}} />
          ) : (
              <Image source={dude} />
            )}
          </View>
          <View style={styles.TopText}>
            <Text style={styles.nameText}>{this.props.name}</Text>
            <Text style={styles.dateText}>{this.props.date}</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'red', justifyContent: 'center', alignSelf: 'center'}}>Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={{color: 'green', justifyContent: 'center', alignSelf: 'center'}}>Accept</Text>
          </TouchableOpacity>
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
    marginRight: 5,
    marginTop: 10,
    height: 133,
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
