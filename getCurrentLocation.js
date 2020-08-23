import React , {useState} from 'react'
import {
    View,
    StyleSheet,
    Dimensions
}
from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;


export const CurrentLocationButton = props => {
   const {onGetLocation} = props
    const bottom = props.bottom ? props.bottom : 150

    return(
        <View style={[styles.container , {top: HEIGHT - bottom}]}>
            <MaterialIcons 
            name='my-location'
            color="#000000"
            size={25}
            onPress={() => {onGetLocation}}
                
            
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        zIndex:9,
        position:'absolute',
        width:45,
        height:45,
        backgroundColor:"#fff",
        left:WIDTH-70,
        borderRadius:50,
        shadowColor:'#00000000',
        elevation:7,
        shadowRadius:5,
        shadowOpacity:1.0,
        justifyContent:'space-around',
        alignItems:'center',
        bottom:HEIGHT-70
    }
})