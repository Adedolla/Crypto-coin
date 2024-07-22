import './Nav.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
// import { MdOutlineCurrencyBitcoin } from "react-icons/md";
import Bitcoin from '../../assets/Bitcoin.jpeg'
import { FaArrowRight, FaBitcoin } from "react-icons/fa";
import { FiList } from "react-icons/fi"

import { GoSmiley } from "react-icons/go";

const Nav = () => {
  return (
    <>
    <div className="Body">
    <div className='Nav'>
        <ul>
       <li> <FaBitcoin style={{color: 'yellow', fontSize:[40]}} /><p className='btc'>Coin</p></li>
            <li>Home<FaArrowRight /></li>
            <li>About <FaArrowRight /></li>
            <li><FiList style={{fontSize:[40]}}/></li>
        </ul> 
    </div>
   
    </div>
    </>
  )
}

export default Nav