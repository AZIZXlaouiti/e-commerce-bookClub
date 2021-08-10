import React, { useEffect } from 'react'
import StoreCard from './ItemCard'
const Mystore = ({username,cart}) => {
    console.log('uss',username.cart)
    console.log('thcart', cart)
    
    return (
        <div className=" home menu menu-field">
            <section>
                 <div className='title'><b>{username.userName}</b> history</div>
                 {username.cart !== undefined? cart.map((item,index)=> <> <StoreCard key={index} cart={item}/></>):null}
                
                
            </section>
            
        </div>
    )
}

export default Mystore
