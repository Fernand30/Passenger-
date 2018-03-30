import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
    container: {
        flex: 1
    },
    inputStyle:{
        fontFamily:Fonts.type.base,
        letterSpacing:1,
    },
    labelStyle:{
        fontFamily:Fonts.type.base,
    },
    Icon:{
        flexDirection:'row',
        flexWrap:'wrap',
    },
    IconSubCont:{
        marginTop:15,
        paddingRight : 8,
    }
})
