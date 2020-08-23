import React, { Component } from 'react'
import { Text, View } from 'react-native'
import DrawerNavigation from './registrationNavigator/RegistrationNavigator'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MyCab from './screens/HomeScreen';
export class App extends React.Component {
  render() {
    return (
      <DrawerNavigation />
    )
  }
}

export default App
