import React, {Component} from 'react';

import {
  StackNavigator,
  TabNavigator,
  DrawerNavigator,
  TabBarTop,
    DrawerItems

} from "react-navigation";

import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, View, Image,Dimensions,ImageBackground,StyleSheet } from 'react-native';
import RegisterScreen from '../Containers/RegisterScreen';
import LoginScreen from '../Containers/LoginScreen';
import ProfileScreen from '../Containers/ProfileScreen';
import BookingsScreen from '../Containers/BookingsScreen';
import SearchScreen from '../Containers/SearchScreen';
import RateCardScreen from '../Containers/RateCardScreen';
import BookRideScreen from '../Containers/BookRideScreen';
import { Colors, Fonts } from '../Themes';
import DrawerDisplay from './DrawerDisplay'


const {height, width} = Dimensions.get("window");

const LoginTab = TabNavigator({
  Login: { screen: LoginScreen, navigationOptions: { title: 'Log In' },
  },
  Register: { screen: RegisterScreen, navigationOptions: { title: 'Register' } },
},
{
  navigationOptions: { title: 'TRIPPSTARS' },
  tabBarPosition: "Top",
  swipeEnabled: true,
  tabBarComponent: props => (
    <TabBarTop
      {...props}
      indicatorStyle={{
        backgroundColor: Colors.skyblue
      }}
    />
  ),
  tabBarOptions: {
    upperCaseLabel: false,
    labelStyle: {
      fontSize: 14,
      fontFamily: Fonts.type.bold,
    },
    style: {
      backgroundColor: Colors.snow,
    },
    activeTintColor: Colors.skyblue,
    inactiveTintColor: Colors.gray,
    tabBarStyle: {
      backgroundColor: "rgb(24,24,24)"
    },
    indicatorStyle: {
      borderColor: Colors.skyblue
    },
    tabStyle: {
      flex: 1
    }
  }
});

const LoginStack = StackNavigator({
    LoginTab: {screen: LoginTab, navigationOptions: {title: 'TRIPPSTARS'}}

});

const RateCardStack = StackNavigator({
    RateCardScreen : { screen : RateCardScreen},
});
const ProfileStack = StackNavigator({
    ProfileScreen : { screen : ProfileScreen }
});

const BookingStack = StackNavigator({
    BookingsScreen : { screen : BookingsScreen}
});

const BookRideStack = StackNavigator({
    BookRideScreen : { screen : BookRideScreen},
});

const DrawerNav = DrawerNavigator({
    BookRideStack : { screen : BookRideStack },
    ProfileStack : { screen : ProfileStack },
    RateCardStack : {screen : RateCardStack},
    BookingStack : { screen : BookingStack },
    SearchStack : { screen : SearchScreen },
    }, {
      contentComponent: DrawerDisplay,
      drawerWidth: 250
  }
);

// Manifest of possible screens
const PrimaryNav = StackNavigator({
    loginStack: { screen: LoginStack },
    mainStack: { screen: DrawerNav }
}, {
  // Default config for all screens
  headerMode: 'none',
});

export default PrimaryNav

