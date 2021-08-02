import React,{useState} from 'react'

const ItemCard = ({book:{id,name,src,Likes,price},handleContent}) => {
    const  [likes ,setLikes] = useState(Likes)
    return (
      
             
            <li className="card-item">    
                <img className="img" src={src} alt="book"/>
                         
                <article onClick={(e)=>handleContent(id)} className="article">
                    <div className="card-info">
                    <h2>{name}</h2>
                    <footer className="nav item-description">made by</footer>
                    <div className="item-description">
                       <p onClick={(e)=>setLikes((likes)=>likes+=1)}>{likes}</p>
                        <p>Likes</p>
                        <footer>${price}</footer>
                    </div>
                    </div>
                </article>
                </li>
        
      
    )
}

export default ItemCard
