import React,{ Component } from 'react';
import {View,Text,Dimensions,Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Colors, Images } from '../Themes';
import styles from './Styles/RateScreenStyle'
const {width, height} = Dimensions.get('window');

export default class RateScreen extends Component{
    render(){
        return(
            <View style={styles.MainView}>
                <View style={styles.RateScreenWindow}>
                        <View style={styles. ExitButtonView}>
                        <Icon name="times" size={20} style={styles.ExitButton}/>
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
                    <View style={styles. RateTripView}>
                        <Text style={styles. RateTrip}>Rate your trip</Text>
                    </View>
                    <View style={styles.StarsView}>
                        <Icon name="star" size={30} style={styles.Stars} />
                        <Icon name="star" size={30} style={styles.Stars}/>
                        <Icon name="star" size={30} style={styles.Stars}/>
                        <Icon name="star" size={30} style={styles.Stars}/>
                        <Icon name="star" size={30} style={styles.Stars}/>
                    </View>
                    <View style={styles.SubmitButtonView}>
                        <Text style={styles.SubmitButton}>Submit Rating</Text>
                    </View>
                </View>
                <View style={styles.PictureView}>
                    <Image style={styles.Picture} source={require('./../Images/ratingProfile.jpg')}/>
                </View>
            </View>
        )
    }
}
