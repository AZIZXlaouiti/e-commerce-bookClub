import React from 'react'
import StoreCard from './ItemCard'
const Checkout = ({cart ,username, history,handleUpdateCart}) => {
    console.log("hi",history)
    function handleCheckout (){
        history.push('/mystore')
    }
    return (
         
              <section>
                 
                  <div className='title'>Today</div>
                  <button className="user-action">wallet : ${username.wallet}</button>
                 {cart.map((item,index)=> <> <StoreCard handleUpdateCart={handleUpdateCart}  key={index} cart={item}/></>)} 
                 <button className='add-8'  onClick={()=>handleCheckout()}>checkout</button> 
                   
        </section>
       
    )
}

export default Checkout
