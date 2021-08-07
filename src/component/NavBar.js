import React from 'react'
import {Link} from 'react-router-dom'
import icons from './Icons'

const NavBar = () => {
    
    return (
        <>
       
       
        <div className="menu">
            <ul className="menu-list">
            <li className="menu-item">
                
            <button className="menu-button">
             {icons[0].svg}
             <Link to ="/mystore">MyStore</Link></button></li>
            <li className="menu-item"><button className="menu-button">
              {icons[1].svg}  
              <Link to ="/create">Create</Link></button></li>
        
            </ul>   
            <ul className="menu-list">
            <li className="menu-item">
            
              <button className="menu-button menu-button--delete">
              {icons[2].svg}
              <Link to ="/checkout">Checkout</Link></button></li>
            <li className="menu-item">
            
            <button className="menu-button menu-button--delete">
            {icons[3].svg}
            <Link to ="/store">Store</Link></button></li>     
            </ul>  
        </div>
        
        </>
    )
}
export default NavBar
