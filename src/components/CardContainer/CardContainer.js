import React from "react"
import MovieCard from "../MovieCard/MovieCard"

const CardContainer = ({allMovies, handleMovieCardClick}) => {
    const movieCardContainerStyles = {
        display: "flex",
	    flexDirection: "row",
	    flexWrap: "wrap",
	    justifyContent: "flex-start",
	    alignItems: "stretch",
	    alignContent: "stretch"
    }

    const movieCards = allMovies.map(movie => {
        return (
            <MovieCard 
                key={movie.id}
                id={movie.id}
                title={movie.title}
                poster={movie.poster_path}
                averageRating={movie.average_rating}
                handleMovieCardClick={handleMovieCardClick}
        /> 
        )
    })

    return (
        <div style={movieCardContainerStyles} className="movie-card-container">
            {movieCards}
        </div>
    )
}

export default CardContainer