import React from 'react'
import "./App.css"
import { BrowserRouter as Router,Route, Switch ,Link } from 'react-router-dom'
import NavBar from './component/NavBar'
import Create from "./component/Create"
import Store from "./component/Store"
import Mystore from './component/Mystore'
const App = () => {
  return (
    <div className="container">
      <Router>
       <NavBar/>
        <Switch>
        <Route exact path="/mystore" ><Mystore/> </Route>
        <Route exact path="/create" ><Create/> </Route>
        <Route exact path="/store" ><Store/> </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

