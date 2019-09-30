import React, { useState } from "react";

import Recipe from "../../components/Recipe";
import "./RecipeList.css";
import {Link} from "react-router-dom";

const RecipesList = () => {
  const [recipes, setRecipes] = useState([
    {
      dishName: "Dryaniki",
      ingredients: ["Bylba", "yaca", "myka"],
      instruction: "beresh i zharizh",
      id: `${Math.random()}`
    },
    {
      dishName: "Makaroni po flotski",
      ingredients: ["Makaroni", "Myaso", "Soys"],
      instruction: "varish makaroni, zharish myaso, meshaesh s soysom , gotovo",
      id: `${Math.random()}`
    },
    {
      dishName: "Blini",
      ingredients: ["myka", "yaca", "moloko"],
      instruction: "delaesh testo poto zharish",
      id: `${Math.random()}`
    }
  ]);
  const removeRecipe = id => {
    const arr = recipes.filter(item => item.id !== id);
    setRecipes(arr);
  };
  const recipesArr = recipes.map(item => (
    <Recipe
      key={`${item.dishName + Math.random()}`}
      props={item}
      removeRecipe={removeRecipe}
    />
  ));
  return (
    <ul className="recipes-list">
      {recipesArr}
      <li>
        <Link to="/create-recipe" className="fas fa-plus-circle"></Link>
      </li>
    </ul>
  );
};

export default RecipesList;