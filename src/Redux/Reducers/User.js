// import {ADD_USER,DELETE_USER,EDIT_USER,GET_USER} from '../Actions/Users/action-types'

// const initialState = {
//     users: []
// }

// export const UserReducer = (state=initialState, action) => {

//     const{type, payload} = action

//     switch(type){
//         case ADD_USER:
//             return({users:[...state.users, payload]})
//         case DELETE_USER:
//             return({users: state.users.filter((contact) => contact._id !== payload._id)})
//         case EDIT_USER:
//             return ({users: state.users.map((contact) => (contact._id === payload._id ? payload : contact))})
//         case GET_USER:
//             return ({users:action.payload})
//         default:
//             return state

//     }
// }