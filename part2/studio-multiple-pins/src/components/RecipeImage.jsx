import "./styling.css"

function RecipeImage({ recipeImage, name }) {
   return(
    <div>
      <img src={recipeImage} alt={name} className="recipeImage"/>
    </div>
   );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 