import React, { Component } from 'react'
import { View, Image, Text, Platform, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { Images, Colors, Metrics, Fonts, } from '../Themes'
import { Container, Content, Form, Item, Input, Label } from 'native-base';
import AuthActions from '../Redux/AuthRedux'
import FullButton from '../Components/FullButton'
import InputCompoent from '../Components/InputCompoent'
import { showToast } from '../Services/ToastMessage';
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RegisterScreenStyle'
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
class RegisterScreen extends Component {
  constructor(props: RegisterScreenProps) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rePassword: '',
      profilePic: {}
    }

    this.handleRegister = this._handleRegister.bind(this);
  }

  _handleRegister() {
    if (this.state.profilePic.uri) {
      const { firstName, lastName, email, password, rePassword } = this.state;
      if (password !== rePassword) {
        showToast('Enter passwords are not matching')
        return false
      }
      // const params = {
      //   user_name: firstName + ' ' + lastName,
      //   device_type: Platform.OS,
      //   email,
      //   user_type: 'user',
      //   user_login_type: 'guest',
      //   password
      // };

      let fileToBeUploaded = {
        uri: this.state.profilePic.uri,
        type: this.state.profilePic.fileName.substr(this.state.profilePic.fileName.length - 3) == "png"
          ? "image/png"
          : "image/jpeg",
        name: this.state.profilePic.fileName
      };


      let data = new FormData();
      data.append("user_name", firstName + ' ' + lastName);
      data.append("device_type", Platform.OS);
      data.append("email", email);
      data.append("user_type", 'user');
      data.append("user_login_type",'guest');
      data.append("password",password);
      data.append("sn",'dids');
      data.append("dids",'dids');
      data.append("profile",fileToBeUploaded);

      this.props.attemptRegister(data)
    } else {
      showToast('Please choose user profile pic')
    }

  }

  isEmpty() {
    const { firstName, lastName, email, password, rePassword } = this.state;
    return !(firstName && lastName && email && password && rePassword)
  }


  addPhoto() {
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
        this.setState({
          profilePic: response
        })
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };


      }
    });
  }

  /**
   * Render Login form
   */
  renderForm() {
    return (
      <View style={styles.formContainer}>
        <View style={styles.profilePicContent}>
          <TouchableOpacity style={styles.profilePicView} onPress={() => this.addPhoto()}>

            {
              this.state.profilePic.uri && (<Image
                source={{ uri: this.state.profilePic.uri }}
                style={styles.profilePic}
              />) || (
                <Image
                  source={Images.userDefault}
                  style={styles.profilePic}
                />
              )
            }


          </TouchableOpacity>
        </View>
        <Form>
          <InputCompoent
            labelText='First Name'
            icon="user"
            placeholder='Enter First Name'
            inputRef='firstName'
            value={this.state.firstName}
            secureTextEntry={false}
            onChangeText={(text) => this.setState({ firstName: text })}
          />
          <InputCompoent
            labelText='Last Name'
            icon="user"
            placeholder='Enter last name'
            inputRef='lastName'
            secureTextEntry={false}
            value={this.state.lastName}
            onChangeText={(text) => this.setState({ lastName: text })}
          />
          <InputCompoent
            labelText='Email Address'
            icon="envelope-o"
            placeholder='Enter Email Address'
            inputRef='email'
            value={this.state.email}
            secureTextEntry={false}
            onChangeText={(text) => this.setState({ email: text })}
          />
          <InputCompoent
            labelText='Password'
            icon="unlock-alt"
            placeholder='Enter password'
            inputRef='password'
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
          />
          <InputCompoent
            labelText='Confirm Password'
            icon="unlock-alt"
            placeholder='Re-enter your password'
            inputRef='rePassword'
            secureTextEntry={true}
            value={this.state.rePassword}
            onChangeText={(text) => this.setState({ rePassword: text })}
          />
        </Form>
      </View>
    )
  }
  /***
   * Button Containter
   */

  renderButton() {
    const disabled = this.isEmpty();
    return (
      <View style={styles.buttonContainer}>
        <FullButton
          text='Register'
          style={{
            backgroundColor: disabled ? Colors.steel : Colors.skyblue,
            bottom: Metrics.baseMargin,
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 10,
            height: Metrics.baseMargin * 5,
          }}
          textStyle={{
            color: '#f0f0f0',
          }}
          disabled={disabled}
          onPress={this.handleRegister}
        />
      </View>
    )
  }

  render() {
    return (
      <Container>
        <Content>
          <View style={styles.contentStyle}>

            {this.renderForm()}
            {this.renderButton()}
          </View>

        </Content>

      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.auth.fetching,
    error: state.auth.error,
    success: state.auth.success


  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    attemptRegister: (params) => dispatch(AuthActions.regRequest(params))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)
