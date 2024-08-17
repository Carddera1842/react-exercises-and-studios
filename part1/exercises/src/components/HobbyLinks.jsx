import React from 'react';
import classes from './HobbyLinks.module.css';


class HobbyLinks extends React.Component {
    render() {
       const hobbyLinks = ["https://thewoobles.com/", "https://sketch.io/sketchpad/"];
       return (
        <div>
            <ol>
            <li><a href = {hobbyLinks[0]}>How to Crochet!</a></li>
            <li><a href = {hobbyLinks[1]}>Learn to Draw!</a></li>
         </ol>
        </div>
       );
    }
 }
 
 export default HobbyLinks;

