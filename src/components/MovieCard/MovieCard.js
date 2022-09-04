import React from "react"
import {Link} from 'react-router-dom'
import "./MovieCard.css"

const MovieCard = ({ id, title, poster, averageRating}) => {
  const backgroundPoster = {
    backgroundImage: `url("`+ poster +`")`,
  }
  return (
    <Link to={"/movie_details/" + id} className="movie-card">
        <div style={backgroundPoster} className="background-style">
          <div className="overlay overlay-style">
            <h1 className="title">{title}</h1>
            <h1 className="rating"> Rating: {Math.round(averageRating)}/10 </h1>
          </div>
        </div>
    </Link>
  )
}

export default MovieCard