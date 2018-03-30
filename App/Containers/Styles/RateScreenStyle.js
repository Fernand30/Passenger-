import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '../../Themes/';
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
    MainView:{
        height:height,
        width:width,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    RateScreenWindow:{
        height:height*0.55,
        width:width*0.8,
        backgroundColor:Colors.snow
    },
    ExitButtonView:{
        marginLeft:width*0.75
    },
    ExitButton:{
        color:Colors.lightgray
    },
    UserNameView:{
        height:height*0.05,
        width:width,
        marginTop:width*0.1
    },
    UserName:{
        fontWeight:'bold',
        fontSize:18,
        marginLeft:width*0.2,
        color:Colors.charcoal
    },
    UserAddressView:{
        height:height*0.05,
        width:width
    },
    UserAddress:{
        color:'#d6d6d6',
        fontWeight:'bold',
        fontSize:12,
        marginLeft:width*0.32
    },
    RateView:{
        height:height*0.05,
        width:width
    },
    RateText:{
        fontWeight:'bold',
        fontSize:20,
        marginLeft:width*0.3,
        color:Colors.charcoal
    },
    RateTripView:{
        height:height*0.05,
        width:width,
        marginTop:width*0.1
    },
    RateTrip:{
        color:'#d6d6d6',
        fontWeight:'bold',
        fontSize:13,
        marginLeft:width*0.28
    },
    StarsView:{
        height:height*0.07,
        width:width,
        flexDirection: 'row',
        marginLeft:width*0.14,
        alignItems: 'center',
        marginTop:width*0.03
    },
    Stars:{
        padding:5
    },
    SubmitButtonView:{
        position:'absolute',
        right:0,
        left:0,
        bottom:0,
        backgroundColor:'#649aef',
        width:width,
        height:height*0.08,
        justifyContent:'center'
    },
    SubmitButton:{
        marginLeft:width*0.27,
        fontWeight:'bold',
        fontSize:16,color:'white'
    },
    PictureView:{
        width:width*0.23,
        height:width*0.23,
        backgroundColor:'white',
        borderRadius:100,
        justifyContent: 'center',
        position:'absolute',
        top:52
    },
    Picture:{
        width:width*0.23,
        height:width*0.23,
        borderRadius:100
    }





})