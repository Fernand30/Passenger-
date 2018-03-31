import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, Button, TouchableOpacity, View, Image,Dimensions } from 'react-native';
import { Container, Content, Footer, Label } from 'native-base';
import ListHeader from '../Components/ListHeader'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './Styles/BookingsScreenStyle';
import { connect } from 'react-redux';
import ModalView from '../Components/ModalView';
import { Images } from '../Themes'
import MapView from 'react-native-maps';
const {width} = Dimensions.get("window");
import  Rating from 'react-native-easy-rating'

class BookingsScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            modal:false,
            modal1:false,
            modal2: false,
            rating: 0,
            latt : 37.78825,
            long: -122.4324,
            lattDelta: 0.0922,
            longDelta: 0.0421,
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(this.renderMapSuccess.bind(this));
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
    
    headerLeftContent(){
        return(
            <Text style={[styles.header, styles.leftHeader]}>JANUARY</Text>
        )
    }

    headerRightContent(){
        return(
          <View style={styles.rowView}>
            <View style={styles.yellowView}/>
            <Text style={[styles.header, styles.rightHeader]}>PENDING</Text>
          </View>

        )
    }
    closeModal(){
        this.setState({modal: false, modal2 : false})
    }

    modalContent2(){
        return(
            <View style={styles.forgotSub}>
                <View style={styles.ModalView}>
                    <View style={styles.ModalIconView}>
                        <TouchableOpacity  onPress = {()=>this.setState({modal2:false})} style={styles.ModalIcon}>
                            <Icon name="times" size={22} color="#c6c6c6"/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ModalProfileView1}>
                        <View style={styles.ModalProfileView2}>
                            <Image
                                source={Images.car}
                                style={styles.ModalProfile}
                            />
                          <View style={styles.markView}>
                            <Text style={styles.marktext}>4.9</Text>
                          </View>
                        </View>
                    </View>
                    <View style={styles.ProfileTextView}>
                        <Text style={styles.ProfileText}>George Edwards</Text>
                    </View>
                    <View style={styles.ProfileNumberView}>
                        <Text style={styles.ProfileNumber}>+1823456721</Text>
                    </View>
                    <View>
                        <View style={styles.IconSubView}>
                            <Rating
                                rating={this.state.rating}
                                max={5}
                                iconWidth={20}
                                iconHeight={20}
                                iconSelected={Images.selectStar}
                                iconUnselected={Images.grayStar}
                                onRate={(rating) => this.setState({rating: rating})}
                            />
                        </View>

                    </View>
                    <View style={styles.CarView}>
                        <View style={styles.CarSub}>
                            <View style={styles.CarIcon}>
                                <Image
                                    source={Images.carcheck}
                                    style={styles.carcheck}
                                />
                                <Text style={styles.Number}>156</Text>
                            </View>
                            <View style={styles.ClanderView}>
                                <View style={styles.ClanderSub}>
                                    <Image
                                        source={Images.jan}
                                        style={styles.calendar}
                                    />
                                    <Text style={styles.ClanderIconText1}>JANUARY 10</Text>
                                </View>
                                <Text style={styles.time}>12:30 PM</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.LocationMain}>
                        <View style={styles.LocationSub}>
                            <View style={styles.LocationIcon}>
                                <Image
                                    source={Images.placeholder}
                                    style={styles.placeholder}
                                />
                            </View>
                            <View style={styles.LocationSub2}>
                                <Text style={styles.LocationText1}>Pickup Location</Text>
                                <Text style={styles.LocationText2}>Historical Library & Museum</Text>
                                <View style={styles.marginView1}>
                                    <Text style={styles.LocationText1}>Destination Location</Text>
                                    <Text style={styles.LocationText2}>My Home</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.DistanceView}>
                        <View style={styles.DistanceSub1}>
                            <View style={styles.DistanceSub2}>
                                <Image
                                    source={Images.road}
                                    style={styles.route}
                                />
                                <Text style={styles.Number}>41 KM</Text>
                            </View>
                            <View style={styles.DateView}>
                                <View style={styles.DistanceSub1}>
                                    <Image
                                        source={Images.minute}
                                        style={styles.clock}
                                    />
                                    <Text style={styles.DateText}>58 Minutes</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.FooterView}>
                        <Text style={styles.FooterText1}>Ride Cost</Text>
                        <Text style={styles.FooterText2}>$ 48.98</Text>
                    </View>
                </View>
            </View>
        )
    }

    modalContent1(){
        return(
            <View style={styles.searchModal}>
                <View style={styles.modalTitleView}>
                    <TouchableOpacity>
                        <Text style={styles.modaltitle}>DECLINE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.setState({modal1:false})}>
                        <Text style={styles.modaltitle}>ACCEPT</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.search1}>JOB ID: 128</Text>
                <Text style={styles.search1}>PICK UP LOCATION</Text>
                <Text style={styles.search2}>8080 W Tropical pkwy, Las Vergas,{'\n'}NV 89149, USA</Text>
                <MapView
                    style={styles.map}
                    region={{latitude: this.state.latt, longitude: this.state.long, latitudeDelta: this.state.lattDelta, longitudeDelta: this.state.longDelta }}
                    >
                    <MapView.Marker coordinate={{latitude: this.state.latt+0.02, longitude: this.state.long+0.01 }}>
                      <Image
                        source={Images.marker}
                        style={styles.marker}
                      />
                    </MapView.Marker>
                </MapView>
                <Text style={styles.search1}>DROP LOCATION</Text>
                <Text style={styles.search2}>7941 W Tropical pkwy, Las Vergas,{'\n'}NV 89149, USA</Text>
                <View style={styles.searchRow}>
                    <View style={styles.charge}>
                        <Text style={styles.whitetext}>Estimated charges</Text>
                        <View style={styles.flexrow}>
                            <Text style={styles.whitetext}>$225.9</Text>
                            <Text style={styles.whitetext}>10 Miles</Text>
                            <Text style={styles.whitetext}>35 Min</Text>
                        </View>
                    </View>
                    <View style={styles.seat}>
                        <Text style={styles.whitetext}>$225.9</Text>
                        <Text style={styles.whitetext}>10 Miles</Text>
                    </View>
                </View>
            </View>
        )
    }

    modalContent(){
        return(
            <View style={styles.MainView}>
                <View style={styles.RateScreenWindow}>
                    <View style={styles. ExitButtonView}>
                        <TouchableOpacity onPress = {()=>this.setState({modal:false})}>
                            <Icon name="times" size={15} style={styles.ExitButton}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.UserNameView}>
                        <Text style={styles.UserName}>Geoage Edwards</Text>
                    </View>
                    <View style={styles.UserAddressView}>
                        <Text style={styles.UserAddress}>XYZ-182</Text>
                    </View>
                    <View style={styles.RateView}>
                        <Text style={styles. RateText}>$48.98</Text>
                    </View>
                    <View style={styles.line}/>
                    <View style={styles. RateTripView}>
                        <Text style={styles. RateTrip}>Rate your trip</Text>
                    </View>
                    <View style={styles.StarsView}>
                        <Rating
                                rating={this.state.rating}
                                max={5}
                                iconWidth={20}
                                iconHeight={20}
                                iconSelected={Images.selectStar}
                                iconUnselected={Images.grayStar}
                                onRate={(rating) => this.setState({rating: rating})}
                            />
                    </View>
                    <View style={{justifyContent:'flex-end', flex:1}}>
                        <View style={styles.SubmitButtonView}>
                            <TouchableOpacity onPress = {()=>this.setState({modal:false})}>
                                <Text style={styles.SubmitButton}>Submit Rating</Text>
                            </TouchableOpacity>
                        </View>
                    </View>    
                    <View style={styles.PictureView}>
                        <Image style={styles.Picture} source={Images.userDefault}/>
                        <View style={styles.markView}>
                            <Text style={styles.mark}>4.9</Text>
                        </View>
                    </View>
                </View>
                
            </View>
        )
    }
    render() {
        return (
            <Container>
                <ScrollView>
                    <View style={styles.item}>
                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContent()} />
                        <TouchableOpacity onPress={() => {
                            this.setState({ modal2: true });
                        }}>

                            <View style={styles.subItem}>
                                <View style={styles.partition1}>
                                    <Image source={Images.placeholder} style={styles.placeholder}/>
                                </View>

                                <View style={styles.partition2}>

                                            <Text style={styles.childStyle1}>Pickup Location</Text>

                                            <Text style={styles.childStyle2}>Historical Library & Museum</Text>
                                        <View style={styles.marginView}>
                                            <Text style={styles.childStyle1}>Destination Location</Text>

                                            <Text style={styles.childStyle2}>My Home</Text>
                                        </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item}>
                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContent()} />
                        <TouchableOpacity onPress ={()=>{this.setState({modal: true})}}>
                            <View style={styles.subItem}>
                                <View style={styles.partition1}>
                                    <Image source={Images.placeholder} style={styles.placeholder}/>
                                </View>
                                <View style={styles.partition2}>

                                            <Text style={styles.childStyle1}>Pickup Location</Text>

                                            <Text style={styles.childStyle2}>Historical Library & Museum</Text>
                                        <View style={styles.marginView}>
                                            <Text style={styles.childStyle1}>Destination Location</Text>

                                            <Text style={styles.childStyle2}>My Home</Text>
                                        </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <ModalView modalContent={this.modalContent2.bind(this)}  modalVisible={this.state.modal2}/>
                        <ModalView modalContent = {this.modalContent.bind(this)} modalVisible={this.state.modal}/>
                        <ModalView modalContent = {this.modalContent1.bind(this)} modalVisible={this.state.modal1}/>
                    </View>
                    <View style={styles.item}>
                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContent()} />
                        <TouchableOpacity onPress={() => {
                            this.setState({ modal1: true });
                        }}>
                            <View style={styles.subItem}>
                                <View style={styles.partition1}>
                                    <Image source={Images.placeholder} style={styles.placeholder}/>
                                </View>
                                <View style={styles.partition2}>


                                            <Text style={styles.childStyle1}>Pickup Location</Text>

                                            <Text style={styles.childStyle2}>Historical Library & Museum</Text>
                                        <View style={styles.marginView}>
                                            <Text style={styles.childStyle1}>Destination Location</Text>

                                            <Text style={styles.childStyle2}>My Home</Text>
                                        </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.item}>
                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContent()} />
                        <View style={styles.subItem}>
                            <View style={styles.partition1}>
                                <Image source={Images.placeholder} style={styles.placeholder}/>
                            </View>
                            <View style={styles.partition2}>


                                        <Text style={styles.childStyle1}>Pickup Location</Text>


                                        <Text style={styles.childStyle2}>Historical Library & Museum</Text>
                                    <View style={styles.marginView}>
                                        <Text style={styles.childStyle1}>Destination Location</Text>


                                        <Text style={styles.childStyle2}>My Home</Text>
                                    </View>

                            </View>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <ListHeader leftContent={this.headerLeftContent()} rightContent={this.headerRightContent()} />
                        <View style={styles.subItem}>
                            <View style={styles.partition1}>
                                <Image source={Images.placeholder} style={styles.placeholder}/>
                            </View>
                            <View style={styles.partition2}>

                                        <Text style={styles.childStyle1}>Pickup Location</Text>

                                        <Text style={styles.childStyle2}>Historical Library & Museum</Text>
                                    <View style={styles.marginView}>
                                        <Text style={styles.childStyle1}>Destination Location</Text>

                                        <Text style={styles.childStyle2}>My Home</Text>
                                    </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Container>
        )
    }
}
BookingsScreen.navigationOptions = ({ navigation }) => ({
    title: "My Bookings",

    headerLeft: (
        <TouchableOpacity
            onPress={() => navigation.navigate("DrawerOpen")}
            activeOpacity={0.5}
            style={styles.bookingPageHeader}
        >
            <Icon name="bars" size={20} />

        </TouchableOpacity>
    ),
    headerRight: <Text />
});
const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookingsScreen)
