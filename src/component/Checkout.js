import React from 'react'
import StoreCard from './ItemCard'
const Checkout = ({setCart , cart ,username, history,handleUpdateCart}) => {
   
    function handleCheckout (cart){
        history.push('/mystore')
        const id = 1
        const option={
            method: 'PATCH', 
            headers: {
             'Content-type': 'application/json'
            },
            body: JSON.stringify({cart:cart,wallet:username.wallet})
           }
           
        fetch(`http://localhost:3001/users/1`,option)
        .then(setCart([]))
       
        
        
    }
    return (
         
              <section>
                 
                  <div className='title'>Today</div>
                  <button className="user-action">wallet : ${username.wallet}</button>
                 {cart.map((item,index)=> <> <StoreCard handleUpdateCart={handleUpdateCart}  key={index} cart={item}/></>)} 
                 <button className='add-8'  onClick={()=>handleCheckout(cart)}>checkout</button> 
                   
        </section>
       
    )
}

export default Checkout
