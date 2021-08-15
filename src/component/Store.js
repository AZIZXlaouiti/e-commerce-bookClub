import React ,{useState, useEffect}from 'react'
import StoreCard,{ItemCard} from './ItemCard'
import icons from './Icons'

const Store = ({cart,setCart,username,setUser ,body,setbody}) => {
    
   
   
   
    const [rate,setrate] = useState([1,2,3,4])
   
    
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
        const available = body.find ((item)=>item.name=== book.name)
        if (username.wallet>=book.price&& available.amount>0){
            
            const updateWallet = Math.floor(username.wallet-book.price)
            const updateItem =  cart.find((item)=>item.name===book.name)
          
            if (!updateItem){
                    setCart([...cart,{name:book.name,count:1,total:book.price,src:book.src}])
               
            }else{
                const priceChange = cart.map((item)=>{
                    if(item.name === book.name) return {...item,count:item.count+=1,total:item.total+book.price}
                    else{
                        return{...item}
                    }
                })
                setCart(priceChange)
            }
            
            const updateAmount = body.map((item)=>{
                if (item.name === book.name) return {...item,amount:item.amount-=1}
                else return {...item}
            })
            setUser( {...username,wallet :updateWallet})
            setbody(updateAmount)
        }
        else if (available.amount<=0){
             
            alert('out of stock')
        }
        else{
            alert('you need more money')
        }
        
      
    }
    function handleUpdateCart(item){
        const updateAmount = body.map((book)=>{
            if (book.name === item.name) return {...book,amount:book.amount+=1}
            else return {...book}
        })
       
        setbody(updateAmount)
        if (item.total > 0 ){

            if (username.wallet + item.total<=200 ){
                 const range = item.total/item.count
                const priceChange = Math.floor(username.wallet+range)
                setUser( {...username,wallet :priceChange})
                const cartChange = cart.map((book)=>{
                    if(book == item) return {...book,count:book.count-=1,total:book.total-= range}
                    else{
                        return{...book}
                    }
                })
                setCart(cartChange)
                
            }

        }if (item.total === 0){
            const removeCartBook = cart.filter((book)=>book !== item)
            setCart(removeCartBook)
        }


    }



    console.log('username',username)
    console.log("cart",cart)
    console.log("body",body)
    return (
      
            <div className=" home menu menu-field">
                <section>
                    
              {body.map((book)=>
              <ItemCard handleContent={handleContent} key={book.id} book={book}/>)}
                </section>
             
                      {found !== undefined? <section className='item-content'>
                  {found.isOn === true ? <><div className='cart-menu'>
                      <h2 className='title'>{found.name}</h2>
                      </div>
                      <b style={{color:"black"}}>About this book</b> 
                  <div className='flex'>
                  <div className='flex rate '>
                     {rate.map((item)=>(function (){
                      return(
                      <img className='button-icon' src={icons[15].svg}/>
                      )
                    })())}
                    <p>rate us</p>
                    </div>
                    <div className='flex'>
                    <img className='button-icon' src={icons[13].svg}/>
                        <p>reviews</p>
                        </div>
                    </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing 
                      elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p></>:null}
                  <h2>price: ${found.price}</h2>
                  
                  <div>
                 <img className='wh-8' src={icons[12].svg}/>
                 <div className='text-green'>${found.price}</div>
                 <p>{found.amount!== 0 ?`${found.amount} left`:<b style={{color:"red"}}>out of stock</b>}</p>
                  <button className='add-8'  onClick={()=>handleWallet(found)}>add</button> 
                  </div>
                 
              </section>:null}
                
        <section>
                  <div className='title'>Today</div>
                  <button className="user-action">wallet : ${username.wallet}</button>
                 {cart.map((item,index)=> <> <StoreCard handleUpdateCart={handleUpdateCart} key={index} icons ={icons[8].svg}cart={item}/></>)} 
                 

        </section>
              
               
                
               
           </div>
        
    )
}

export default Store
