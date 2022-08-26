import MovieDetail from "../MovieDetail/MovieDetail"
import React, { Component } from 'react';
import './App.css';
import CardContainer from "../CardContainer/CardContainer"

class App extends Component {
  constructor() {
    super()
    this.state={
      loading: false,  
      movies: [],
      movieClickedID: undefined
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(response => {
        const movieData = response.movies
        this.setState({
          loading: false,
          movies: movieData
        })
      })
  }

  handleMovieCardClick = (id) => {
    this.setState({
      movieClickedID: id
    })
  }

  closeMovieDetails = () => {
    this.setState({
      movieClickedID: undefined
    })
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Rancid Tomatillos</h1>
        </header>
        {this.state.loading ? <h1>Loading... </h1> :
          (!this.state.movieClickedID &&
           <CardContainer 
             allMovies={this.state.movies}
             handleMovieCardClick={this.handleMovieCardClick}
           />
         )
        }
        { this.state.movieClickedID && 
          <MovieDetail
            id={this.state.movieClickedID}
            closeMovieDetails={this.closeMovieDetails}
          />
        } 
      </main>
    )
  }
}

export default App;
