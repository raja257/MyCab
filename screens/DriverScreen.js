import React from 'react'
import  { View , Text , StyleSheet , Alert } from 'react-native'
import { DriverMaps } from '../Driver'

export class DriverScreen extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            driverEmail:'',
        }
    }
   componentDidMount = () => {
        this.unsubscribeDriverAuth = firebase.auth().onAuthStateChanged((driver) => {
            if(driver){
                this.setState({
                    driverEmail:driver.email
                })
            }
            else {
                this.props.navigation.navigate('DriverSignUp')
            }
        })
   }

   componentWillUnmount = () => {
       this.unsubscribeDriverAuth()
   }

    render() {
        return (
            <View style={styles.container}>
                   <Text style={{justifyContent:'center',textAlign:'center'}}><h1>book your Driver and cab</h1></Text> 
                <DriverMaps />
            </View>
        )
    }
}

export default DriverScreen
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },   
})