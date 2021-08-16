import React, { useState } from 'react'
import icons from './Icons'
const Home = ({history,handleAddUser}) => {
     const [newUser,setUser] = useState({
      userName: "",
      passWord: ''
   
     })

   function handleClick(e){
      e.preventDefault()
      
      handleAddUser(newUser)
      history.push('/mystore')
   }

     function handleChange(e){
          setUser({
             ...newUser,
             [e.target.name]:e.target.value
          })
         
     }
    return (
        
            <div className="menu menu-field welcome-page">
            <ul className="menu-list">
           
                
            
            <h3>Welcome To to book Club</h3>
           <footer>where you can sell/buy review books</footer>
              <footer>and make profit </footer>
              </ul>
              
              <ul >
           
              <form onSubmit={(e)=>handleClick(e)}>
                 
                
            
            {icons[4].svg}
            <input value = {newUser.userName} className="menu-i menu-i-filed" placeholder="username"  type="text" name ='userName' onChange={(e)=>handleChange(e)} required/>

            
            {icons[5].svg}
            <input value ={newUser.passWord} className="menu-i menu-i-filed" placeholder="password"  type="text"  name='passWord'  onChange={(e)=>handleChange(e)} required/>
           
             
                <button  type='submit' className='add-8'  >continue</button> 
                </form>  
              </ul>
             
              <ul className="menu-list"><li class="menu-item">
                 <p onClick={()=>history.push('/mystore')}>or login as guest
               </p>
               </li></ul>
            </div>
        
    )
}

export default Home
