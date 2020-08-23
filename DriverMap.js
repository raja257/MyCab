import React  from 'react'
import { View , StyleSheet,Button ,Text} from 'react-native'
import MapView ,{ Marker }  from 'react-native-maps'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export class DriverMaps extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       region:null,
    }
    this._getLocationAsync(); 
  }
  
  
  _getLocationAsync = async () => {
    let { status } = await Permissions.getAsync(Permissions.LOCATION);
          if (status !== 'granted') {
            console.log('Hey! You might want to enable notifications for my app, they are good.');
          }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy:true});
    let region = {
     latitude: location.coords.latitude,
     longitude : location.coords.longitude,
     latitudeDelta: 0.01,
     longitudeDelta: 0.01
    }
    
    this.setState({region:region})
    fetch(`https://mycab-51531.firebaseio.com/location.json`, {
            method:'POST',
            body:JSON.stringify({
            latitude: location.coords.latitude,
            longitude : location.coords.longitude,
            })
          }) 
  }

  onRegionChange = (region) => {
    this.setState({region})
  }
  // <CurrentLocationButton onGetLocation={this._getLocationAsync}/> 
  
  render() {
    const { logOut } = this.props
    // const userLocationMarker = null;
    // if (userLocationMarker){
    //   userLocationMarker = <Marker coordinate={userLocationMarker}/>
    // }
    return (
      <View style={styles.container}>
        <Button title="LogOut" onPress={() => logOut()}/>
        <MapView 
        initialRegion={this.state.region}
        showsUserLocation={true}
        style={{flex:1}}
        rotateEnabled={false}
        onRegionChange={this.onRegionChange}
        >
        <Marker coordinate={this.onRegionChange} />
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   width:'100%',
   height:'100%'
  },
  map: {
   width:'100%',
   height:'100%'
  },
});