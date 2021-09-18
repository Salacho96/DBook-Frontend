import React, {Component} from 'react';
import {Platform, StyleSheet,Text,View,TextInput,Button} from 'react-native';
import {StackNavigator} from 'react-navigation';
//components
import Login from './Screens/Login';
import Navigator from './routes/homestack';

export default function App(){
  return(
    <Navigator/>
  );  
}