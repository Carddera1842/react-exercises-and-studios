import recipedata from "./recipe.json";

function IngredientList() {
  let ingredients = recipedata[0].ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>
  })
   return(
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients}
      </ul>
    </div>
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 