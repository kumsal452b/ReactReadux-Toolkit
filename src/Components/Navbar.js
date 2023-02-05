import React from 'react'
import { useSelector } from 'react-redux'
import { CartIcon } from '../icons'
function Navbar() {
  var {amount}= useSelector((state)=>state.cart)
  return (
    <nav className='nav-center'>
        <h3>redux toolkit</h3>
        <div className='nav-container'>
            <CartIcon/>
            <div className="amount-container">
              <p className="total-amount">{amount}</p>
            </div>
        </div>
    </nav>
  )
}

export default Navbar