/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-tabs */
/* eslint-disable require-jsdoc */
import React, {Component, useState} from 'react';
import {Easing, Text, Image, Animated, TouchableOpacity, StyleSheet, View, ScrollView, TouchableHighlight} from 'react-native';
import InviteCard from './InviteCard';
import EventCard from './EventCard';
import CreateNew from './makeNewEvent';
import moment from 'moment';
import {FlatList} from 'react-native-gesture-handler';

const json = `{
	"noti": [{
		"name": "George Samson",
		"date": "2019-10-24T20:00:00",
    "pic": "https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/Images/1.png",
    "id": "1"
	}, {
		"name": "George Samson",
		"date": "2019-12-14T20:00:00",
    "pic": "https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/Images/1.png",
    "id": "2"
	}, {
		"name": "Shane Padilla",
		"date": "2019-12-11T12:30:00",
		"pic": "https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/Images/2.png",
    "id": "3"
	}, {
		"name": "Christina Frazier",
		"date": "2019-12-13T18:00:00",
		"pic": "https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/Images/3.png",
    "id": "4"
	}, {
		"name": "Todd Bladwin",
		"date": "2019-12-12T19:25:00",
		"pic": "https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/Images/4.png",
    "id": "5"
	}, {
		"name": "Jose Vasquez",
		"date": "2019-12-09T17:45:00",
		"pic": "https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/Images/5.png",
    "id": "6"
	}, {
		"name": "Jose Vasquez",
		"date": "2019-10-21T17:45:30",
		"pic": "https://www.cs.virginia.edu/~dgg6b/Mobile/ScrollLabJSON/Images/5.png",
    "id": "7"
	}]
}`;
const data = JSON.parse(json);
for (i=0; i<data.length; i++) {
  data[i].date = moment(data[i].date);
}
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function HomeScreen() {
  const [invites, setInvites] = useState(data.noti);
  const [accepted, setAccepted] = useState([]);
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(moment().get('month'));
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
    <View style={styles.container} >
      {invites.length>0 ? (
      <ScrollView horizontal='true' style={styles.topScroll}>
        {invites.map(function(person, i) {
          return <InviteCard key={person.id} id={person.id} picture={person.pic} name={person.name} date={person.date} onClickAcc={acceptInvite} onClickDec={declineInvite} />;
        })}
      </ScrollView>): (
        <View></View>)
      }
      <ScrollView horizontal='true' style={styles.months}>
        {months.map(function(month, i) {
          // return <Text key={month}>{month}         </Text>;
          return <TouchableOpacity
            style={styles.button}
            key = {i*100}
            onPress = {() => setMonth(i)}
          >
            <View>
              <Text>{month}</Text>
            </View>
          </TouchableOpacity>;
        })}

      </ScrollView>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.bottomScroll}>
          {days.map(function(day, i) {
            return ([
              <Text style={styles.dates} key={day}>{month+1} / {day}</Text>,
              accepted.map(function(person, j) {
                if (month==moment(person.date).get('month') && moment(person.date).get('date')==day) {
                  return <EventCard key={person.id} id={person.id} picture={person.pic} name={person.name} date={person.date} onClickAcc={doNothing} onClickDec={doNothing} />;
                }
              }),
              <CreateNew key={day+50} style={paddingLeft= 50}></CreateNew>,

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
        paddingBottom: 65,
        paddingTop: 30,
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
        padding: 5,
      },
      months: {
        height: 30,
      },
      container: {
        alignItems: 'center',
      },
      button: {
        alignItems: 'stretch',
        width: 50,
        borderRadius: 4,
        borderColor: 'black',
        borderWidth: 1,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
    });

export default HomeScreen;


