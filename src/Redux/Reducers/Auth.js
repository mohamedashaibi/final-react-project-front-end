import { LOGOUT, LOGIN } from "../Actions/Auth/action-types"

const initialState = {
    auth: {
        token: "",
        user: {}
    }
}

export const AuthReducer = (state=initialState, action) => {

    const{type, payload} = action

    switch(type){
        case LOGIN:
            return({auth: {...payload}})
        case LOGOUT:
            return({auth:{token:"", user:{}}})
        default:
        return state

    }
}