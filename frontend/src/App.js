import React from 'react';
import {BrowserRouter as Router, Route}from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import Login from "./components/login-in.component";
import RecipesList from "./components/recipes-list.component";
import EditRecipe from "./components/edit-recipe.component";
import CreateRecipe from "./components/create-recipe.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
          <br />
          <Route path="/" exact component={Login}/>
          <Route path="/recipes" exact component={RecipesList}/>
          <Route path="/edit/:id" component={EditRecipe} />
          <Route path="/newRecipe" component={CreateRecipe} />
          <Route path="/register" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
