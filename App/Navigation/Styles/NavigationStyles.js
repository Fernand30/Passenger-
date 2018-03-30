import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics } from '../../Themes/'
const {height, width} = Dimensions.get("window");

export default StyleSheet.create({
  header: {
    backgroundColor: Colors.backgroundColor
  },
  backgroundImg: {
    width: 250,
    height: height * 0.3,
    paddingTop: height / 7.5,
    paddingLeft: height / 35
  },
  avatarContainer: {
    position: 'absolute'
  },
  img : {
    width:width * 0.2,
    height:width * 0.2,
    borderRadius: 100,
    marginTop:height * 0.11,
    marginLeft:width * 0.08
  },
  imgText : {
    fontSize:15,
    fontWeight: '700',
    color:'#fff',
    marginTop: 15,
    backgroundColor:'transparent'
  },
  innerImg : {
    borderRadius: width / 12,
    width:width / 6,
    height:width  /6
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  subContainer: {
    marginTop: 30,
    marginLeft: 20
  },
  flex1: {
    flex: 1
  },
  footer: {
    height: 60,
    borderTopColor:'lightgrey',
    borderTopWidth:1,
    justifyContent: 'center',
    paddingLeft: 20
  },
  leftMargin: {
    marginLeft: 2
  },
  text: {
    marginLeft: height/50,
    fontSize: Metrics.tinyFont*18,
  },
  rowView:{
    flexDirection: 'row',
    alignItems:'center'
  },
  fixView:{
    width: height/30,
    alignItems: 'center'
  }

})
