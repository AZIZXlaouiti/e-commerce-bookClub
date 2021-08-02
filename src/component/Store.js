import React ,{useState, useEffect}from 'react'
import ItemCard from './ItemCard'

const Store = () => {
    
    const [body,setbody] = useState([])
    const [username,setUser] = useState('john')

    useEffect(()=>{
      fetch('http://localhost:3001/store')
      .then(resp=>resp.json())
      .then(content=>{
          const updateContent = content.map((book)=>{return{...book,isOn:false}})
          setbody(updateContent)
      })
    },[])
    useEffect(()=>{
     fetch('http://localhost:3001/users')
     .then(resp=>resp.json())
     .then(users=>{
         const updateUser = users.find((user)=>user.userName === username)
         setUser(updateUser)
         
     }
        
        )
    },[])
    
    function handleContent(id){
        const updateContent = body.map((book)=>{
            if(book.id === id) return{...book,isOn:true}
            else{
                return {...book,isOn:false}
            }
        })
        setbody(updateContent)
    }
    const found = body.find((book)=>book.isOn=== true )
    
    console.log("user",username)
   
    function handleWallet(price){
        if (username.wallet>=price){
            const updateWallet = Math.floor(username.wallet-price)
            setUser({...username,wallet :updateWallet})
        }
        else{
             alert('u need more money')
        }
        
      
    }
    console.log('usename',username)
    
    return (
      
            <div className=" home menu menu-field">
                <ul>
                    
              {body.map((book)=><ItemCard handleContent={handleContent} key={book.id} book={book}/>)}
                </ul>
               
                {found !== undefined? <ul className="card-content">
                  {found.isOn === true ? <><h2>{found.name}</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p></>:null}
                  <h2>price: ${found.price}</h2>
                  <button onClick={()=>handleWallet(found.price)}>Buy</button>
                  <button className="user-action">wallet : ${username.wallet}</button>
              </ul>:null}
                
           </div>
        
    )
}

export default Store
