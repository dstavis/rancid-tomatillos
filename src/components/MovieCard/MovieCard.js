import React from "react"
import "./MovieCard.css"

const MovieCard = ({ id, title, poster, handleMovieCardClick, averageRating}) => {

    const movieCardStyles = {
      height: "450px",
      width: "20%",
    }
      
    const imgStyle = {
      backgroundImage: `url("`+poster+`")`,
      background: "border-box contain no-repeat",
      backgroundSize: "100% 100%",
      boxSizing: "border-box",
      height: "100%"
    }

    const buttonStyle = {
      borderRadius: "15px",
      height:"8%",
      width: "80%",
      marginTop: "3px",
      cursor: "pointer",
      backgroundColor: "#3b726d",
      border:"white 2px solid",
      color: "white",
      fontSize: "100%"
    }

    const overlayStyle = {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "rgba(117, 190, 218, 0.5)",
      filter: "opacity(0%)",
      transition: "filter 0.5s ease-out"
    }
    
    return (
        <div style={movieCardStyles} className="movie-card">
            <div style={imgStyle} >
              <div style={overlayStyle} className="overlay">
                <h3>{title}</h3>
                <p> Rating: {Math.round(averageRating)}/10 </p>
                <button style={buttonStyle} onClick={() => handleMovieCardClick(id)}>Movie Details</button>
              </div>
            </div>
            {/* <img style={imgStyle} src={poster} alt={title + ' movie poster'}/> */}
        </div>
    )
}

export default MovieCard