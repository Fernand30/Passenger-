import { StyleSheet, Dimensions } from 'react-native';
import { Colors, Metrics } from '../../Themes/';
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
    contentStyle: {
        flex: 1,
        paddingTop:20
    },
    absoluteFill:{
    	flex:1
    },
    back:{
    	width:20,
    	height: 20
    },
    headerVeiw:{
    	height: 50,
    	justifyContent: 'center',
    	paddingLeft: 10
    },
    fromto:{
    	marginHorizontal:10
    }
})
