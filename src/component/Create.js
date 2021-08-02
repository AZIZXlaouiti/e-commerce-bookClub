import React from 'react'
import icons from './Icons'
const Home = () => {
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
            <input placeholder="username"  type="text"/>
            </button>
               </li>
               <li className="menu-item">
                
            <button className="menu-button menu-button-filed">
            {icons[5].svg}
            <input placeholder="Password"  type="text"/>
            </button>
               </li>
             
              </ul>
              
            </div>
        
    )
}

export default Home
