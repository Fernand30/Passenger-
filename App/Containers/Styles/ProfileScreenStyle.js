import { StyleSheet } from 'react-native'
import {  Images, Colors, Metrics, Fonts, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  profilePicContent:{
    height:250,
    backgroundColor: Colors.snow,
    justifyContent: 'center',
    alignItems: 'center',
//     marginTop:20,
    shadowColor: Colors.gray,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    //elevation: 100,
  },
  profilePicView:{
    height:100,
    width:100,
    borderRadius:50
  },
  profilePic:{
    height:100,
    width:100,
    borderRadius:50
  },
  userName:{
    ...Fonts.style.h5,
    fontWeight:'400',
    margin:10,
  },
  phoneNumber:{
    fontWeight:'700',
    letterSpacing:1,
    fontFamily: Fonts.type.base,
    color:Colors.gray
  },
  userInfoContent:{
    flex:1,
    marginTop:30,
    height:200,
    backgroundColor:Colors.snow

  },
  userInfoView:{
    backgroundColor:Colors.snow,
    padding:10,
  },
  userFormContent: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth:1,
    borderColor:'#cdcdcd',
    justifyContent: "space-between",
    alignItems:'center'
  },
  userFormIcon: {
    flex:2,
    alignItems: 'center'
  },
  userFormUl:{
    flex:5
  },
  userFormUlIcon:{
    flex:1
  },
  userFormLabel:{
    fontWeight:'bold',
    color:'#000',
    fontSize: 14,
  },
  userFormText: {
    fontWeight:'bold',
    fontSize:14,
    color:'#cdcdcd',
    textAlign:'right',
    paddingRight: 10
  },
  profilePageFooter: {
    width: '100%'
  },
  profilePageFooterView: {
    flex: 1,
    backgroundColor: Colors.snow,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profilePageFooterText: {
    color: 'black',
    fontWeight: 'bold'
  },
  profilePageHeader: {
    padding: 20
  },
  updateInput:{
    height: 40,
    marginRight:10
  }
})
