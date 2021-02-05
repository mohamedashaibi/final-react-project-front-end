import {ADD_USER, DELETE_USER, EDIT_USER, GET_USER, LOGIN} from './action-types'

import * as api from '../../../Api/UserApi'

export const getUsers = () => async(dispatch) => {
    try{
        const{data} = await api.fetchUsers()
        
        dispatch({type: GET_USER, payload: data})
    }
    catch(error){
        console.log(error)
    }
}

export const createUser = (newUser) => async(dispatch) => {
    
    try{
        const{data} = await api.createNewUser(newUser)

        dispatch({type: ADD_USER, payload: data})
    }
    catch(error){
        console.log(error)
    }
}

export const editUser = (id, updatedUser) => async(dispatch) => {
    try{
        const {data} = api.editUser(id, updatedUser)

        dispatch({type: EDIT_USER, payload: data})
    }
    catch(error){
        console.log(error)
    }
}

export const deleteUser = (id) => async(dispatch) => {
    try{
        const {data} = await api.deleteUser(id)

        dispatch({type: DELETE_USER, payload: data})
    }
    catch(error){
        console.log(error)
    }
}

