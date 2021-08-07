import React ,{useState, useEffect}from 'react'
import StoreCard,{ItemCard} from './ItemCard'


const Store = () => {
    
    const [body,setbody] = useState([])
    const [username,setUser] = useState('john')
    const [cart , setCart ] = useState([])
    
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
    
    
   
    function handleWallet(book){
        if (username.wallet>=book.price){
            
            const updateWallet = Math.floor(username.wallet-book.price)
            const updateItem =  cart.find((item)=>item.name===book.name)
            if (!updateItem){
                    setCart([...cart,{name:book.name,total:book.price,src:book.src}])
               
            }else{
                const priceChange = cart.map((item)=>{
                    if(item.name === book.name) return {...item,total:item.total+book.price}
                    else{
                        return{...item}
                    }
                })
                setCart(priceChange)
            }
            
            
            setUser( {...username,wallet :updateWallet,cart:cart})
        }
        else{
            
             alert('u need more money')
        }
        
      
    }
    console.log('username',username)
    console.log("cart",cart)
    console.log("body",body)
    return (
      
            <div className=" home menu menu-field">
                <section>
                    
              {body.map((book)=><ItemCard handleContent={handleContent} key={book.id} book={book}/>)}
                </section>
             
                      {found !== undefined? <section className='item-content'>
                  {found.isOn === true ? <ul className="card-details"><h2>{found.name}</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p></ul>:null}
                  <h2>price: ${found.price}</h2>
                  <button onClick={()=>handleWallet(found)}>add</button>
                 
               
                 
              </section>:null}
                
        <section>
                  <div className='title'>Today</div>
                  <button className="user-action">wallet : ${username.wallet}</button>
                 {cart.map((item,index)=> <> <StoreCard key={index} cart={item}/></>)} 
                 

        </section>
              
               
                
               
           </div>
        
    )
}

export default Store
