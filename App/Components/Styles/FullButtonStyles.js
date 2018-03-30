import { StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes/'

export default StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    margin: 18,
    lineHeight: 0,
    textAlign: 'center',
    color: 'red',
    fontSize: Fonts.size.input,
    fontFamily: Fonts.type.bold,
  }
})
