import React from "react";

import RecipeHeader from "../RecipeHeader";
import IngredientsList from "../IngredientsList";
import Instruction from '../Instruction/Instruction';
import './Recipe.css';

const Recipe = () => (
  <li className="recipe">
    <RecipeHeader />
    <IngredientsList />
    <Instruction />
  </li>
);

export default Recipe;
