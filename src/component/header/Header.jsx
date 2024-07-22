import React from 'react'
import './header.css'
import Coins from '../coins/Coins'
import { TypeAnimation } from 'react-type-animation';



const Header = () => {
  return (
    <div className='body'>
         <div className='Main_menu'>

<TypeAnimation
style={{
height: '400px',
width: '500px',
border: 'solid 1px rgb(0,0,0)',
display: 'block',
color:'brown',
fontSize: '56px',

wordBreak: 'break-all',
}}
sequence={['BLOCK CHAIN WEBSITE A PLATFORM WHERE YOU CAN TRADE ALL COINS ' , 800, '', 800]}
repeat={Infinity}
/>
  <div className="header-right">
<img src="../../assets/btc.jpg" alt="" />
</div>
</div>
<Coins/>
    </div>
  )
}

export default Header