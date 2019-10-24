/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable require-jsdoc */
import React, {Component, useState} from 'react';
import {Easing, Text, Image, Animated, TouchableOpacity, StyleSheet, View, ScrollView, TouchableHighlight} from 'react-native';
import InviteCard from './InviteCard';
import EventCard from './EventCard';
import moment from 'moment';
import {FlatList} from 'react-native-gesture-handler';

const json = `{
	"noti": [{
		"name": "George Samson",
		"date": "2019-10-24T20:00:00",
    "pic": "1.png",
    "id": "1"
	}, {
		"name": "George Samson",
		"date": "2019-12-14T20:00:00",
    "pic": "1.png",
    "id": "2"
	}, {
		"name": "Shane Padilla",
		"date": "2019-12-11T12:30:00",
		"pic": "2.png",
    "id": "3"
	}, {
		"name": "Christina Frazier",
		"date": "2019-12-13T18:00:00",
		"pic": "3.png",
    "id": "4"
	}, {
		"name": "Todd Bladwin",
		"date": "2019-12-12T19:25:00",
		"pic": "4.png",
    "id": "5"
	}, {
		"name": "Jose Vasquez",
		"date": "2019-12-09T17:45:00",
		"pic": "5.png",
    "id": "6"
	}, {
		"name": "Jose Vasquez",
		"date": "2019-10-21T17:45:30",
		"pic": "5.png",
    "id": "7"
	}]
}`;
const data = JSON.parse(json);
for (i=0; i<data.length; i++) {
  data[i].date = moment(data[i].date);
}


function HomeScreen() {
  const [invites, setInvites] = useState(data.noti);
  const [accepted, setAccepted] = useState([]);
  const [date, setDate] = useState(new Date());
  const daysInMonth = moment().daysInMonth();
  days=[];
  for (i=1; i<=daysInMonth; i++) {
    days.push(i);
  }
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
  const doNothing = (id) => {
    return 0;
  };
  return (
    <View>
      {invites.length>0 ? (
      <ScrollView horizontal='true' style={styles.topScroll}>
        {invites.map(function(person, i) {
          return <InviteCard key={person.id} id={person.id} name={person.name} date={person.date} onClickAcc={acceptInvite} onClickDec={declineInvite} />;
        })}
      </ScrollView>): (
        <View></View>)
      }
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.bottomScroll}>
          {days.map(function(day, i) {
            return ([
              <Text style={styles.dates} key={day}>{moment().get('month')+1} / {day}</Text>,
              accepted.map(function(person, j) {
                if (moment().get('month')==moment(person.date).get('month') && moment(person.date).get('date')==day) {
                  return <EventCard key={person.id} id={person.id} name={person.name} date={person.date} onClickAcc={doNothing} onClickDec={doNothing} />;
                }
              }),
            ]);
          })}
          {/* <ScrollView style={styles.bottomScroll}>
            {accepted.map(function(person, i) {
              return <EventCard key={person.id} id={person.id} name={person.name} date={person.date} onClickAcc={doNothing} onClickDec={doNothing} />;
            })}
          </ScrollView> */}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create(
    {
      topScroll: {
        paddingTop: 30,
        paddingBottom: 55,
      },
      bottomScroll: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
      },
      dates: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
      },
    });

export default HomeScreen;


