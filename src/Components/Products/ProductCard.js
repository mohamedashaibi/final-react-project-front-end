import {React,useState} from 'react'
import './Css/ProductCard.css'
import { useSelector, useDispatch } from 'react-redux'

import { Button, Modal } from 'react-bootstrap'
import {deleteProduct, editProduct} from '../../Redux/Actions/Products/actions'
import { ProductsReducer } from '../../Redux/Reducers/Product'


function ProductCard(props) {
        
    const dispatch = useDispatch()

    const auth = useSelector(state=>state.AuthReducer.auth.user)

    const deleteItem = () => {
        dispatch(deleteProduct(props.product._id))
    }

    const[show, setShow] = useState(false)
    const handleShowEdit = () =>{
        setShow(true)
    }
    const [name, setName] = useState(props.product.name)
    const [description, setDescription] = useState(props.product.description)
   
    const handleName = (e) =>{
        setName(e.target.value)
    }
    const handleDescription = (e) =>{
        setDescription(e.target.value)
    }

    function handleEdit(){
        dispatch(editProduct(props.product._id, {id:props.product._id, name: name, description: description}))
        setShow(false)
      }
    const handleClose = () => setShow(false)
    return (
        <div className="product-card">
            <img src={props.product.image} alt="product"/>
            <h1>{props.product.name}</h1>
            <h3>{props.product.description}</h3>
            <span>{props.product.quantity}</span>
            {!auth.is_admin?<></>: 
            <div>
            <Button onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) deleteItem() } }>Delete</Button>
            <Button variant="primary" onClick={handleShowEdit}>
          Edit
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div><p>Name:</p><input value={name} onChange={handleName}/></div>
            <div><p>Description:</p><input value={description} onChange={handleDescription}/></div>
            </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

            </div>
            }
        </div>
    )
}

export default ProductCard
