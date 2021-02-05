import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import 'react-bootstrap'
import { Alert, Button, Form, FormGroup, ModalBody, ModalDialog, NavLink } from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader'
import { Input, Label } from 'reactstrap'
import {Modal} from 'reactstrap'
import {Login} from '../../Redux/Actions/Auth/actions'

function LoginModal() {

    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const [msg, setMsg] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function handleToggle(){
        setMsg('')
        setModal(!modal)
    }

    function handleChangeUsername(e){
      setUsername(e.target.value)
    }

    function handleChangePassword(e){
      setPassword(e.target.value)
    }

    function handleOnSubmit(){
      if(username === "" || password === ""){
        setMsg("Error user and password must be filled!")
      }else{
        dispatch(Login(username, password))
      }
    }

    return (
        <div>
        <NavLink onClick={handleToggle} href="#">
        <i className="fas fa-sign-in-alt"></i>
                </NavLink>
  
        <Modal isOpen={modal} toggle={handleToggle}>
          <ModalHeader toggle={handleToggle}>Register</ModalHeader>
          <ModalBody>
            {msg ? <Alert color="danger">{msg}</Alert> : null}
            <Form onSubmit={handleOnSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Username"
                  className="mb-3"
                  onChange={handleChangeUsername}
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

export default LoginModal
