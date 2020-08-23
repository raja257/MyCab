import React, { Component } from 'react'
import { Text, View, ActivityIndicator,StyleSheet } from 'react-native'
import * as firebase from 'firebase'

export default class LoadingScreen extends React.Component {
    
    
    componentDidMount = () => {
        this.unSubscribeAuth =    firebase.auth().onAuthStateChanged((user) =>{
            if(user){
                this.props.navigation.navigate("MyCab")
            }
            else{
                this.props.navigation.navigate("SignIn")
            }
        })
        
    }
    componentWillUnmount = () => {
        this.unSubscribeAuth()
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="small" color="#7D06C7" />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
   
})