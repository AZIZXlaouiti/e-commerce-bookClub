import React, { useState } from 'react'
import icons from './Icons'
const Home = () => {
     const [user,setUser] = useState([])

    return (
        
            <div className="menu menu-field welcome-page">
            <ul className="menu-list">
           
                
            
            <h3>Welcome To to book Club</h3>
           <footer>where you can sell/buy review books</footer>
              <footer>and make profit </footer>
              </ul>
              <ul className="menu-list">
            <li className="menu-item">
                
            <button className="menu-button menu-button-filed">
            {icons[4].svg}
            <input placeholder="username"  type="text" />

            </button>
               </li>
               <li className="menu-item">
                
            <button className="menu-button menu-button-filed">
            {icons[5].svg}
            <input placeholder="Password"  type="text"/>
            </button>
               </li>
                <button className='add-8'  >checkout</button> 
              </ul>
              <ul class="menu-list"><li class="menu-item"><p>or login as guest
    </p></li></ul>
            </div>
        
    )
}

export default Home
