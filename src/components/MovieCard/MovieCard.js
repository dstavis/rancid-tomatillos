import React from "react"

const MovieCard = ({ id, title, poster, handleMovieCardClick, averageRating}) => {
    const movieCardStyles ={
        width: "20%"
    }

    const imgStyle = {
        width: "100%"
    }
    
    return (
        <div style={movieCardStyles} className="movie-card">
            <img style={imgStyle} src={poster} alt={title + ' movie poster'}/>
            <h3>{title}</h3>
            <p> Rating: {Math.round(averageRating)}/10 </p>
            <button onClick={() => handleMovieCardClick(id)}>Movie Details</button>
        </div>
    )
}

export default MovieCard