import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class FavouriteScreen extends React.Component {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
            </View>
        )
    }
}

getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(position => {
       this.setState({
         userLocation:{
           latitude: position.coords.latitude,
           longitude : position.coords.longitude,
           latitudeDelta: 0.01,
           longitudeDelta: 0.01
         }
       })
       
    }, err => console.log(err))
   }
