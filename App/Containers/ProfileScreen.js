import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, TouchableOpacity, View, Image, TextInput } from 'react-native';
import { Container, Content, Footer, Label, Button } from 'native-base';
import { Images, Colors, Metrics, Fonts, } from '../Themes';
import FullButton from '../Components/FullButton';
import { connect } from 'react-redux';
import AuthActions from '../Redux/AuthRedux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { AsyncStorage } from 'react-native';
var ImagePicker = require('react-native-image-picker');
const pickerOptions = {
  title: "Select Profile Photo",
  takePhotoButtonTitle: "Camera",
  chooseFromLibraryButtonTitle: "Choose from Library",
  mediaType: "photo",
  storageOptions: {
    skipBackup: true,
    path: "images"
  },
  quality: 0.6,
  noData: true,
  maxWidth: 500,
  maxHeight: 500
};

// import { FBLoginManager } from 'react-native-facebook-login'

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle'

class ProfileScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      updateName : false,
      updateEmail : false,
      updateMobile : false,
      updatePassword : false,
      editable: false,
      fullName: this.props.user && this.props.user.user_name,
      emailAddress: this.props.user && this.props.user.email,
      mobileNumber: this.props.user && this.props.user.mobile_no,
      Password: '123456',
      coverImageSource:{},
      profileImage: '',
    };

    this.logout = this._logout.bind(this);
  }

  static navigationOptions = ({ navigation }) => {
  const { params = {} } = navigation.state;
  return{
      title: "",

      headerLeft: (
        <TouchableOpacity
          onPress={() => navigation.navigate("DrawerOpen")}
          activeOpacity={0.5}
          style={styles.profilePageHeader}
        >
          <Icon name="bars" size={20} />

        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity
          onPress={() => params.handleEdit()}
          activeOpacity={0.5}
          style={styles.profilePageHeader}
        >
          <Image source={Images.edit} style={{width:20,height:20}}/>

        </TouchableOpacity>
      ),
    }
}

  componentDidMount() {    
    this.props.navigation.setParams({ handleEdit: this.profileEdit.bind(this) });    
  }

  profileEdit(){
    this.setState({ editable: true})
  }

  updateProfile(params){
    params.uid = this.props.user && this.props.user._id ;
    this.props.updateProfile(params);
  }

  _logout = async () => {
    await AsyncStorage.setItem("@irate-user", JSON.stringify({}));
    this.props.logout({});
    this.props.navigation.navigate("loginStack");
      // FBLoginManager.logout(function(error, data){
      //     if (!error) {
      //     } else {
      //         console.log(error, data);
      //     }
      // });
  };

  onGallery(){
    ImagePicker.showImagePicker(pickerOptions, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        showToast('User cancelled image picker');
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        showToast(response.error);
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        this.onImageSelected(response);

      }
    });
  }

  onImageSelected = (image) => {
    this.setState({ 
      profileImage: image.uri,
    })
  }

  render() {
      return (
      <Container>
        <Content>
          <View style={styles.profilePicContent}>
            <TouchableOpacity onPress={()=>this.onGallery()} style={styles.profilePicView}>
              <Image
                source={(this.state.profileImage=='')?Images.userDefault:{uri:this.state.profileImage}}
                style={styles.profilePic}
              />
            </TouchableOpacity>
            <Text style={styles.userName}>{this.props.user && this.props.user.user_name}</Text>
            <Text style={styles.phoneNumber}>{this.props.user && this.props.user.mobile_no
            }</Text>
          </View>

          <View style={styles.userInfoContent}>
              <View style={styles.userFormContent}>
                  <View style={styles.userFormIcon}>
                    <Icon name="user-o" size={20} color="#cdcdcd" />
                  </View>
                  <View style={styles.userFormUl}>
                      
                    <Text style={styles.userFormLabel}>Full Name</Text>
                      
                  </View>
                  <View style={styles.userFormUl}>
                      {!this.state.editable ? <Text style={styles.userFormText}>{this.state.fullName}</Text> : 
                      <TextInput style={styles.UpdateInput} onChangeText={(name) => this.setState({fullName : name})} value={String(this.state.fullName)}/>}
                  </View>
                  <View style={styles.userFormUlIcon}>
                      <TouchableOpacity onPress={this.updateProfile.bind(this, {user_name : this.state.fullName})}>
                        <Icon name="play" size={13} color="#75B1FA" />
                      </TouchableOpacity>
                  </View>
            </View>

            <View style={styles.userFormContent}>
              <View style={styles.userFormIcon}>
                <Icon name="envelope-o" size={20} color="#cdcdcd" />
              </View>
              <View style={styles.userFormUl}>
                  
                    <Text style={styles.userFormLabel}>Email Address</Text>
                  
              </View>
              <View style={styles.userFormUl}>
                  {!this.state.editable ? <Text style={styles.userFormText}>{this.state.emailAddress}</Text>: 
                  <TextInput style={styles.UpdateInput} onChangeText={(email) => this.setState({emailAddress: email})} value={String(this.state.emailAddress)}/>}
              </View>
              <View style={styles.userFormUlIcon}>
                  <TouchableOpacity onPress={this.updateProfile.bind(this, {email : this.state.emailAddress})}>
                    <Icon name="play" size={13} color="#75B1FA" />
                  </TouchableOpacity>
              </View>
            </View>

            <View style={styles.userFormContent}>
              <View style={styles.userFormIcon}>
                <Icon name="mobile" size={25} color="#cdcdcd" />
              </View>
              <View style={styles.userFormUl}>
                  
                    <Text style={styles.userFormLabel}>Mobile Number</Text>
                  
              </View>
              <View style={styles.userFormUl}>
                  {!this.state.editable ? <Text style={styles.userFormText}>{this.state.mobileNumber}</Text> : 
                  <TextInput style={styles.UpdateInput} onChangeText={(num) => this.setState({mobileNumber : num})} value={String(this.state.mobileNumber)}/>}
              </View>
              <View style={styles.userFormUlIcon}>
                  <TouchableOpacity onPress={this.updateProfile.bind(this, {mobile_no : this.state.mobileNumber})}>
                    <Icon name="play" size={13} color="#75B1FA" />
                  </TouchableOpacity>
              </View>
            </View>

            <View style={styles.userFormContent}>
              <View style={styles.userFormIcon}>
                <Icon name="lock" size={20} color="#cdcdcd" />
              </View>
              <View style={styles.userFormUl}>
                  
                    <Text style={styles.userFormLabel}>Update Password</Text>
                  
              </View>
              <View style={styles.userFormUl}>
                  {!this.state.editable ? <Text style={styles.userFormText}>{this.state.Password}</Text> : 
                  <TextInput style={styles.UpdateInput} onChangeText={(pass) => this.setState({updatePassword : pass})} value={String(this.state.updatePassword)}/> }
              </View>
              <View style={styles.userFormUlIcon}>
                  <TouchableOpacity onPress={this.updateProfile.bind(this, { password: this.state.Password} )}>
                    <Icon name="play" size={13} color="#75B1FA" />
                  </TouchableOpacity>
              </View>
            </View>
          </View>
        </Content>
        <Footer>
          <TouchableOpacity style={styles.profilePageFooter} onPress={this.logout}>
            <View style={styles.profilePageFooterView}>
              <Text style={styles.profilePageFooterText}>Log out</Text>
              </View>
          </TouchableOpacity>

        </Footer>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      user: state.auth.user
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      updateProfile: (params) => dispatch(AuthActions.updateProfile(params)),
      logout: (params) => dispatch(AuthActions.authSuccess(params))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
