import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Metrics } from '../../Themes/';
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({

    forgotSub: {
        marginTop:height*0.1,
        backgroundColor:'#fff',
        height:height*0.8,
        padding:10,margin:15
    },
    ModalView:{
        flex: 1,
        flexDirection: 'column'
    },
    ModalIconView:{
        height: height*0.04
    },
    ModalIcon:{
        marginLeft:width*0.8
    },
    ModalProfileView1:{
        height: height*0.13,
        alignItems:'center',
        justifyContent:'center'
    },
    ModalProfileView2:{
    },
    ModalProfile:{
        width:width*0.2,
        height:width*0.2,
        borderRadius:width*0.1,
    },
    ProfileTextView:{
        height: height*0.05,
        alignItems:'center',
        justifyContent:'center'
    },
    ProfileText:{
        fontSize: Metrics.tinyFont *20
    },
    markView:{
      position: 'absolute',
      right: 0,
      bottom: 0,
      backgroundColor: '#1081e0',
      alignItems: 'center',
      justifyContent: 'center',
      width: height / 25,
      height: height /25,
      borderRadius: height /50
    },
    marktext:{
        color:'white',
        fontSize: Metrics.tinyFont*14
    },
    ProfileNumberView:{
        height: height*0.03,
        alignItems:'center',
        justifyContent:'center'
    },
    ProfileNumber:{
        color: '#cdcdcd',
        fontSize: Metrics.tinyFont *16
    },
    IconSubView:{
        flexDirection: 'row',
        justifyContent:'center'
    },
    Icon:{
        paddingHorizontal:5
    },
    carcheck:{
        width:height/20,
        height:height/20/74*28,
    },
    calendar:{
        width: height /30,
        height:height /30/42*41
    },
    placeholder:{
        width:height /40,
        height:height /40/67*293,
    },
    route:{
        width: height/20,
        height:height/20/64*65,
    },
    clock:{
        width:height/40,
        height:height/40
    },
    CarView:{
        height: height*0.1
    },
    CarSub:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    CarIcon:{
        flexDirection:'row',
        alignItems: 'center',
        marginLeft: 15,
        marginTop:height*0.028
    },
    Number:{
        marginLeft:5,
        color: '#cdcdcd',
        fontSize: Metrics.tinyFont*14
    },
    ClanderView:{
        marginLeft:width*0.3,
        marginTop:height*0.026
    },
    ClanderSub:{
        flexDirection:'row',
        flexWrap:'wrap'
    },
    ClanderIconText1:{
        marginLeft:5,
        color: '#cdcdcd',
        fontWeight: 'bold',
        fontSize: Metrics.tinyFont*16
    },
    LocationMain:{
        height: height*0.18
    },
    time:{
        marginLeft:width*0.11,
        position:'absolute',
        color: '#cdcdcd',
        top: 15,
        fontWeight: 'bold',
        fontSize: Metrics.tinyFont*16
    },
    LocationSub:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    LocationIcon:{
      marginHorizontal: height /40,
    },
    rowView:{
      flexDirection: 'row',
      alignItems: 'center'
    },
    yellowView:{
      width: width / 40,
      height: width / 40,
      backgroundColor: 'yellow',
      marginRight: width / 100
    },
    LocationSub2:{
        width: width*0.75
    },
    LocationSub3:{
      marginLeft: height /30
    },
    LocationText1:{
        color:'#A9A9A9',
        fontSize: Metrics.tinyFont*16
    },
    LocationText2:{
        fontSize :Metrics.tinyFont*18,
        fontWeight:'bold',
    },
    DistanceView:{
        height: height*0.08,

    },
    DistanceSub1:{
        flexDirection:'row',
        alignItems: 'center',
    },
    DistanceSub2:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft: 15,
    },
    DateView:{
        marginLeft:width*0.3,
        marginTop:height*0.012
    },
    DateText:{
        marginLeft:5,
        fontWeight: 'bold',
        color: '#cdcdcd',
        fontSize: Metrics.tinyFont*16
    },
    FooterView:{
        borderTopColor: Colors.steel,
        borderLeftColor : 'transparent',
        borderRightColor : 'transparent',
        borderBottomColor : 'transparent',
        paddingTop: 15,
        borderWidth: 1,
        height: height*0.1,
        alignItems:'center',
        justifyContent:'center'
    },
    FooterText1:{
        color:'#A9A9A9',
        fontSize: Metrics.tinyFont*20
    },
    FooterText2:{
        fontSize:28,
        fontSize: Metrics.tinyFont*20
    },
    bookingPageHeader: {
        padding: 20
    },
    header: {
        fontSize: Metrics.tinyFont*15,
        fontWeight: 'bold'
    },
    leftHeader: {
        color: Colors.steel
    },
    rightHeader: {
        color: 'black'
    },
    item: {
        flex: 1,
        flexDirection: 'column'
    },
    subItem: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical:  height /40,
        backgroundColor: 'white'
    },
    partition1: {
        width: '25%',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    partition2: {
        width: '75%',
        backgroundColor: 'white',
        justifyContent: 'center'
    },
    childItem: {
        width: '100%',
        height: 30
    },
    marginView:{
        marginTop: height /20
    },
    marginView1:{
        marginTop: height /50
    },
    childStyle1: {
        fontSize: Metrics.tinyFont*14,
        color: Colors.steel
    },
    childStyle2: {
        fontSize: Metrics.tinyFont*17,
        color: "black",
    },
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
        alignItems:'flex-end',
        paddingRight:10,
        paddingTop: 10,
        backgroundColor:'transparent'
    },
    ExitButton:{
        color:Colors.lightgray
    },
    UserNameView:{
        marginTop:width*0.1
    },
    UserName:{
        fontSize:18,
        textAlign:'center',
        color:Colors.charcoal
    },
    UserAddressView:{
        marginTop: 5
    },
    UserAddress:{
        color:'#d6d6d6',
        fontSize:12,
        textAlign:'center'
    },
    line:{
        height: 0.5,
        backgroundColor: 'black',
        marginHorizontal: 20,
        opacity:0.5,
        marginTop: 20
    },
    RateView:{
        alignItems:'center',
        marginTop: 20
    },
    RateText:{
        fontSize:25,
        color:Colors.charcoal
    },
    RateTripView:{
        alignItems:'center',
        marginTop:20
    },
    RateTrip:{
        color:'#d6d6d6',
        fontSize:14,
    },
    StarsView:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        marginTop:width*0.07
    },
    Stars:{
        padding:5
    },
    SubmitButtonView:{
        backgroundColor:'#2297f4',
        height:height*0.08,
        justifyContent:'center'
    },
    SubmitButton:{
        marginLeft:width*0.27,
        fontWeight:'bold',
        fontSize:16,color:'white'
    },
    markView:{
        position: 'absolute',
        bottom: 0,
        right:0,
        width:28,
        height:28,
        borderRadius:14,
        backgroundColor: '#2297f4',
        alignItems:'center',
        justifyContent:'center'
    },
    mark:{
        color: 'white',
        fontSize: 12
    },
    PictureView:{
        width:width*0.22,
        height:width*0.22,
        backgroundColor:'white',
        borderRadius:width*0.11,
        justifyContent: 'center',
        position:'absolute',
        top:-width*0.11,
        left: width*0.4-width*0.11,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.2 ,
        shadowRadius: 2,
        elevation: 4,
        alignItems:'center',
        justifyContent:'center'
    },
    Picture:{
        width:width*0.2,
        height:width*0.2,
        borderRadius:width*0.1,
    }

})
