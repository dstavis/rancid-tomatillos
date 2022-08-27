import React from "react"

const MovieCard = ({ id, title, poster, handleMovieCardClick, averageRating}) => {

    // const backGroundImgValue = `url" + poster + `")
    const movieCardStyles ={
        width: "20%",
        // backgroundImage: {}   
    }

    const imgStyle = {
        width: "100%",
        height: "80%"
    }

    const buttonStyle ={
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
    
    return (
        <div style={movieCardStyles} className="movie-card">
            <img style={imgStyle} src={poster} alt={title + ' movie poster'}/>
            <h3>{title}</h3>
            <p> Rating: {Math.round(averageRating)}/10 </p>
            <button style={buttonStyle} onClick={() => handleMovieCardClick(id)}>Movie Details</button>
        </div>
    )
}

export default MovieCard