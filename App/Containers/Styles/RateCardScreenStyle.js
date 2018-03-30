import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Metrics } from '../../Themes/';
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
    bookingPageHeader: {
        padding: 20
    },
    header: {
        fontSize: Metrics.tinyFont*12,
        fontWeight: 'bold'
    },
    header1: {
        fontSize: Metrics.tinyFont*14,
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
        flexDirection: 'row'
    },
    partition1: {
        width: '100%',
        backgroundColor: 'white',
    },
    partition2: {
        width: '75%',
        height: 140,
        backgroundColor: 'white'
    },
    childItem: {
        width: '100%',
        height: 30
    },
    childStyle1: {
        paddingTop: 15,
        fontSize: 12,
        color: Colors.steel
    },
    childStyle2: {
        fontSize: 16,
        color: "black"
    },
    main:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal: height / 30,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: height / 40
    },
    location:{
        width: width/25,
        height: width/25/78*109
    },
    main1:{
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        alignItems: 'center',
        paddingVertical: height / 80
    },
    mainLeftSub:{
        width:width*0.25,
        justifyContent:'center'
    },
    subText:{
        fontWeight:'bold',
        fontSize: Metrics.tinyFont*18,
        marginRight: 10
    },
    leftSubIcon:{
        width:width*0.05,
        justifyContent:'center'
    },
    mainRightSub:{
        justifyContent:'center',
        alignItems:'center',
    },
    mainRightImg:{
        width:130,
        height:60
    },
    mainRightText1:{
        marginTop: 5,
        marginLeft: 7,
        fontSize: Metrics.tinyFont*16,
        textAlign: 'center'
    },
    mainRightText2:{
        color : "#75B1FA",
        fontSize: Metrics.tinyFont*16,
        textAlign: 'center'
    },
    marinRightText:{
        color:'blue'
    },
    subLeftCont:{
        flex:1,
        justifyContent:'space-between'
    },
    subLeftSub1:{
        marginLeft:17,
        width:width*0.498,
        justifyContent:'center'
    },
    subLeftSub2:{
        marginLeft:17,
        width:width*0.3,
        height:height*0.04,
    },
    subLeftText:{
        color: Colors.darkgrey,
        marginBottom:8,
        fontSize: Metrics.tinyFont*16
    },
    midLine:{
        width:1,
        backgroundColor: Colors.steel,
        height: height/6
    },
    locIcon:{
        paddingTop: 5,
        width:width*0.498,
        justifyContent:'center'
    },
    locText:{
        fontSize: Metrics.tinyFont*14,
        color: Colors.steel,
        marginTop:8
    },
    wrapText:{
        flexDirection: 'row',
        alignItems:'center'
    },
    bottom:{
        height:140
    },
    bottomText:{
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:Colors.steel,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderTopColor: 'transparent',
        borderWidth:1
    },
    bottomSubText:{
        paddingTop: 10
    }


})
