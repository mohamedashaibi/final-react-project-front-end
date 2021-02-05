import {ADD_PRODUCTS, DELETE_PRODUCTS, EDIT_PRODUCTS, GET_PRODUCTS, GET_SEARCH_RESULTS, SET_SEARCH_TEXT} from './action-types'

import * as api from '../../../Api/ProductApi'

export const searchTextChange = (searchText) =>async(dispatch)=>{

    return dispatch({type:SET_SEARCH_TEXT, payload: searchText})
}

export const getProducts = () => async(dispatch) => {
    try{

        const{data} = await api.fetchProducts()
        
        
        dispatch({type: GET_PRODUCTS, payload: data})
    }
    catch(error){
        console.log(error)
    }
}

export const createProduct = (newProduct) => async(dispatch) => {
    
    try{

        await api.createNew(newProduct)

        dispatch(getProducts())
    }
    catch(error){
        console.log(error)
    }
}

export const editProduct = (id, updatedProduct) => async(dispatch) => {
    try{
        await api.editProduct(id, updatedProduct)

        dispatch(getProducts())
    }
    catch(error){
        console.log(error)
    }
}

export const deleteProduct = (id) => async(dispatch) => {
    try{
        await api.deleteProduct(id)

        dispatch(getProducts())
    }
    catch(error){
        console.log(error)
    }
}

export const searchProducts = (search) => async(dispatch) => {
    try{
        const{data} = await api.searchProducts(search)

        dispatch({type: GET_SEARCH_RESULTS, payload: data})
    }
    catch(error){
        console.log(error)
    }
}