import React from 'react'
import StoreCard from './ItemCard'
const Checkout = ({setCart , cart ,currentUser, history,handleUpdateCart}) => {
   
    function handleCheckout (cart){
        history.push('/mystore')
       
        const option={
            method: 'PATCH', 
            headers: {
             'Content-type': 'application/json'
            },
            body: JSON.stringify({
                cart:cart,
                wallet:currentUser.wallet
            })
           }
           
        fetch(`http://localhost:3001/users/${currentUser.id}`,option)
        .then(setCart([]))
       
        
        
    }
    return (
         
              <section>
                 
                  <div className='title'>Today</div>
                  <button className="user-action">wallet : ${currentUser.wallet}</button>
                 {cart.map((item,index)=> <> <StoreCard handleUpdateCart={handleUpdateCart}  key={index} cart={item}/></>)} 
                 <button className='add-8'  onClick={()=>handleCheckout(cart,currentUser)}>checkout</button> 
                   
        </section>
       
    )
}

export default Checkout
