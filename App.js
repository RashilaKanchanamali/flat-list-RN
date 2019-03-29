import React, {Component} from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import login from './src/login';
import screen1 from './src/screen1';
import {parseString} from 'react-native-xml2js'


const MainNavigator = createStackNavigator({
  login: {screen: login},
  screen1: {screen: screen1},
});

const App = createAppContainer(MainNavigator);

export default App;