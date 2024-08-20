import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    const authorLink = "https://www.justonecookbook.com/simple-chicken-curry/";
    const authorPhoto = "https://www.justonecookbook.com/wp-content/uploads/2024/07/namiko-chen-just-one-cookbook.jpg";
    const authorName = "Namiko Hirasawa Chen";
    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} length = "200" width = "200" alt = "Reasonable alt text" className={styles.imageUpdates} />
           <div>
              <h3>{authorName}</h3>
              <a href={authorLink}>Just One Cookbook</a> 
           </div>
        </div>
     );
 }

 class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>
                    <h1>Japanese Chicken Curry</h1>
                    <p>Delicious Japanese chicken curry recipe for a weeknight dinner! Tender pieces of chicken, carrots, and potatoes cooked in a rich, savory curry sauce, this Japanese version of curry is a must-have for your family meal. </p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
 }

 export default RecipeDescription;