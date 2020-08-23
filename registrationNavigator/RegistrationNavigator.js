import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SignUpScreen from "../screens/SignUpScreen";
import SignInScreen from "../screens/SignInScreen";
import LoadingScreen from '../screens/LoadingScreen';
import MyCab from '../screens/HomeScreen';
import * as firebase from 'firebase'
import { firebaseConfig } from '../config'
import FavouriteScreen from '../screens/FavouriteScreen';
import DriverSignUpScreen from '../screens/DriverSignUpScreen';
import SplashScreen from '../screens/SplashScreen';
import DriverSignInScreen from '../screens/DriverSignInScreen';

firebase.initializeApp(firebaseConfig)  
const SwitchNavigatior = createSwitchNavigator({
        SplashScreen:{
            screen: SplashScreen,
            navigationOptions:{
                headerShown:false
            }
        },    
        MyCab:{
            screen:MyCab,
            navigationOptions:{
                headerTintColor:'#05375a',
                headerTitleAlign:'center',
            }
        }, 
        stack:createStackNavigator({
            UserSignUp:{
                screen:SignUpScreen,
                navigationOptions:{
                    headerTintColor:'#05375a',
                    headerTitleAlign:'center',
                }
            },            
            UserSignIn:{
                screen:SignInScreen,
                navigationOptions:{
                    headerTintColor:'#05375a',
                    headerTitleAlign:'center',
                }
            },
        }),
        driverStack:createStackNavigator({
            DriverSignUp:{
                screen:DriverSignUpScreen,
                navigationOptions:{
                    headerTintColor:'#05375a',
                    headerTitleAlign:'center',
                }
            },
            DriverSignIn:{
                screen : DriverSignInScreen,
                navigationOptions:{
                    headerTintColor:'#05375a',
                    headerTitleAlign:'center',
                }
            }
        }),
        
           
})


export default createAppContainer(SwitchNavigatior);