import {ADD_PRODUCTS,DELETE_PRODUCTS,EDIT_PRODUCTS,GET_PRODUCTS, GET_SEARCH_RESULTS, SET_SEARCH_TEXT} from '../Actions/Products/action-types'

// const initialProducts = [{
//     name: "Headphones",
//     image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7HElETVAYLlRnQkFWnYfClIK14xjRE64S7g&usqp=CAU",
//     description: "Bluetooth headphones that last up to 26 hours of continuous playback.",
//     quantity: 3
//   },
//   {
//     name: "Photo Camera",
//     image: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
//     description: "This 128MP camera gives you the ability to take high resolution photos at a better price.",
//     quantity: 2 
//   },
//   {
//     name: "IPad",
//     image: "https://drop.ndtv.com/TECH/product_database/images/10172014123206AM_635_apple_ipad_air_2_wifi_apple.jpeg?downsize=*:180&output-quality=80",
//     description: "The ipad is a device used for reading mostly and is of excellent quality",
//     quantity: 6 
//   }]

const initialState = {
    products: [],
    searchText: ""
}

export const ProductsReducer = (state=initialState, action) => {

    const{type, payload} = action

    switch(type){
        case ADD_PRODUCTS:
            return({...state, products:[...state.products, payload]})
        case DELETE_PRODUCTS:
            return({...state, products: state.products.filter((contact) => contact._id !== payload._id)})
        case EDIT_PRODUCTS:
            return ({...state, products: state.products.map((contact) => (contact._id === payload._id ? payload : contact))})
        case GET_PRODUCTS:
            return ({...state, products: payload})
        case GET_SEARCH_RESULTS:
            console.log(payload)
            const products1 = state.products.map((product)=>(product.name.toLowerCase().includes(payload.toLowerCase())?product:null))
            const prods = products1.filter(function (el) {
                return el != null;
              });
            return ({...state, products: prods})
        case SET_SEARCH_TEXT:
            return({...state, searchText:payload})
        default:
            return state

    }
}