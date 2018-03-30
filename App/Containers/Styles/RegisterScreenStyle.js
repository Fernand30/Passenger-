import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  contentStyle: {
    flex: 1,
    padding: Metrics.baseMargin*2
  },
  buttonContainer:{
    marginTop:Metrics.baseMargin*3,
  },
  profilePicContent:{
    height:100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePicView:{
    height:100,
    width:100,
  },
  profilePic:{
    height:100,
    width:100,
    borderRadius:50
    
  }
  
})
