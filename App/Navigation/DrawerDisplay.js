import React, {Component} from 'react';
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, View, Image, Dimensions, ImageBackground, StyleSheet } from 'react-native';
import styles from './Styles/NavigationStyles'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Images } from '../Themes'

export default class DrawerDisplay extends Component{

    renderHeader(){
        return (
            <View style={{flex: 1}}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('ProfileStack')}}>
                    <ImageBackground style={styles.backgroundImg} blurRadius={10} source={Images.profile}>
                      <Image style={styles.innerImg} source={Images.default}/>
                      <Text style={styles.imgText}>Richard Parker</Text>
                    </ImageBackground>
                </TouchableOpacity>

                <View style={styles.subContainer}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('BookRideStack')}}>
                        <View style={styles.rowView}>
                            <View style={styles.fixView}>
                                <Image source={Images.icon1} style={styles.icon1} />
                            </View>
                            <Text style={styles.text}>Book My Trips</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.subContainer}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('BookingStack')}}>
                        <View style={styles.rowView}>
                            <View style={styles.fixView}>
                                <Image source={Images.icon2} style={styles.icon1} />
                            </View>
                            
                        
                            <Text style={styles.text}>My Trips</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={styles.subContainer}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('RateCardStack')}}>
                        <View>
                            <View style={styles.rowView}>
                                <View style={styles.fixView}>
                                    <Image source={Images.icon} style={styles.icon1} />
                                </View>
                                
                            
                                <Text style={styles.text}>Rate Card</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={styles.subContainer}>
                    <TouchableOpacity>
                        <View>
                            <View style={styles.rowView}>
                                <View style={styles.fixView}>
                                    <Image source={Images.icon3} style={styles.icon1} />
                                </View>
                                
                            
                                <Text style={styles.text}>Support</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>


                <View style={styles.subContainer}>
                    <TouchableOpacity>
                        <View style={styles.rowView}>
                            <View style={styles.fixView}>
                                <Image source={Images.icon4} style={styles.icon1} />
                            </View>
                            
                       
                            <Text style={styles.text}>About Us</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderFooter(){
        return (
            <View style={[styles.footer]}>
                <TouchableOpacity>
                    <Text style={styles.text}>Log Out</Text>
                </TouchableOpacity>
            </View>
        )
    }

    render(){
        return(
            <View style={styles.container}>
                {this.renderHeader()}
                {this.renderFooter()}
            </View>
        )
    }
}
