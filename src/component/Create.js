import React, { useState } from 'react'
import icons from './Icons'
const Home = ({history}) => {
     
     console.log('history',history)
     function handleClick(){
        history.push('/mystore')
     }
    return (
        
            <div className="menu menu-field welcome-page">
            <ul className="menu-list">
           
                
            
            <h3>Welcome To to book Club</h3>
           <footer>where you can sell/buy review books</footer>
              <footer>and make profit </footer>
              </ul>
              
              <ul >
           
                
            <button className="menu-button menu-button-filed">
            {icons[4].svg}
            <input placeholder="username"  type="text" required/>

            </button>
             
               
                
            <button className="menu-button menu-button-filed">
            {icons[5].svg}
            <input placeholder="Password"  type="text" required/>
            </button>
             
                <button onClick={handleClick} type='submit' className='add-8'  >continue</button> 
              </ul>
             
              <ul className="menu-list"><li class="menu-item"><p onClick={handleClick}>or login as guest
    </p></li></ul>
            </div>
        
    )
}

export default Home
