import React, { Component } from 'react'
import { Text, View, Alert ,StyleSheet ,Button ,KeyboardAvoidingView,Image , TextInput,TouchableOpacity} from 'react-native'
import * as firebase from 'firebase'
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export class SignInScreen extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             riderEmail:"",
             riderPassword:"",
            }
    }
    
    riderSignIn = (riderEmail,riderPassword) => {
        firebase.auth().signInWithEmailAndPassword(riderEmail, riderPassword)
        .then(() => {
            this.props.navigation.navigate("DriverScreen")
        })
        .catch((error)=>{
            Alert.alert(error.message)
        })
    }
    
    render() {
        return (
            <KeyboardAvoidingView  style={styles.container}>
                <View style={styles.header}>
                    <Animatable.Text 
                     style={styles.text}
                     animation="slideInLeft"
                     >Welcome Rider!</Animatable.Text>
                </View>
                <Animatable.View 
                    style={styles.footer}
                    animation='zoomInUp'
                    >
                <View style={{justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold',color:"#05375a",fontSize:15}}>Sign In as a Rider</Text>
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
                    value={this.state.riderEmail}
                    onChangeText={(text) => this.setState({riderEmail:text})}
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
                    value={this.state.riderPassword}
                    onChangeText={(text) => this.setState({riderPassword:text})}
                    />
                    </View>
                   <TouchableOpacity>
                    <Button 
                        title="Sign In" 
                        color="#05375a"
                        onPress={() => this.riderSignIn(this.state.riderEmail,this.state.riderPassword)}
                        />
                   </TouchableOpacity>
                   <View style={{flexDirection:'row' ,justifyContent:'space-between'}}>
                    <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('UserSignUp')}
                        >
                    <Text style={styles.alreadyHaveAccount}>Already Have Account? / </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SplashScreen')}
                        >
                        <Text style={styles.alreadyHaveAccount}>Don't want to be driver</Text>
                    </TouchableOpacity>
                   </View>
                    
                    
                </Animatable.View>
            </KeyboardAvoidingView>
        )
    }
}

export default SignInScreen

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