import React, { Component } from 'react'
import {ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, View, Image, Dimensions} from 'react-native';
import { Container, Content, Footer, Label } from 'native-base';
import MapView from 'react-native-maps';
import { Colors, Images } from '../Themes/';
import styles from './Styles/BookRideScreenStyle';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet } from 'react-native';
import InputCompoent from '../Components/InputCompoent';
import { connect } from 'react-redux';
import {Marker} from 'react-native-maps';

const {height, width} = Dimensions.get("window");


class BookRideScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            active: 1,
            latt : 37.78825,
            long: -122.4324,
            lattDelta: 0.0922,
            longDelta: 0.0421,
            footerForRide: true,
            footerForRequest: false,
            footerForConfirming: false,
            footerForCompletionHalf: false,
            footerForCompletion: false
        }
        this.renderMapSuccess = this.renderMapSuccess.bind(this);
        this.dialogueInput = this.dialogueInput.bind(this);
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.renderMapSuccess);
    }

    renderMapSuccess(pos){
        var crd = pos.coords;
        this.setState({
            latt: crd.latitude,
            long: crd.longitude,
            lattDelta: 0.0922,
            longDelta: 0.0421
        })
    }

    footerForRideNow(){
        return(
            <Footer style={styles.RideNowFooter}>
                <TouchableOpacity onPress={() => {
                    this.setState({
                        footerForRide: false,
                        footerForRequest: true
                    })
                }}
                    style={styles.footerForRideMain}>
                    <View style={styles.footerForRideView}>
                        <View style={styles.footerForRideViewText}>
                            <Icon style={styles.footerSubView} name="location-arrow" size={16} color={Colors.snow} />
                            <Text style={styles.footerForRideText1}>Ride Now</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Footer>
        )
    }

    footerCurrentLocation(){
        return(
            <TouchableOpacity onPress={()=>{this.setState({latt : 37.78825,long: -122.4324,lattDelta: 0.0922,longDelta: 0.0421})}} 
                style={{position:'absolute', bottom:60, right:20, backgroundColor:'white', padding: 10, borderRadius:5}}>
                <Image source={Images.currentLocation} style={styles.location}/>
            </TouchableOpacity>
        )
    }

    footerForRequestRide(){
        return(
            <Footer style={styles.footerForRequest}>
                <View style={styles.footerForRequestMain}>
                    <View style={styles.footerForRequestView}>
                        <View style={styles.footerForRequestUl}>
                            <View style={styles.footerForRequestLi}>
                                <View style={this.state.active == 1 ? styles.borderForActive : styles.borderForInactive}></View>
                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        active: 1
                                    })
                                }}>
                                    <View style={styles.viewForImage}>
                                        <Image style={styles.imageOfView} source={Images.car1}/>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.viewForText}>
                                    <Text style={styles.textOfView}>ECONOMY</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.footerForRequestUl}>
                            <View style={styles.footerForRequestLi}>
                                <View style={this.state.active == 2 ? styles.borderForActive : styles.borderForInactive}></View>
                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        active: 2
                                    })
                                }}>
                                    <View style={styles.viewForImage}>
                                            <Image style={styles.imageOfView} source={Images.car2}/>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.viewForText}>
                                    <Text style={styles.textOfView}>HATCHBACK</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.footerForRequestUl}>
                            <View style={styles.footerForRequestLi}>
                                <View style={this.state.active == 3 ? styles.borderForActive : styles.borderForInactive}></View>
                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        active: 3
                                    })
                                }}>
                                    <View style={styles.viewForImage}>
                                        <Image style={styles.imageOfView} source={Images.car3}/>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.viewForText}>
                                    <Text style={styles.textOfView}>SEDAN</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.footerForRequestUl}>
                            <View style={styles.footerForRequestLi}>
                                <View style={this.state.active == 4 ? styles.borderForActive : styles.borderForInactive}></View>
                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        active: 4
                                    })
                                }}>
                                    <View style={styles.viewForImage}>
                                        <Image style={styles.imageOfView} source={Images.car4}/>
                                    </View>
                                </TouchableOpacity>
                                <View style={styles.viewForText}>
                                    <Text style={styles.textOfView}>XUV</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.footerForRequestFooter}>
                            <View style={styles.footerForRequestView}>
                                <TouchableOpacity onPress={() => {
                                    this.setState({
                                        footerForRequest: false,
                                        footerForConfirming: true
                                    })
                                }}
                                    style={styles.footerForRequestMain}>
                                    <View style={styles.footerForRequestView}>
                                        <View style={styles.RequestRideButton}>
                                            <Icon name="location-arrow" size={16} color={Colors.snow} />
                                            <Text style={styles.RideFooterText}>Request Ride</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                </View>
            </Footer>
        )
    }

    footerForConfirmBooking() {
        return(
            <Footer style={styles.footerConfirmBooking}>
                <View style={styles.rideHereFooterTouch}>
                    <View style={styles.footerConfirmBookingfir}>
                        <Text style={styles.rideHereInnerSecViewText}>Estimated Pickup Time : 4 Mins</Text>
                    </View>
                    <View style={styles.footerConfirmBookingsec}>
                        <View style={styles.footerForRideView}>
                            <View style={styles.footerConfirmBookingsecfir}>
                                <Image source={Images.payment} style={styles.payment}/>
                            </View>
                            <View style={styles.footerConfirmBookingsecSec}>
                                <Text style={styles.footerConfirmBookingsecSecText}>SETUP PAYMENT</Text>
                            </View>
                            <View style={styles.footerConfirmBookingsecThr}>
                                <Text style={styles.footerConfirmBookingsecThrText}>1-5</Text>
                            </View>
                            <View style={styles.footerConfirmBookingsecFor}>
                                <Image source={Images.threeman} style={styles.threeman}/>
                            </View>
                        </View>
                    </View>
                    <View style={styles.footerConfirmBookingThr}>
                        <View style={styles.footerForRideView}>
                            <View style={styles.footerConfirmBookingThrFir}>
                                <View style={styles.rideHereFooterTouch}>
                                    <View style={styles.footerConfirmBookingThrFirFir}>
                                        <Text style={styles.footerConfirmBookingThrFirFirText}>$28.99</Text>
                                    </View>
                                    <View style={styles.footerConfirmBookingThrFirSec}>
                                        <Text style={styles.Promo}>FARE ESTIMATE</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.footerConfirmBookingThrSec}>
                                <View style={styles.rideHereFooterTouch}>
                                    <View style={styles.footerConfirmBookingThrFirFir}>
                                        <Text style={styles.footerConfirmBookingThrSecText}>Applied</Text>
                                    </View>
                                    <View style={styles.footerConfirmBookingThrFirSec}>
                                        <Text style={styles.Promo}>PROMO CODE</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.footerConfirmBookingFor}>
                        <View style={styles.footerConfirmBookingForMain}>
                            <TouchableOpacity onPress={() => {
                                    this.setState({
                                        footerForConfirming: false,
                                        footerForCompletionHalf: true,
                                    })
                                }} style={styles.footerConfirmBookingForMainInner}>
                                <View style={styles.footerConfirmBookingForInner}>
                                  <Icon  name="location-arrow" size={16} color={Colors.snow} />
                                  <Text style={styles.footerForRideText2}>Confirm Booking</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Footer>
        )
    }

    footerForCompleteRideHalf(){
        return(
            <View style={styles.rideHereFooterHalf}>
                <View style={styles.rideHereFooterTouch}>
                    <TouchableOpacity onPress={() => {
                                    this.setState({
                                        footerForCompletionHalf: false,
                                        footerForCompletion: true,
                                    })
                                }}>
                        <View style={styles.tapOnview}>
                            <Text style={styles.tapOnViewText}>TAP ON TO VIEW DETAILS</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.rideHereMain}>
                        <View style={styles.footerForRideView}>
                            <View style={styles.rideHereInner}>
                                <View style={styles.rideHereInnerMain}>
                                    <View style={styles.rideHereUl}>
                                        <View style={styles.rideHereLi}>
                                            <Image style={styles.rideHereLiImg} source={Images.profile}/>
                                        </View>
                                        <View style={styles.rideHereLiSec}>
                                            <View style={styles.rideHereLiSecView}>
                                                <Text style={styles.rideHereLiSecViewText}>4.9</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.rideHereInnerSec}>
                                <View style={styles.rideHereFooterTouch}>
                                    <View style={styles.rideHereInnerSecMain}>
                                        <Text style={styles.rideHereInnerSecText}>George Edwards</Text>
                                    </View>
                                    <View style={styles.rideHereInnerSecView}>
                                        <Text style={styles.rideHereInnerSecViewText}>XYZ-182</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.rideHereInnerThrd}>
                                <View style={styles.rideHereInnerThrdMain}>
                                    <View style={styles.rideHereInnerThrdView}>
                                        <Icon name="phone" size={20} color="#75B1FA" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    footerForCompleteRide(){
        return(
            
                <View style={{position:'absolute',bottom:0,left:0, backgroundColor:'white'}}>
                    <TouchableOpacity onPress={() => {
                                    this.setState({
                                        footerForCompletionHalf: true,
                                        footerForCompletion: false,
                                    })
                                }}>
                        <View style={styles.tapOnview}>
                            <Text style={styles.tapOnViewText}>TAP ON TO VIEW DETAILS</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.lastViewFir}>
                        <View style={styles.lastViewFirInner}>
                            <Image style={styles.lastViewFirImg} source={Images.car5}/>
                            <View style={styles.lastViewSecOne}>
                                <Text style={styles.rideHereInnerSecText}>Volkswagen Tiguan 2014</Text>
                                <Text style={styles.rideHereInnerSecViewText}>Business Class | 4 Seats</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.lastViewSec}>
                        <View style={styles.footerForRideView}>
                            <View style={{ flex: 1.3, height: 100, backgroundColor: Colors.snow}}>
                                <View style={styles.lastViewFirOne}>
                                    <View style={styles.rideHereInnerMain}>
                                        <View style={styles.rideHereUl}>
                                            <View style={styles.rideHereLi}>
                                                <Image style={styles.rideHereLiImg} source={Images.profile}/>
                                            </View>
                                            <View style={styles.rideHereLiSec}>
                                                <View style={styles.rideHereLiSecView}>
                                                    <Text style={styles.rideHereLiSecViewText}>4.9</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                                <View style={styles.rideHereFooterTouch}>
                                    <View style={styles.rideHereInnerSecMain}>
                                        <Text style={styles.rideHereInnerSecText}>George Edwards</Text>
                                    </View>
                                    <View style={styles.rideHereInnerSecView}>
                                        <Text style={styles.rideHereInnerSecViewText}>XYZ-182</Text>
                                    </View>
                                </View>

                            <View style={styles.lastViewThrView}>
                                <View style={styles.rideHereInnerThrdMain}>
                                    <View style={styles.rideHereInnerThrdView}>
                                        <Icon name="phone" size={20} color="#75B1FA" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.lastViewThr}>
                        <View style={styles.footerForRideView}>
                            <View style={styles.lastViewThrOne}>
                                <View style={styles.lastViewThrOneView}>
                                    <View style={styles.footerForRideView}>
                                        <View style={styles.lastViewThrOneIcon}>
                                            <Icon name="clock-o" size={25} color={Colors.snow} />
                                        </View>
                                        <View style={styles.lastViewThrOneText}>
                                            <Text style={styles.CompleteDialogueUlSec}>SHARE ETA</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.lastViewThrSec} />
                            <View style={styles.lastViewThrThr}>
                                <View style={styles.lastViewThrThrView}>
                                    <View style={styles.footerForRideView}>
                                        <View style={styles.lastViewThrThrText}>
                                            <Text style={styles.lastViewThrThrTextText}>CANCEL RIDE</Text>
                                        </View>
                                        <View style={styles.lastViewThrThrIcon}>
                                            <Icon name="times-circle-o" size={25} color={Colors.black} />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
           
        )
    }

    dialogueForComplete(){
        return(
        <View style={styles.CompleteDialogueMain}>
                <View style={styles.CompleteDialogueView}>
                    <View style={styles.footerForRideView}>

                        <View style={{height: 130}} />
                        <Image style={{ height: 80, width: 20, marginLeft:20, marginTop:10}} source={Images.location}/>

                        <View style={{flex: 2, height: 130, marginLeft:20}}>
                            <View style={styles.rideHereFooterTouch}>
                                <View style={styles.CompleteDialogueUlView}>
                                    <Text style={styles.CompleteDialogueUlFir}>From</Text>
                                </View>
                                <View style={styles.CompleteDialogueUlView}>
                                    <Text style={styles.CompleteDialogueUlSec}>Historical Library & Museum</Text>
                                </View>
                                <View style={styles.CompleteDialogueUlThr} />
                                <View style={styles.CompleteDialogueUlView}>
                                    <Text style={styles.CompleteDialogueUlFir}>To</Text>
                                </View>
                                <View style={styles.CompleteDialogueUlView}>
                                    <Text style={styles.CompleteDialogueUlSec}>Royal Light Cinema</Text>
                                </View>
                                <View style={styles.CompleteDialogueUlFor} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    dialogueInput(){
        return(
            <View style={styles.dialogueView}>
                <View style={styles.dialogueViewMain}>
                    <View style={styles.footerForRideView}>
                        <View style={styles.iconForDialogue}>
                            <Icon name="circle" size={13} color={'lightgreen'} />
                        </View>
                        <View style={styles.textForDialogue}>
                            <Text style={styles.textOfDialogue}>Where Do You Need to Go?</Text>
                        </View>
                        <TouchableOpacity style={{flex: 0.8}}>
                            <View style={styles.iconForDialogue}>
                                <Icon name="search" size={15} color={Colors.gray} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footerForRideView}>
                        <View style={styles.secondTextForDialogue}>
                            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SearchStack')}}>
                                <View style={styles.secondTextOfDialogue}>
                                    <Text style={styles.colorOfText}>Ma Tau Wai.Kowloon</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style ={styles.container}>
                <MapView
                    style={styles.map}
                    region={{latitude: this.state.latt, longitude: this.state.long, latitudeDelta: this.state.lattDelta, longitudeDelta: this.state.longDelta }}
                    >

                    <MapView.Marker coordinate={{latitude: this.state.latt, longitude: this.state.long, latitudeDelta: this.state.lattDelta, longitudeDelta: this.state.longDelta }}>
                      <Image
                        source={Images.pin}
                        style={styles.mark}
                      />
                    </MapView.Marker>
                    <MapView.Marker coordinate={{latitude: this.state.latt-0.01, longitude: this.state.long+0.01 }}>
                      <Image
                        source={Images.carIcon}
                        style={styles.carIcon}
                      />
                    </MapView.Marker>
                    <MapView.Marker coordinate={{latitude: this.state.latt+0.02, longitude: this.state.long+0.02 }}>
                      <Image
                        source={Images.carIcon2}
                        style={styles.carIcon2}
                      />
                    </MapView.Marker>
                    <MapView.Marker coordinate={{latitude: this.state.latt-0.03, longitude: this.state.long-0.02 }}>
                      <Image
                        source={Images.carIcon3}
                        style={styles.carIcon2}
                      />
                    </MapView.Marker>
                </MapView>
                {(this.state.footerForRide || this.state.footerForRequest || this.state.footerForConfirming) && this.dialogueInput()}
                {this.state.footerForCompletion && this.dialogueForComplete()}
                {this.state.footerForRide && this.footerForRideNow()}
                {this.state.footerForRide && this.footerCurrentLocation()}
                {this.state.footerForRequest && this.footerForRequestRide()}
                {this.state.footerForConfirming && this.footerForConfirmBooking()}
                {this.state.footerForCompletionHalf && this.footerForCompleteRideHalf()}
                {this.state.footerForCompletion && this.footerForCompleteRide()}
            </View>
        )
    }
}

BookRideScreen.navigationOptions = ({ navigation }) => ({
    title: "Book Ride",
    headerTitleStyle: { fontSize: 17,alignSelf: 'flex-start' },
    headerLeft: (
        <TouchableOpacity
            onPress={() => navigation.navigate("DrawerOpen")}
            activeOpacity={0.5}
            style={styles.headerOfBookRide}
            >
            <Icon name="bars" size={20} />

        </TouchableOpacity>
    ),
    headerRight: <Text />
});
const mapStateToProps = (state) => {
    return {
        user: state.auth.user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookRideScreen)
