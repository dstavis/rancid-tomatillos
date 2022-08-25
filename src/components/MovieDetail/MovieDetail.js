import React, {Component} from "react"
import "./MovieDetail.css"

class MovieDetail extends Component {
  constructor({movie, clearMovie}) {
    super()
    this.state = {
      movie: movie,
      clearMovie: clearMovie
    }
  } 

  render = () => {
    return (
      <div className="movie-detail">
        <h1>
          Title:
          {this.state.movie.title} 
        </h1>
        <button type="button" onClick={this.state.clearMovie}>❌</button>
        <h2>Release date: {this.state.movie.release_date}</h2>
        <h3>Average Rating: {this.state.movie.average_rating}</h3>
        <img src={this.state.movie.poster_path}></img>
      </div>
    )
  }
}

export default MovieDetail