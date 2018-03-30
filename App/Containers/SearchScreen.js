import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, Button, Dimensions, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { Images, Colors, Metrics, Fonts, } from '../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast, Label } from 'native-base';
import AuthActions from '../Redux/AuthRedux'
import FullButton from '../Components/FullButton'
import InputCompoent from '../Components/InputCompoent'
import ModalView from '../Components/ModalView'
import { NavigationActions } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import { AsyncStorage } from 'react-native'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SearchScreenStyle'

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const GOOGLE_MAPS_APIKEY = 'AIzaSyBDlXDjhHSBgI6etr234bO23X6Dc1QYJ7I';

class LoginScreen extends Component {

    constructor(props) {
        super(props);

        // AirBnB's Office, and Apple Park
        this.state = {
          coordinates: [
            {
              latitude: 37.3317876,
              longitude: -122.0054812,
            },
            {
              latitude: 37.771707,
              longitude: -122.4053769,
            },
          ],
        };

        this.mapView = null;
      }

    onMapPress = (e) => {
        this.setState({
          coordinates: [
            ...this.state.coordinates,
            e.nativeEvent.coordinate,
          ],
        });
      }

    goBack(){
        this.props.navigation.dispatch(NavigationActions.back());
    }
    
    render() {
        return (
       
        <View style={styles.contentStyle}>
              <TouchableHighlight onPress={()=>this.goBack()}>
                <View style={styles.headerVeiw}>
                    <Image source={Images.back} style={styles.back}/>
                </View>
              </TouchableHighlight>
              <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',backgroundColor:'white'}}>
                <Image source={Images.fromto} style={styles.fromto}/>
                <View style={{flex:1, }}>
                    <InputCompoent
                        labelText=''
                        placeholder='current location'
                        inputRef='location'
                        value={this.state.location}
                        secureTextEntry={false}
                        onChangeText={(text) => this.setState({ location: text })}
                    />
                    <InputCompoent
                        labelText=''
                        placeholder='What to?'
                        inputRef='whato'
                        value={this.state.whato}
                        secureTextEntry={false}
                        onChangeText={(text) => this.setState({ whato: text })}
                    />
                </View>
                <TouchableOpacity style={{marginTop:10}}>
                    <Text style={{fontSize:30, marginHorizontal:10}}>+</Text>
                </TouchableOpacity>
              </View>

              <MapView
                initialRegion={{
                  latitude: LATITUDE,
                  longitude: LONGITUDE,
                  latitudeDelta: LATITUDE_DELTA,
                  longitudeDelta: LONGITUDE_DELTA,
                }}
                style={styles.absoluteFill}
                ref={c => this.mapView = c}
                onPress={this.onMapPress}
              >
                {this.state.coordinates.map((coordinate, index) =>
                  <MapView.Marker key={`coordinate_${index}`} coordinate={coordinate} />
                )}
                {(this.state.coordinates.length >= 2) && (
                  <MapViewDirections
                    origin={this.state.coordinates[0]}
                    waypoints={ (this.state.coordinates.length > 2) ? this.state.coordinates.slice(1, -1): null}
                    destination={this.state.coordinates[this.state.coordinates.length-1]}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={3}
                    strokeColor="hotpink"
                    onStart={(params) => {
                      console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
                    }}
                    onReady={(result) => {
                      this.mapView.fitToCoordinates(result.coordinates, {
                        edgePadding: {
                          right: (width / 20),
                          bottom: (height / 20),
                          left: (width / 20),
                          top: (height / 20),
                        }
                      });
                    }}
                    onError={(errorMessage) => {
                      // console.log('GOT AN ERROR');
                    }}
                  />
                )}
              </MapView>
        </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fetching: state.auth.fetching,
        error: state.auth.error,
        success : state.auth.success,
        user: state.auth.user
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        attemptLogin: (passcode) => dispatch(AuthActions.authRequest(passcode)),
        attemptRegister: (params) => dispatch(AuthActions.regRequest(params)),
        updateUser: (params) => dispatch(AuthActions.authSuccess(params)),
        forgotPassword: (params) => dispatch(AuthActions.forgotRequest(params)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)


