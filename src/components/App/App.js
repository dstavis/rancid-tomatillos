import React, { Component } from 'react';
import './App.css';

// Data
import movieData from '../../assets/movieData.js'

// Components
import MovieList from '../MovieList/MovieList.js'
import MovieDetail from "../MovieDetail/MovieDetail.js"

const movies = movieData.movies

class App extends Component {

  constructor() {
    super()
    this.state = {
      movie: undefined
    }
  }

  setMovie = (movie) => {
    this.setState( (previousState) => {
      return {
        movie: movie
      }
    })
  }

  clearMovie = (movie) => {
    this.setState({movie: undefined})
  }

  handleMovieItemClick = (id) => {
    let movie = movies.find( (movie) => {
      return movie.id === id
    })
    this.setMovie(movie)
  }

  render() {
    return (
      <div className="App">
        {!this.state.movie && <MovieList movies={movies} handleMovieItemClick={this.handleMovieItemClick} />}
        {this.state.movie && <MovieDetail movie={this.state.movie} clearMovie={this.clearMovie} />}
      </div>
    );
  }
}

export default App;
