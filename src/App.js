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
  const [currentUser,setUser] = useState({userName:'john',wallet: 200})
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
       const updateUser = users.find((user)=>user.userName === currentUser.userName)
       setUser(updateUser)
       
   }
      
      )
  },[currentUser.userName])

   function handleAddUser(newUser){
    const option={
        method: 'POST', 
        headers: {
         'Content-type': 'application/json'
        },
        body: JSON.stringify({
          ...newUser,
          wallet: 200,
          cart: []
        })
       }
       
    fetch(`http://localhost:3001/users/`,option)
   }

  console.log('currentUser',currentUser)
  return (
    <div className="container">
      <Router>
       <NavBar/>
        <Switch>
        <Route exact path="/checkout" render={props=> <Checkout {...props} setCart = {setCart} cart={cart} currentUser={currentUser} />}/>
        <Route exact path="/mystore" ><Mystore currentUser = {currentUser} cart={cart}/> </Route>
        <Route exact path="/create" render={props=> <Create {...props} currentUser={currentUser} setUser={setUser} handleAddUser={handleAddUser}/>}/>
        <Route exact path="/store" ><Store body = {body} setbody ={setbody} cart={cart} setCart={setCart} currentUser={currentUser} setUser={setUser}/> </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

