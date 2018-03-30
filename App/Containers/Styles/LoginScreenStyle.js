import {Dimensions, StyleSheet} from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    contentStyle: {
        flex: 1,
        padding: Metrics.baseMargin*2
    },
    forgotPassword:{
        textAlign:'center',
        color:Colors.skyblue,
        fontWeight:'700',
        margin:Metrics.baseMargin*3,
        fontFamily:Fonts.type.bold
    },
    buttonContainer:{
        marginTop:Metrics.baseMargin*3,
    },
    hr:{
        borderBottomColor: Colors.gray,
        borderBottomWidth: 1,
        height:1,
        padding:10
    },
    forgotView: {
        height:height,
        backgroundColor:'rgba(0,0,0,0.5)'
    },
    forgotSub: {
        marginTop:height*0.3,
        backgroundColor:'#fff',
        height:height*0.4,
        padding:10,margin:15
    },
    forgotField:{
        padding: 20
    }
})
