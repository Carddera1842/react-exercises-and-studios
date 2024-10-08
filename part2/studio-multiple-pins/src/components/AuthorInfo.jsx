import "./styling.css"

function AuthorInfo({ recipe }) {
  const recipeAuthor = <div>{recipe.author}</div>
  const recipeAuthorImage = <img className="authorImage" src={recipe.authorImage} alt ={recipe.author} />;
  let url = recipe.website;
  const recipeWebsite = <a href={url} target="_blank">{url}</a>
   return(
    <div>
       {recipeAuthorImage}
       {recipeAuthor}
       {recipeWebsite}
    </div>
 );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 