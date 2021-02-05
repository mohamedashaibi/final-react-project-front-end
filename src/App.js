import React from  'react'
import NavBar from './Components/NavBar'
import ProductList from './Components/Products/ProductList'
import CarouselCustom from './Components/CarouselCustom'
import AddForm from './Components/Products/AddForm'
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import About from './Components/About'
import ContactUs from './Components/ContactUs'
import { useSelector } from 'react-redux'


function App() {

  const auth = useSelector(state=>state.AuthReducer.auth)

  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/product">
          <ProductList/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/contact">
          <ContactUs/>
        </Route>
        <Route exact path="/products/add">
          {auth.user.is_admin?
          <AddForm/>:<Redirect to="/" />
          }
          </Route>
      </Switch>
    </BrowserRouter>    
    // <BrowserRouter>
    //   <Link to="/">home</Link>
    //   {/* <NavBar/>
    //   <CarouselCustom/>
    //   <ProductList/>
    //   <AddForm/> */}
    //   <Switch>
    //     <Route exact path="/">
    //       <NavBar/>
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
  );
}
const Home = () =>{
  return <>
    <CarouselCustom/>
    <ProductList/>
  </>
}
export default App;
