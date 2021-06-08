/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { initNavigation, withFocusable } from '@noriginmedia/react-spatial-navigation';

initNavigation({
  nativeMode: true,
});

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu",
  web: "Press Cmd+R to reload,\n" + "Cmd+Opt+i for dev menu"
});

const Box = ({ focused, setFocus }) => {
  return <TouchableOpacity style={focused ? styles.focusedBox : styles.box}><Text>abc</Text></TouchableOpacity>;
};

const FocusableBox = withFocusable()(Box);

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native for Web!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        <FocusableBox />
        <FocusableBox />
        <FocusableBox />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  box: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  focusedBox: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  }
});
