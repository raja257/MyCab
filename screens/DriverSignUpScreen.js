import React, { Component } from 'react'
import { Text, StyleSheet, View, KeyboardAvoidingView, Button,Alert } from 'react-native'
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase'

export default class DriverSignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            demail:'',
            dpassword:''
        }
    }
    
    driverSignUp = (demail , dpassword) => {
        firebase.auth().createUserWithEmailAndPassword(demail,dpassword)
        .then(()=>{
            this.props.navigation.navigate('MyCab')
        })
        .catch((err) => Alert.alert(err.message))
    }

    render() {
        return (
            <KeyboardAvoidingView  style={styles.container}>
                <View style={styles.header}>
                    <Animatable.Text 
                     style={styles.text}
                     animation="slideInLeft">
                          Welcome Driver!
                    </Animatable.Text>
                </View>
                <Animatable.View 
                    style={styles.footer}
                    animation='zoomInUp'
                    >
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontWeight:'bold',color:"#05375a",fontSize:15}}>SignUp as a Driver</Text>
                </View>

                    <Text style={styles.reg}>E-mail</Text>
                <View style={styles.action}> 
                    <FontAwesome
                    name='user-o'
                    color="#05375a"
                    size={23}
                    />
                    <TextInput 
                    placeholder='Your email...'
                    style={styles.input}
                    value={this.state.demail}
                    onChangeText={(text)=> this.setState({demail:text})}
                    />
                </View>
                    <Text style={styles.reg}>Password</Text>
                <View style={styles.action}> 
                    <FontAwesome
                    name='lock'
                    color="#05375a"
                    size={23}
                    />
                    <TextInput 
                    placeholder='Password...'
                    style={styles.input}
                    secureTextEntry={true}
                    value={this.state.dpassword}
                    onChangeText={(text)=> this.setState({dpassword:text})}
                    />
                </View>
                   <TouchableOpacity>
                    <Button 
                        title="Sign Up" 
                        color="#05375a" 
                        onPress={() => this.driverSignUp(this.state.demail,this.state.dpassword)}/>
                   </TouchableOpacity>
                <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('DriverSignIn')}>
                        <Text style={styles.alreadyHaveAccount}>Already Have Account? / </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SplashScreen')}>
                        <Text style={styles.alreadyHaveAccount}>Don't want to be driver</Text>
                    </TouchableOpacity>
                </View>
                </Animatable.View>
            </KeyboardAvoidingView>
        )}}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#05375a'
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50    
    },
    footer:{
        flex:4,
        backgroundColor:'white',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30
    },
    text:{
        color:'white',
        fontWeight:'bold',
        fontSize:40
    },
    reg:{
        color:'#05375a',
        fontSize:18,
        marginTop:25
    },
    action:{
        flexDirection:'row',
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        paddingBottom:5,
        marginVertical:15,
        justifyContent:'center'
        
    },
    input:{
        flex:1,
        paddingLeft:10,        
    },
    alreadyHaveAccount:{
        marginTop:10,
        color:'#05375a',
        fontSize:15,
    },
    signUp:{
        width:200
        
        
    },
})
