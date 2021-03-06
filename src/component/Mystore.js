import React, { useState,useEffect } from 'react'
import StoreCard from './ItemCard'
const Mystore = ({currentUser}) => {
    const[cart,setUserCart] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:3001/users/1`)
        .then(resp=>resp.json())
        .then(data=>setUserCart(data.cart))
       

    },[cart.length])
    return (
        <div className=" home menu menu-field">
            <section>
                 <div className='title'><b>{currentUser.userName}</b> history</div>
                 {currentUser.cart !== undefined? cart.map((item,index)=> <> <StoreCard key={index} cart={item}/></>):null}
                
                
            </section>
            
        </div>
    )
}

export default Mystore
