import React, { useEffect, useState } from 'react'
import 'react-bootstrap'
import { useDispatch } from 'react-redux'
import './NavBar.css'
import logo from '../logo.png'
import RegistrationModal from './Nav/RegistrationModal'
import LoginModal from './Nav/LoginModal'
import{ useSelector } from 'react-redux'
import { Button } from 'react-bootstrap'
import { getProducts, searchTextChange } from '../Redux/Actions/Products/actions'
import { Logout } from '../Redux/Actions/Auth/actions'

function NavBar() {
    const[search, setSearch] = useState('')


    const auth = useSelector(state=>state.AuthReducer.auth)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    const dispatch = useDispatch() 
    function handleSearch(){
        const searchText = search

        if(searchText === ""){
            dispatch(searchTextChange("")) 
        }else{
            dispatch(searchTextChange(searchText))
        }
    }

    function handleSearchChange(e){
        setSearch(e.target.value)
    }

    function handleLogout(){
        dispatch(Logout())
    }

    return (
        <div>
        <div className="wrapper overlay row0">
        <div id="topbar" className="hoc clear">
            <div className="fl_left">

                <ul className="nospace">
                    <li><i className="fas fa-phone"></i> +218(92)3456789</li>
                </ul>

            </div>
            <div className="fl_right">

                <ul className="nospace">
                    <li><a href="/"><i className="fas fa-home"></i></a></li>
                    <li><a href="/about" title="Help Centre"><i className="far fa-life-ring"></i></a></li>
                        {auth.token!==""? <li>{`Welcome ${auth.user.username}`}  <Button variant="danger" onClick={handleLogout}>Logout</Button></li>: 
                        <>
                        <li><LoginModal/></li>
                        <li><RegistrationModal/></li>                    
                        </>}
                    
                </ul>

            </div>
        </div>
    </div>
    <div className="wrapper row1">
            <header id="header" className="hoc clear">
                <div id="logo" className="fl_left">

                    <h1 className="logoname">
                        <a href="/"><img src={logo} alt="logo" style={{width: "100px"}}/></a>
                    </h1>

                </div>
                <nav id="mainav" className="fl_right">

                    <ul className="clear">
                        <li className="active"><a href="/">Home</a></li>
                        <li><a href="/product">Products</a>

                        </li>
                        <li><a href="/about">About us</a>

                        </li>
                        <li><a href="/contact">Contact us</a></li>
                        <li><input onChange={handleSearchChange} className="form-control"/><Button onClick={handleSearch}>Search</Button></li>
                    </ul>

                </nav>
            </header>
        </div>

    </div>
    )
}

export default NavBar



