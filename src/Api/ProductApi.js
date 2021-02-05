import axios from '../axios'
import { getToken } from '../Redux/Actions/Auth/actions'

const path = '/product'
export const fetchProducts = () => axios.get(path)
export const createNew = (newProduct) => axios.post(path,{ product: newProduct}, getToken())
export const editProduct = (id, updatedProduct) => axios.put(`${path}/${id}`, { product:updatedProduct }, getToken())
    export const deleteProduct = (id) => axios.delete(`${path}/${id}`)
export const searchProducts = (search) => axios.get(`${path}/search/${search}`)