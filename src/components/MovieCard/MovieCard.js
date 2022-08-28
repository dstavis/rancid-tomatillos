import React from "react"
import "./MovieCard.css"

const MovieCard = ({ id, title, poster, handleMovieCardClick, averageRating}) => {

    const movieCardStyles = {
      
      aspectRatio: "1/1.5",
      width: "20%",
    }
      
    const bgStyle = {
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
      backgroundColor: "rgba(0, 0, 0, 0.55)",
      filter: "opacity(0%)",
      transition: "filter 0.5s ease-out"
    }
    
    return (
        <div style={movieCardStyles} onClick={() => handleMovieCardClick(id)} className="movie-card">
            <div style={bgStyle} >
              <div style={overlayStyle} className="overlay">
                <h1>{title}</h1>
                <h1> Rating: {Math.round(averageRating)}/10 </h1>
                {/* <button style={buttonStyle} onClick={() => handleMovieCardClick(id)}>Movie Details</button> */}
              </div>
            </div>
        </div>
    )
}

export default MovieCard