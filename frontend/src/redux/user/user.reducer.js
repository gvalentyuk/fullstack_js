import userActionsTypes from "./user.types";

const INITIAL_STATE = {
    user:null,
    loginLoading : true,
    loginError: null,
    profile: null,
    profileLoading: false
}

const userReducer = ( state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case userActionsTypes.REQUEST_USER_START:
            return {
                ...state,
                profileLoading: true
            }
        case userActionsTypes.REQUEST_USER_SUCCESS:
            return {
                ...state,
                profileLoading: false,
                profile: action.payload
            }
        case userActionsTypes.USER_LOGIN_START:
        case userActionsTypes.USER_REGISTER_START:
            return {
                ...state,
                loginLoading: true
            }
        case userActionsTypes.USER_LOGIN_FAILURE:
        case userActionsTypes.USER_REGISTER_FAILURE:
            return {
                ...state,
                loginLoading: false,
                loginError: action.payload
            }
        case userActionsTypes.USER_LOGIN_SUCCESS:
        case userActionsTypes.USER_REGISTER_SUCCESS:
            return {
                ...state,
                loginLoading: false,
                user: action.payload,
                loginError: null
            }
        case userActionsTypes.LOGOUT:
            return {
                ...state,
                user: {}
            }
        default: return state
    }
}

export default userReducer