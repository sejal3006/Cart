import React from 'react'
import { FaCartPlus } from "react-icons/fa6";
import './Navbar.css';

const Navbar = ({quantity}) => {
  return (
    <navbar>
        <h3 className='heading1'>UseReducer</h3>
        <i id="icon"><FaCartPlus /><sup>{quantity}</sup> </i>
    </navbar>
  )
}


export default Navbar;