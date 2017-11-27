import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {

  jsondata() {
      return (
        fetch('https://github.com/srpbbee/Hotel/blob/master/hotel.json')
            .then(res => res.json())
            .then((out) => {
                console.log(out);
        }).catch(err => console.error(err));
      );
    }

  render() {
    return (
      jsondata()
    );
  }
}
