import axios from 'axios'
import userActionsTypes from "./user.types";

const startLogin = () => ({
    type: userActionsTypes.USER_LOGIN_START
})

const failureLogin = err => ({
    type: userActionsTypes.USER_LOGIN_FAILURE,
    payload: err
})

const successLogin = user => ({
    type: userActionsTypes.USER_LOGIN_SUCCESS,
    payload: user
})

export const startLoginAsync = ({email, password}) => {
    return async dispatch => {
        dispatch(startLogin())
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const {data} = await axios.post('/api/user/login',{
                email, password
            }, config)
            dispatch(successLogin(data))
        } catch (e) {
            dispatch(failureLogin(e.response.data.message))
        }
    }
}

const startRegister = () => ({
    type: userActionsTypes.USER_REGISTER_START
})

const failureRegister = err => ({
    type: userActionsTypes.USER_REGISTER_FAILURE,
    payload: err
})

const successRegister = user => ({
    type: userActionsTypes.USER_REGISTER_SUCCESS,
    payload: user
})

export const startRegisterAsync = ({email, password, name}) => {
    return async dispatch => {
        dispatch(startRegister())
        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const {data} = await axios.post('/api/user/registration',{
                email, password, name
            }, config)
            dispatch(successRegister(data))
            dispatch(successLogin(data))
        } catch (e) {
            dispatch(failureRegister(e.response.data.message))
        }
    }
}

const startRequestProfile = () => ({
    type: userActionsTypes.REQUEST_USER_START
})

const failureRequestProfile = err => ({
    type: userActionsTypes.REQUEST_USER_FAILURE,
    payload: err
})

const successRequestProfile = user => ({
    type: userActionsTypes.REQUEST_USER_SUCCESS,
    payload: user
})

export const startRequestProfileAsync = (token) => {
    return async dispatch => {
        dispatch(startRequestProfile())

        try{
            const {data} = await axios.get('/api/user/profile',{
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })
            dispatch(successRequestProfile(data))
        } catch (e) {
            dispatch(failureRequestProfile(e.response.data.message))
        }
    }
}


export const logout = () => dispatch => {
    dispatch({
        type:"LOGOUT"
    })
}
