import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { AsyncStorage } from 'react-native'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
    authRequest: ['params'],
    authSuccess: ['msg', 'user'],
    authFailure: ['error'],
    regRequest: ['params'],
    forgotRequest: ['params'],
    updateProfile : ['params']

});

export const AuthTypes = Types;
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
    passcode: null,
    fetching: null,
    error: null,
    user: null
})

/* ------------- Selectors ------------- */

export const AuthSelectors = {
    isLoggedIn: state => {
        return state.passcode != null ? true : false;
    }
}

/* ------------- Reducers ------------- */

// request the avatar for a user
export const request = (state) =>
    state.merge({ fetching: true, error: null });

// successful avatar lookup
export const success = (state, action) => {
    return state.merge({ fetching: false, error: null, success: action.msg, user: action.user })
}


// failed to get the avatar
export const failure = (state, { error }) =>
    state.merge({ fetching: false, error: error });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.AUTH_REQUEST]: request,
    [Types.AUTH_SUCCESS]: success,
    [Types.AUTH_FAILURE]: failure,
    [Types.REG_REQUEST]: request,
    [Types.UPDATE_PROFILE]: request,
    [Types.FORGOT_REQUEST]: request
});
