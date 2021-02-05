import axios from '../axios'

const path = '/auth'
export const Login = (username, password) => axios.post(path, {username, password})
export const createNewUser = (newUser) => axios.post("/user", newUser)
