import React from "react"
import "./MovieCard.css"

const MovieCard = ({ id, title, poster, history, averageRating}) => {
  const backgroundPoster = {
    backgroundImage: `url("`+ poster +`")`,
  }

  return (
    <div  onClick={(() => history.push(`/movie_details/${id}`))} className="movie-card">
        <div style={backgroundPoster} className="background-styles">
          <div className="overlay overlay-style">
            <h1>{title}</h1>
            <h1> Rating: {Math.round(averageRating)}/10 </h1>
          </div>
        </div>
    </div>
)
}

export default MovieCard