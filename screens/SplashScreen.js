import React, { Component } from 'react'
import { Text, View ,StyleSheet, StatusBar, Dimensions, Button} from 'react-native'
import * as Animatable from 'react-native-animatable';
import {LinearGradient} from 'expo-linear-gradient'
import { TouchableOpacity } from 'react-native-gesture-handler';
import {MaterialIcons }from 'react-native-vector-icons'
export class SplashScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <StatusBar barStyle="light-content"/> 
                <View style={styles.header}>
                    <Animatable.Image 
                    animation="bounceIn"
                    duration={2000}
                    source={require("../assets/logo.jpg")}
                    style={styles.logo}
                    resizeMode='stretch'
                    />
                </View>
                <Animatable.View 
                    style={styles.footer}
                    animation='fadeInUpBig'
                    >
                    <Text style={styles.title}>Stay Connect with everyone!</Text>
                    <Text style={styles.text}>Are you a Driver or Rider?</Text>
                    <View style={styles.button}>
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('DriverSignUp')}
                        
                        >
                          <LinearGradient
                            colors={['#5db8fe','#39cff2']}
                            style={styles.signIn}
                            >                    
                            <Text style={styles.txt}>Driver</Text>
                            <MaterialIcons 
                            name='navigate-next'
                            color="white"
                            size={20}
                            
                            />
                          </LinearGradient>   
                        </TouchableOpacity>
                        <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('UserSignUp')}
                        >
                          <LinearGradient
                            colors={['#5db8fe','#39cff2']}
                            style={styles.signIn}
                            >                    
                            <Text style={styles.txt}>Rider</Text>
                            <MaterialIcons 
                            name='navigate-next'
                            color="white"
                            size={20}
                            
                            />
                          </LinearGradient>
                        </TouchableOpacity>
                        
                    </View>
                </Animatable.View>
            </View>
        )
    }
}

export default SplashScreen
const  {height} = Dimensions.get('screen');
const height_logo = height * 0.9 * 0.4 ;
const styles  = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:'#05375a'
    },
    header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
        footer:{
            flex:1,
            backgroundColor:'white',
            borderTopLeftRadius:30,
            borderTopRightRadius:30,
            paddingVertical:50,
            paddingHorizontal:30
        },
    logo:{
        width:height_logo,
        height:height_logo,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30
    },
    title:{
        color:'#05375a',
        fontWeight:'bold',
        fontSize:30
    },
    text:{
        color:'gray',
        marginTop:15,
    },
    button:{
        marginVertical:15,
        flexDirection:'row',
        justifyContent:'space-around',
        marginHorizontal:-15
    },
    signIn:{
        width:150,
        height:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:50,
        flexDirection:'row',
        
    },
    txt:{
        color:'white'
    }
})