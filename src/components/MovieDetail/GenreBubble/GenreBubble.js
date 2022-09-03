import React from "react";
import "./GenreBubble.css"
import {Link } from "react-router-dom"
 
function GenreBubble({genre}) {
  return (
    <Link to={"/movies_by_genre/" + genre}  className="genre-bubble-text">
    {genre}
    </Link>
  )
}

export default GenreBubble