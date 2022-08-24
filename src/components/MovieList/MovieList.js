import React, {Component} from "react"
import MovieListItem from "../MovieListItem/MovieListItem.js"

class MovieList extends Component {
  constructor({movies}) {
    super()
    this.state = { movieListItems: movies.map( (movie) => {
        return <MovieListItem title={movie.title} />
      }) 
    }
  } 

  render = () => {
    return (
      <ol>
        { this.state.movieListItems }
      </ol>
    )
  }
}

export default MovieList