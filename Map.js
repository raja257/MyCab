import React  from 'react'
import { View , StyleSheet,Button ,Text} from 'react-native'
import MapView ,{ Marker }  from 'react-native-maps'
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase'


export class Maps extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       region:null,
       driverPlace:[]
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

          fetch(`https://mycab-51531.firebaseio.com/location.json`)
          .then(res => res.json())
          .then(parsedRes => {
            const driversPlaces = [];
            for (const key in parsedRes ){
              driversPlaces.push({
                latitude:parsedRes[key].latitude,
                longitude:parsedRes[key].longitude,
                id:key
              })
            }
            this.setState({
              driverPlace:driversPlaces
            })
          })
          .catch(err => console.log(err.message))
  }

  onRegionChange = (region) => {
    this.setState({region})
  }
  
  render() {
    const userMarkers = this.state.driverPlace.map(driversPlace => (
      <Marker coordinate={driversPlace} key={driversPlace.id}  />
      ))
    return (
      <View style={styles.container}>
      
        <MapView 
        initialRegion={this.state.region}
        showsUserLocation={true}
        style={{flex:1}}
        rotateEnabled={false}
        onRegionChange={this.onRegionChange}
        followsUserLocation={true}
        >
        {userMarkers}
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