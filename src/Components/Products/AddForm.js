import React, { useState } from 'react'
import './Css/AddForm.css'
import {useDispatch} from 'react-redux'
import { createProduct } from '../../Redux/Actions/Products/actions'
import store from '../../Redux/store'
function AddForm() {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [quantity, setQuantity] = useState(0)

    function handleName(e) {
        setName(e.target.value)
    }
    function handlePrice(e){
        setPrice(e.target.value)
    }
    function handleDescription(e) {
        setDescription(e.target.value)
        
    }
    function handleImage(e) {
        setImage(e.target.value)
        
    }
    function handleQuantity(e){
        setQuantity(e.target.value)
    }
    function handleSave(){
        

        if(name === "" || description === "" || image === "" || (quantity === "" || quantity === 0)){
            alert("Cannot save, all values must be filled!")
        }else{
            console.log("Dispatching create product")
            dispatch(createProduct({name:name, description: description, image: image, quantity: quantity , price: price}))
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
        <div className="product-add-form">
            <input className="nameinput" onChange={handleName} placeholder="Name"/>
            {name === ""?checkerror(name):null }
            <input className="descriptioninput" onChange={handleDescription} placeholder="Description"/>
            {description === ""?checkerror(description):null }
            <input className="imageinput" onChange={handleImage} placeholder="Image URL"/>
            {image === ""?checkerror(image):null }
            <input className="quantityinput" type="number" onChange={handleQuantity} placeholder="Quantity"/>
            {quantity === 0 || quantity === "" ? checkerror(quantity):null }
            <input className="priceinput" type="number" onChange={handlePrice} placeholder="Price"/>

            <button onClick={handleSave}>Save</button>
        </div>
    )
}

export default AddForm