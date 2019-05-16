import React from 'react'
import { Route } from 'react-router-dom'
import HomePage from './Component/HomePage'
import AddUser from './Component/AddUser'

const App = () => (
  <div>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/adduser" component={AddUser} />
    <Route exact path="/edituser/:id" component={AddUser} />
  </div>
);

export default App
