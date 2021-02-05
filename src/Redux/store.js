import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import combineReducers from './Reducers'
const middleware=[thunk]
const store=createStore(combineReducers,
    compose(applyMiddleware(...middleware),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    )
export default store;