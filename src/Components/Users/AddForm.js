import React, { useState } from 'react'
import './Css/AddForm.css'

function AddForm() {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState('')
    function handleName(e) {
        setName(e.target.value)
    }
    function handleUsername(e) {
        setUsername(e.target.value)
        
    }
    function handlePassword(e) {
        setPassword(e.target.value)
        
    }
    function handleImage(e){
        setImage(e.target.value)
    }

    function handleSave(){
        if(name === "" || username === "" || password === "" || image === ""){
            alert("Cannot save, all values must be filled!")
        }
    }
    function checkerror(value){
        if(value == null || value === 0 || value === ""){
            return <span>This field is required</span>

        }else{
            return null
        }        
    }
    return (
        <div className="user-add-form">
            <input onChange={handleName} placeholder="Name"/>
            {name === ""?checkerror(name):null }
            <input onChange={handleUsername} placeholder="Username"/>
            {username === ""?checkerror(username):null }
            <input onChange={handlePassword} type="password" placeholder="Password"/>
            {password === ""?checkerror(password):null }
            <input onChange={handleImage} placeholder="Image"/>
            {image === ""?checkerror(image):null }
            <button onClick={handleSave}>Save</button>
        </div>
    )
}

export default AddForm
