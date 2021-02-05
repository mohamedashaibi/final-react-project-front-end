import {combineReducers} from 'redux';
import {ProductsReducer} from './Product';
// import {UserReducer} from './User'
import {AuthReducer} from './Auth'

export default combineReducers({
    ProductsReducer, AuthReducer
})