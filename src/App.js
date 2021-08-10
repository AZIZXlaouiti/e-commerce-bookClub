import React ,{useState,useEffect}from 'react'
import "./App.css"
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom'
import NavBar from './component/NavBar'
import Create from "./component/Create"
import Store from "./component/Store"
import Mystore from './component/Mystore'
import Checkout from './component/Checkout'
const App = () => {
  const [cart , setCart ] = useState([])
  const [username,setUser] = useState('john')
  const [body,setbody] = useState([])
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
  // function handleUpadteCart(){
  //   const updateWallet = Math.floor(username.wallet-book.price)
  // }
  return (
    <div className="container">
      <Router>
       <NavBar/>
        <Switch>
        <Route exact path="/checkout" render={props=> <Checkout {...props} setCart = {setCart} cart={cart} username={username} />}/>
        <Route exact path="/mystore" ><Mystore username = {username} cart={cart}/> </Route>
        <Route exact path="/create" ><Create username={username} setUser={setUser}/> </Route>
        <Route exact path="/store" ><Store body = {body} setbody ={setbody} cart={cart} setCart={setCart} username={username} setUser={setUser}/> </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

