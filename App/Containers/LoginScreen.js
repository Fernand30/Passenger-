import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity, Button, Dimensions, TouchableHighlight } from 'react-native'
import { connect } from 'react-redux'
import { Images, Colors, Metrics, Fonts, } from '../Themes'
import { Container, Content, Form, Item, Input, Spinner, Toast, Label } from 'native-base';
import AuthActions from '../Redux/AuthRedux'
import FullButton from '../Components/FullButton'
import InputCompoent from '../Components/InputCompoent'
import ModalView from '../Components/ModalView'
// import {FBLogin, FBLoginManager} from 'react-native-facebook-login';

import { AsyncStorage } from 'react-native'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'


class LoginScreen extends Component {

    constructor(props: LoginScreenProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            modal: false
        }
        this.handleLogin = this._handleLogin.bind(this);
    }

    _handleLogin(data){
        const params = {
            user_name: data.first_name,
            profile: data.picture.data.url,
            device_type: 'ios',
            email: data.email,
            user_type: 'user',
            user_login_type: 'FB',
            fid : data.id,
            mobile_no: 9876567890,
            sn: 1234567890,
            dids: 2345678
        };
        this.props.attemptRegister(params)
    }
    fbLogin(){
        // FBLoginManager.loginWithPermissions(["email","user_friends"],(error, data)=>{
        //     if (!error) {
        //        this.handleLogin(JSON.parse(data.profile))
        //     } else {
        //         console.log("Error: ", error);
        //     }
        // })
    }
    /**
     * Render Login form
     */

    componentDidUpdate(prevProps) {
        if (this.props.error && prevProps.error != this.props.error) {
            return alert(this.props.error);
        }
        if (!this.props.fetching && !!prevProps.fetching != !!this.props.fetching) {
            alert(this.props.success);

            (this.props.success == 'Login successfully!') ? this.props.navigation.navigate("mainStack") : this.props.navigation.navigate("Login");
        }
    }


    userLogin(){
        const {email, password} =  this.state;
        const params = {
            device_type: 'ios',
            password: password,
            email: email,
            user_type: 'user',
            user_login_type: 'guest',
            sn: 8765432456789,
            dids: 123456789
        };
        this.props.attemptLogin(params);
    }

    forgotPass(){
        const params = {
            en : 'FP',
            uid : this.props.user && this.props.user._id ,
            type : 'user'
        }
        this.props.forgotPassword(params);
    }

    renderForm() {
        return (
            <View style={styles.formContainer}>
                <Form>
                    <InputCompoent
                        labelText='Email Address'
                        icon ="envelope-o"
                        placeholder='Enter Email Address'
                        inputRef='email'
                        value={this.state.email}
                        secureTextEntry={false}
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                    <InputCompoent
                        labelText='Password'
                        icon ="unlock-alt"
                        placeholder='Enter Password'
                        inputRef='password'
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={(text) => this.setState({ password: text })}
                    />

                </Form>
                <FullButton
                    text='Forgot Password ?'
                    style={{
                        backgroundColor: Colors.snow,
                        bottom: 10,
                        alignItems: 'center',
                        borderRadius: 5,
                        marginTop: 50,
                        height: Metrics.baseMargin * 2,
                    }}
                    textStyle={{
                        color: Colors.skyblue,
                        fontSize: 14
                    }}
                    onPress={() => {
                        this.setState({ modal: true });
                    }}
                />
            </View>
        )
    }
    /***
     * Button Containter
     */
    renderButton() {
        return (
            <View style={styles.buttonContainer}>
                <FullButton
                    text='Log In'
                    style={{
                        backgroundColor: Colors.skyblue,
                        bottom: Metrics.baseMargin,
                        alignItems: 'center',
                        borderRadius: 5,
                        marginTop: 10,
                        height: Metrics.baseMargin * 5,
                    }}
                    textStyle={{
                        marginTop: 5,
                        color: '#f0f0f0',
                        fontSize: 13
                    }}
                    onPress={this.userLogin.bind(this)}
                />
                <View
                    style={styles.hr}
                />
                <FullButton
                    text='login via facebook'
                    style={{
            backgroundColor: Colors.facebook,
            bottom: Metrics.baseMargin,
            alignItems: 'center',
            borderRadius: 5,
            marginTop: 10,
            height: Metrics.baseMargin * 5,
          }}
                    textStyle={{
            color: '#f0f0f0',
          }}
                    onPress={this.fbLogin.bind(this)}
                />
            </View>
        )
    }
    closeModal(){
        this.setState({modal: false})
    }

    modalContent(){
        return(
            <View style={styles.forgotSub}>
                <View style={styles.forgotField}>
                    <InputCompoent
                        labelText='Email Address'
                        icon ="envelope-o"
                        placeholder='Enter Email Address'
                        inputRef='email'
                        value={this.state.email}
                        secureTextEntry={false}
                        onChangeText={(text) => this.setState({ email: text })}
                    />
                </View>
                <View style={styles.forgotField}>
                    <Button
                        onPress={()=>{}}
                        title="Reset Password"
                        color="#2297f4"
                    />
                </View>
            </View>
        )
    }

    renderModal(){
        return this.state.modal && <ModalView modalContent={this.modalContent.bind(this)} closeModal={this.closeModal.bind(this)} modalVisible={true}/>
    }




    /**
     * Forgot password modal
     */

    render() {
        return (
            <Container>
                <Content>
                    <View style={styles.contentStyle}>
                        {this.renderModal()}
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
        success : state.auth.success,
        user: state.auth.user
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        attemptLogin: (passcode) => dispatch(AuthActions.authRequest(passcode)),
        attemptRegister: (params) => dispatch(AuthActions.regRequest(params)),
        updateUser: (params) => dispatch(AuthActions.authSuccess(params)),
        forgotPassword: (params) => dispatch(AuthActions.forgotRequest(params)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)


