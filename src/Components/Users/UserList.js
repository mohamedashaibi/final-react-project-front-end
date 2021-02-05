import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserCard from './UserCard'
import { getUsers } from '../../Redux/Actions/Users/actions'


import './Css/UserList.css'
function UserList() {

    const users = useSelector(state => state.UserReducer.users)

    const dispatch = useDispatch()
    
    const [userList, setUserList] = useState([])
    
    useEffect(() => {

        dispatch(getUsers())
        setUserList(users)

    }, [setUserList,dispatch])



    return (
        <div className="user-list">
            {userList.map((item)=>{
                return <UserCard user={item}/>
            })}
        </div>
    )
}

export default UserList
