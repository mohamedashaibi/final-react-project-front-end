import axios from '../axios'

const baseUrl = "/user"

export const fetchUsers = () => axios.get(baseUrl)
export const createNewUser = (newUser) => axios.post(baseUrl, newUser)
export const editUser = (id, updatedUser) => axios.put(`${baseUrl}/${id}`, updatedUser)
export const deleteUser = (id) => axios.delete(`${baseUrl}/${id}`)