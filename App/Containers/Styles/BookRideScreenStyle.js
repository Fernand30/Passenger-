import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Metrics } from '../../Themes/';
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    map: {
        width: width,
        flex:1,
    },
    footerForRideMain: {
        width: width
    },
    footerForRideView: {
        flex: 1,
        flexDirection: 'row'
    },
    mark:{
        width: height/6,
        height: height/6
    },
    carIcon:{
        width: height/15,
        height: height/15/318*159
    },
    carIcon2:{
        width: height/15,
        height: height/15
    },
    footerForRideViewText: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        width: width,
        height: height*0.07,
        backgroundColor: '#2196F3',
        paddingRight: 20,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection: 'row'
    },
    footerForRideText: {
        marginTop:height/60,
        fontSize: Metrics.tinyFont*17,
        marginLeft:3,
        fontWeight: '700',
        color: Colors.snow,
    },
    footerForRideText2: {
      fontSize: Metrics.tinyFont*16,
      marginLeft:3,
      fontWeight: '700',
      color: Colors.snow,
    },
    footerForRideText1:{
      fontSize: Metrics.tinyFont*16,
      marginLeft:3,
      fontWeight: '700',
      color: Colors.snow,
    },
    RideFooterText:{
        color:Colors.snow,
        marginLeft:width*0.013,
        fontSize: Metrics.tinyFont*17,
        fontWeight: '700'
    },
    RideNowFooter:{
      position: 'absolute',
      bottom:0,
      left: 0
    },
    RequestRideButton:{
        backgroundColor:'#2196F3',
        width : width*0.96,
        height: height*0.08,
        marginLeft: width*0.01,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
    },
    footerForRequest: {
        flex:0.5,
        width: width
   },
    footerForRequestMain: {
        width: width,
        height:height*0.3,
        left: 0,
        bottom: 0,
    },
    footerForRequestView: {
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    },
    footerForRequestUl: {
        height: height*0.19,
        width : width*0.25,
        backgroundColor: Colors.snow
    },
    footerForRequestLi: {
        flex: 2,
        flexDirection: 'column',
        alignItems:'center'
    },
    borderForActive: {
        width: '100%',
        height: 5,
        backgroundColor: '#2196F3'
    },
    borderForInactive: {
        width: '100%',
        height: 5,
        backgroundColor: Colors.snow
    },
    viewForImage: {
        width: '100%',
        alignItems: 'center',
        marginTop: height/15
    },
    imageOfView: {
        height: height/30,
        width: height/30/195*501,
    },
    viewForText: {
        alignItems: 'center',
        marginTop: height /40
    },
    textOfView: {
        fontSize: Metrics.tinyFont*11,
        color: '#a7aaaf'
    },
    footerForRequestFooter: {
        flex: 0.6,
        backgroundColor: Colors.snow,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingRight: 10,
        paddingLeft: 6
    },
    dialogueView: {
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        top: 20,
        right: width/10
    },
    dialogueViewMain: {
        width: width*0.8,
        marginLeft: width*0.1,
        height: height/11,
        backgroundColor: '#444B53',
        borderRadius: 5
    },
    iconForDialogue: {
        width: 50,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textForDialogue: {
        flex: 3,
        width: 50,
        height: 40,
        justifyContent: 'center'
    },
    textOfDialogue: {
        color: '#FFFFFF'
    },
    secondTextForDialogue: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    secondTextOfDialogue: {
        width: 320,
        height: 30,
        paddingLeft: 50,
    },
    colorOfText: {
        color: Colors.gray,
        backgroundColor:'transparent'
    },
    headerOfBookRide: {
        padding: 20
    },
    rideHereFooter: {
        flex: 1.3,
    },
    rideHereFooterHalf: {
        position: 'absolute',
        bottom: 0
    },
    rideHereFooterTouch: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    tapOnview: {
        height: 30,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rideHereFooter:{
        position:'absolute',
        bottom:0
    },
    tapOnViewText: {
        color: '#DFDFDF'
    },
    rideHereMain: {
        width: width,
        height: 120,

    },
    rideHereInner: {
        flex: 1.3,
        height: 120,
        backgroundColor: Colors.snow
    },
    rideHereInnerMain: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rideHereUl: {
        width: 86,
        height: 86,
        borderRadius: 100,
        position: 'absolute'
    },
    rideHereLi: {
        width: 86,
        height: 86,
        borderRadius: 100,
        position: 'absolute',
        flexDirection: 'column'
    },
    rideHereLiImg: {
        width: height/8,
        height: height/8,
        borderRadius: height/16,
    },
    rideHereLiSec: {
        width: 33,
        height: 33,
        flexDirection: 'column',
        marginLeft: 50,
        paddingTop: 50
    },
    rideHereLiSecView: {
        width: 33,
        height: 33,
        borderRadius: 100,
        backgroundColor: '#2196F3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rideHereLiSecViewText: {
        fontWeight: 'bold',
        fontSize: Metrics.tinyFont*15,
        color: Colors.snow
    },
    rideHereInnerSec: {
        flex: 1.7,
        height: 120,
        backgroundColor: Colors.snow
    },
    rideHereInnerSecMain: {
    },
    rideHereInnerSecText: {
        color: '#5a5b5b',
        fontSize: Metrics.tinyFont * 20
    },
    rideHereInnerSecView: {
        backgroundColor: Colors.snow
    },
    rideHereInnerSecViewText: {
        fontSize: Metrics.tinyFont*15,
        color: '#DFDFDF',
        marginTop: height / 100
    },
    rideHereInnerThrd: {
        flex: 0.7,
        height: 120,
        backgroundColor: Colors.snow
    },
    rideHereInnerThrdMain: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    rideHereInnerThrdView: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderColor: '#DFDFDF',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerConfirmBooking: {
        flex: 0.66,
        backgroundColor:'#fff'
    },
    footerConfirmBookingfir: {
        width: width,
        height: 25,
        backgroundColor: '#F6F6F6',
        alignItems: 'center',
        justifyContent:'center'
    },
    footerConfirmBookingsec: {
        width: '90%',
        height: 35
    },
    footerConfirmBookingsecfir: {
        flex: 0.5,
        height: 35,
        backgroundColor: Colors.snow,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerConfirmBookingsecSec: {
        flex: 2,
        height: 35,
        backgroundColor: Colors.snow,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    footerConfirmBookingsecSecText: {
        color: 'black',
        fontSize: Metrics.tinyFont*14
    },
    footerConfirmBookingsecThr: {
        flex: 1,
        height: 35,
        backgroundColor: Colors.snow,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    payment:{
      width: width / 20,
      height: width / 20
    },
    footerConfirmBookingsecThrText: {
        color: 'black',
        fontSize: Metrics.tinyFont*14
    },
    footerConfirmBookingsecFor: {
        flex: 0.8,
        height: 35,
        backgroundColor: Colors.snow,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerConfirmBookingThr: {
        width: '90%',
        height: 80,
        backgroundColor: Colors.snow
    },
    footerConfirmBookingThrFir: {
        flex: 1,
        height: 80,
        borderColor: '#F6F6F6',
        borderTopWidth: 0.5,
        borderRightWidth: 0.5
    },
    footerConfirmBookingThrFirFir: {
        flex: 1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerConfirmBookingThrFirFirText: {
        fontSize: Metrics.tinyFont*20,
        fontWeight: 'bold',
        color: '#626466'
    },
    footerConfirmBookingThrFirSec: {
        flex: 1,
        height: 40,
        alignItems: 'center'
    },
    Promo:{
      color:'#d1d4d6',
      fontSize: Metrics.tinyFont*18
    },
    threeman:{
      width: height / 20,
      height: height /20 /100*57
    },
    footerConfirmBookingThrSec: {
        flex: 1,
        height: 80,
        borderColor: '#F6F6F6',
        borderTopWidth: 0.5,
        borderLeftWidth: 0.5
    },
    footerMainView:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: 'red',
    },
    footerSubView:{
    },
    footerConfirmBookingThrSecText: {
        fontSize: Metrics.tinyFont*20,
        fontWeight: 'bold',
        color: '#8dc2ef'
    },
    footerConfirmBookingFor: {
        width: width,
        height: 70,
        backgroundColor: Colors.snow
    },
    footerConfirmBookingForMain: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerConfirmBookingForMainInner: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerConfirmBookingForInner: {
        width: width * 0.96,
        flexDirection: 'row',
        height: height*0.085,
        backgroundColor: '#2196F3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footerConfirmBookingForInnerFir: {
        width: '35%',
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 10
    },
    footerConfirmBookingForInnerSec: {
        width: '65%',
        height: '100%',
        justifyContent: 'center'
    },
    CompleteDialogueMain: {
        position:'absolute',
        top:0,
        left:width*0.1
    },
    CompleteDialogueView: {
        width: width*0.8,
        height: width*0.3,
        backgroundColor: '#444B53',
        borderRadius: 8
    },
    CompleteDialogueFirLi: {
        flex: 0.5,
        height: 130
    },
    CompleteDialogueUl: {
        flex: 2,
        height: 130,
    },
    CompleteDialogueUlView: {
        flex: 1,
        height: 30
    },
    CompleteDialogueUlFir: {
        fontSize: Metrics.tinyFont*15,
        fontWeight: 'bold',
        color: '#959999',
        paddingTop: 8
    },
    CompleteDialogueUlSec: {
        fontSize: Metrics.tinyFont*17,
        color: Colors.snow
    },
    CompleteDialogueUlThr: {
        height: 1,
        backgroundColor: '#959999',
        marginRight: height / 40
    },
    CompleteDialogueUlFor: {
        flex: 0.5,
        height: 1,
        borderColor: 'black',
        borderBottomWidth: 1
    },
    lastViewFir: {
        width: width,
        height: 100,
        borderColor: '#bfbfbf',
        borderBottomWidth: 1,
    },
    lastViewFirInner: {
        flex: 1,
        flexDirection: 'row',
        borderColor: 'powderblue',
        borderBottomWidth: 1,
        alignItems:'center'
    },
    location:{
        width:30,
        height:30
    },
    lastViewFirOne: {
        flex: 1.3,
        height: 100,
        backgroundColor: Colors.snow,
    },
    lastViewFirImg: {
        width: 100,
        height: 100/512*202,
        marginLeft:20
    },
    lastViewSecOne: {
        flex: 1,
        marginLeft: 20
    },
    lastViewSec: {
        width: width,
        height: 100
    },
    lastViewSecView: {
        height: 100,
        backgroundColor: Colors.snow
    },
    lastViewThrView: {
        flex: 0.7,
        height: 100,
        backgroundColor: Colors.snow
    },
    lastViewThr: {
        width: width,
        height: 60,
        backgroundColor: Colors.snow
    },
    lastViewThrOne: {
        flex: 1,
        height: 60,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    lastViewThrSec: {
        flex: 0.03,
        height: 60,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    lastViewThrThr: {
        flex: 1,
        height: 60,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    lastViewThrOneView: {
        width: '85%',
        height: 40,
        backgroundColor: '#2196F3',
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25
    },
    lastViewThrOneIcon: {
        flex: 0.5,
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 10
    },
    lastViewThrOneText: {
        flex: 2,
        height: 40,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    lastViewThrThrView: {
        width: '85%',
        height: 40,
        backgroundColor: '#2196F3',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25
    },
    lastViewThrThrText: {
        flex: 2,
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    lastViewThrThrTextText: {
        fontSize: Metrics.tinyFont * 17,
        fontWeight: 'bold',
        color: 'black'
    },
    lastViewThrThrIcon: {
        flex: 0.5,
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingRight: 10
    },
})
