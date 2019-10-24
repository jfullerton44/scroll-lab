/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable require-jsdoc */
import React, {Component, useState} from 'react';
import {Easing, Text, Image, Animated, TouchableOpacity, StyleSheet, View, ScrollView, TouchableHighlight} from 'react-native';
import InviteCard from './InviteCard';

const json = `{
	"noti": [{
		"name": "George Samson",
		"date": "Saturday, 14/11/2019, 20:00:00",
    "pic": "1.png",
    "id": "1"
	}, {
		"name": "George Samson",
		"date": "Saturday, 14/12/2019, 20:00:00",
    "pic": "1.png",
    "id": "2"
	}, {
		"name": "Shane Padilla",
		"date": "Wednesday, 11/12/2019 12:30:00",
		"pic": "2.png",
    "id": "3"
	}, {
		"name": "Christina Frazier",
		"date": "Friday, 13/12/2019 18:00:00",
		"pic": "3.png",
    "id": "4"
	}, {
		"name": "Todd Bladwin",
		"date": "Thursday, 12/12/2019, 19:25:00",
		"pic": "4.png",
    "id": "5"
	}, {
		"name": "Jose Vasquez",
		"date": "Monday, 9/12/2019, 17:45:30",
		"pic": "5.png",
    "id": "6"
	}, {
		"name": "Jose Vasquez",
		"date": "Monday, 9/1/2020, 17:45:30",
		"pic": "5.png",
    "id": "7"
	}]
}`;
const data = JSON.parse(json);


function HomeScreen() {
  const [invites, setInvites] = useState(data.noti);
  const [accepted, setAccepted] = useState([]);
  const acceptInvite = (id) => {
    const newArray = invites.filter((item) => item.id !== id);
    const item = invites.filter((item) => item.id === id);
    setAccepted((accepted) => [...accepted, item[0]]);
    setInvites(newArray);
    return;
  };
  const declineInvite = (id) => {
    const newArray = invites.filter((item) => item.id !== id);
    setInvites(newArray);
    return;
  };
  return (
    <View>
      <ScrollView horizontal='true' style={styles.topScroll}>
        {invites.map(function(person, i) {
          return <InviteCard key={person.id} id={person.id} name={person.name} date={person.date} onClickAcc={acceptInvite} onClickDec={declineInvite} />;
        })}
      </ScrollView>
      <ScrollView style={styles.bottomScroll}>
        {accepted.map(function(person, i) {
          return <InviteCard key={person.id} id={person.id} name={person.name} date={person.date} onClickAcc={acceptInvite} onClickDec={declineInvite} />;
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create(
    {
      topScroll: {
        paddingTop: 30,
      },
      bottomScroll: {
        paddingTop: 30,
      },
    });

export default HomeScreen;


