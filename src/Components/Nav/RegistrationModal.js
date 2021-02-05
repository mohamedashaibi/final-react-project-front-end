import React, { useState } from 'react'
import 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { Alert, Button, Form, FormGroup, ModalBody, ModalDialog, NavLink } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'
import { Input, Label } from 'reactstrap'
import {Modal} from 'reactstrap'
import { CreateUser } from '../../Redux/Actions/Auth/actions'

function RegistrationModal() {

    const dispatch = useDispatch()

    const [modal, setModal] = useState()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState(null);

    function handleToggle(){
        setMsg('')
        setModal(!modal)
    }
    function handleOnSubmit(){
        if(name === "" || email === "" || password === ""){
            setMsg("All fields must be filled!")
        }else{
            dispatch(CreateUser({name:name, username:email, password:password}))
            
        }
    }

    function handleChangeEmail(e){
        setEmail(e.target.value)
    }

    function handleChangeName(e){
        setName(e.target.value)
    }

    function handleChangePassword(e){
        setPassword(e.target.value)
    }

    return (
        <div>
      <NavLink onClick={handleToggle} href="#">
            <i className="fas fa-edit"></i>
      </NavLink>

      <Modal isOpen={modal} toggle={handleToggle}>
        <ModalHeader>Register</ModalHeader>
        <ModalBody>
          {msg ? <Alert color="danger">{msg}</Alert> : null}
          <Form onSubmit={handleOnSubmit}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="mb-3"
                onChange={handleChangeName}
              />

              <Label for="username">Username</Label>
              <Input
                type="email"
                name="username"
                id="email"
                placeholder="Email"
                className="mb-3"
                onChange={handleChangeEmail}
              />

              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="mb-3"
                onChange={handleChangePassword}
              />
              <Button color="dark" onClick={handleOnSubmit} style={{ marginTop: '2rem' }} block>
                Register
              </Button>
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
    </div>
    )
}

export default RegistrationModal
