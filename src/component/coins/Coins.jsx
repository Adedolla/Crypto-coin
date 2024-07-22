import React, { useState,useEffect } from 'react'
import './coin.css'
import Coinitem from './Coinitem'
import axios from 'axios'

const Coins = () => {
const [coins, setCoins] = useState([])
const URL =  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false"



useEffect(() =>{
  axios.get(URL)
  .then((response) =>{
  console.log(response.data);
  setCoins(response.data)
  })
  .catch((err) =>{
  console.log(err);
  })
},[])




  return (
    <div className='coin-header'>
     <h2>Authorized Coins with current rate</h2>
    <div className='table-header'>
        <ul>
            <li>#</li>
            <li>Coin</li>
            <li>Price</li>
            <li>24hr</li>
            <li>Volume</li>
            <li>Mkt Cap</li>
        </ul>
    </div>


   {
    coins.map((coin, ) =>{
      return <Coinitem coin={coin} key={coin.id}/>

    })
   }


    </div>
  )
}

export default Coins