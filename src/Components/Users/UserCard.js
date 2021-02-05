import React, { useState } from 'react'
import './Css/UserCard.css'
import User from '../../user.png' 

function UserCard(props) {
    const user = props.user
    const [name, setName] = useState(user.name)
    const [username, setUsername] = useState(user.username)
    const [image, setImage] = useState(user.image)
    return (
        <div className="user-card">
            <img src={image? image: User} alt="user profile"/>
            <h1>{name}</h1>
            <h2>{username}</h2>
        </div>
    )
}
 
export default UserCard
