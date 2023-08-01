import React from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

//import components that you will route to
import Navbar from ".components/navbar.component"
import MealsList from "./components/meals-list-component"
import EditMeal from "./components/edit-meal.component.js"
import CreateMeal from "./components/create-meal.component"
import CreateUser from "./components/create-user.component"


function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={MealsList} />
      <Route path="/edit/:id" component={EditMeal} />
      <Route path="/create" component={CreateMeal} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
