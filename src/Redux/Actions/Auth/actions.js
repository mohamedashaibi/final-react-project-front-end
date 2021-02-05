import { LOGIN, LOGOUT } from './action-types'
import * as api from '../../../Api/AuthApi'
import store from '../../store'
export const Login = (username, password) => async(dispatch) => {
    try{
        const{data} = await api.Login(username, password)

        dispatch({type: LOGIN, payload: { ...data }})
    }
    catch(error){
        console.log(error)
    }
}

export const CreateUser = (newUser) => async(dispatch) => {
    try{
        const {data} = await api.createNewUser(newUser)
        console.log(data)
        dispatch({type: LOGIN, payload: data})
    }catch(error){
        console.log(error)
    }
}

export const getToken = ()  => {

    const token = store.getState().AuthReducer.auth.token

    console.log("token = " + token)

    const config = {
        headers:{
            "Content-Type": "application/json"
        }
    }

    if(token){
        config.headers['x-auth-token'] = token
    }

    console.log("Token in getToken function ath action = " + config.headers)

    return config
}


export const Logout = () => async(dispatch) => {
    dispatch({type: LOGOUT})
}

// export const Logout = () => async(dispatch) => {
//     try{
//         const{data} = await api.Logout()

//         dispatch({type: LOGOUT, payload: { data }})
//     }
//     catch(error){
//         console.log(error)
//     }
// }
