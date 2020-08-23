import React from 'react'
import { Text, View ,StyleSheet, Alert,  LayoutAnimation} from 'react-native'
import {Button} from 'native-base'
import * as firebase from 'firebase'
import {Maps} from '../Map';

export default class MyCab extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:''
        }
    }
    
    componentDidMount = () => {
     this.unSubscribeAuth =   firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.setState({
                    email:user.email
                })
            }
            else{
                this.props.navigation.navigate("DriverSignIn")
            }
        })
    }

    componentWillUnmount = () => {
        this.unSubscribeAuth()
    }
    
    logOut = () => {
        firebase.auth().signOut()
        .catch((error) => {
            Alert.alert(error.message)
        })
    }

    render() {
        LayoutAnimation.easeInEaseOut();
        
        return (
            
            <View style={styles.container}>
                
                <Maps  />
                <Text> LoggedIn in as a {this.state.email}</Text>
            </View>
        )}}

   const styles = StyleSheet.create({
        container: {
            ...StyleSheet.absoluteFillObject,
            height: '100%',
            
        },
        map: {
            ...StyleSheet.absoluteFillObject,
        },})