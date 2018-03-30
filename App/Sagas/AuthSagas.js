import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import AuthActions from '../Redux/AuthRedux'
import { AsyncStorage } from 'react-native'

export function * checkPasscode (api, action) {
  const { passcode } = action;
  // make the call to the api
  const response = yield call(api.checkPasscode, passcode);
  if (response.status === 200 && response.data.status) {
    // do data conversion here if needed
    AsyncStorage.setItem('@irate-passcode', passcode);
    yield put(AuthActions.authSuccess(passcode))
  } else {
    switch(response.problem){
      case 'NETWORK_ERROR':
        yield put(AuthActions.authFailure("Network Connection is not available"));
        break;
      case 'CONNECTION_ERROR':
        yield put(AuthActions.authFailure("Server is not available"));
        break;
      default:
        yield put(AuthActions.authFailure(response.data.message));
        break;
    }
  }
}

export function * registerUser (api, action) {
  const response = yield call(api.registerUser, action.params);
  if (response.status === 200 && !response.data.error) {
    // do data conversion here if needed
    //AsyncStorage.setItem('@irate-passcode', passcode);
      if(response.data.data.user_login_type === 'FB'){
          AsyncStorage.setItem('@irate-user', JSON.stringify(response.data.data));
          yield put(AuthActions.authSuccess("Login successfully!", response.data.data))
      }
      else{
          yield put(AuthActions.authSuccess("Registration Successfully!"))
      }


  } else {
    switch(response.problem){
      case 'NETWORK_ERROR':
        yield put(AuthActions.authFailure("Network Connection is not available"));
        break;
      case 'CONNECTION_ERROR':
        yield put(AuthActions.authFailure("Server is not available"));
        break;
      default:
        yield put(AuthActions.authFailure(response.data.msg));
        break;
    }
  }
}


export function * loginUser (api, action) {
    const response = yield call(api.loginUser, action.params);
    if (response.status === 200 && !response.data.error) {
        // do data conversion here if needed
        AsyncStorage.setItem('@irate-user', JSON.stringify(response.data.data));
        yield put(AuthActions.authSuccess("Login successfully!", response.data.data))
    } else {
        switch(response.problem){
            case 'NETWORK_ERROR':
                yield put(AuthActions.authFailure("Network Connection is not available"));
                break;
            case 'CONNECTION_ERROR':
                yield put(AuthActions.authFailure("Server is not available"));
                break;
            default:
                yield put(AuthActions.authFailure(response.data.msg));
                break;
        }
    }
}



export function * profileUpdate (api, action) {
    const response = yield call(api.profileUpdate, action.params);
    if (response.status === 200 && !response.data.error) {
        // do data conversion here if needed
        //AsyncStorage.setItem('@irate-passcode', passcode);
        yield put(AuthActions.authSuccess("profile updated!"))
    } else {
        switch(response.problem){
            case 'NETWORK_ERROR':
                yield put(AuthActions.authFailure("Network Connection is not available"));
                break;
            case 'CONNECTION_ERROR':
                yield put(AuthActions.authFailure("Server is not available"));
                break;
            default:
                yield put(AuthActions.authFailure(response.data.msg));
                break;
        }
    }
}


export function * forgotPassword (api, action) {
    const response = yield call(api.forgotPassword, action.params);
    if (response.status === 200 && !response.data.error) {
        // do data conversion here if needed
        //AsyncStorage.setItem('@irate-passcode', passcode);
        yield put(AuthActions.authSuccess("check your email!"))
    } else {
        switch(response.problem){
            case 'NETWORK_ERROR':
                yield put(AuthActions.authFailure("Network Connection is not available"));
                break;
            case 'CONNECTION_ERROR':
                yield put(AuthActions.authFailure("Server is not available"));
                break;
            default:
                yield put(AuthActions.authFailure(response.data.msg));
                break;
        }
    }
}
