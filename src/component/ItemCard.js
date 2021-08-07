import React,{useState} from 'react'
import icons from "./Icons"

export const ItemCard = ({book:{id,name,src,Likes,price,amount},handleContent}) => {
    const  [likes ,setLikes] = useState({
        likes:Likes,
        isAdd:true
    })
    return (
      
             
            <li className="card-item">   
                    <p className='notification'>{amount}</p> 
                <img className="img" src={src} alt="book"/>
                         
                <article onClick={(e)=>handleContent(id)} className="article">
                    <div className="card-info">
                    <h2>{name}</h2>
                    <footer className="nav item-description">made by</footer>
                    <div className="item-description">
                       <i onClick={(e)=>setLikes({likes:Likes+=1,isAdd:false})}> {likes.isAdd?  icons[6].svg:icons[7].svg}</i> 
                       <p >{likes.likes}</p>
                      
                        <footer>${price}</footer>
                    </div>
                    </div>
                </article>
                </li>
        
      
    )
}

const StoreCard =({cart})=> {
    return(

<>
        
        <ul className='cart-details'>
            <li className='cart'>
                <div className='cart-menu'>
                    
                        <img className='cart-icon' src={cart.src}></img>
                    
                    <div className='cart-content'>
                        <p className='cart-bio'>{cart.name}</p>
                        <p className='cart-description cart-bio'>made by someone</p>
                    </div>
                </div>
                <p className='price'>${cart.total}</p>
                 {icons[8].svg}
            </li>
            
        </ul>
  </>      
    )
}
export default StoreCard