import MovieDetail from "../MovieDetail/MovieDetail";
import ErrorPage from "../ErrorPage";
import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom"
import "./App.css";
import CardContainer from "../CardContainer/CardContainer";
import { fetchData } from "../../apiCalls.js"

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: null,
    };
  }

  componentDidMount() {
    fetchData()
      .then((response) => {
        const movieData = response.movies;
        this.setState({
          movies: movieData,
        })
      })
      .catch((err) => {
        this.setState({
          error: err + ". Bad data from server. Refresh or try again later",
        })
    })
  }

  render() {
    return (
      <main className="App">
       <header>
        <Link to="/">
          <h1 className="logo-header">Rancid</h1>
        </Link>
        </header>
        <Route exact path="/" render={() => {
          return  this.state.error ? <Redirect to="/error" /> 
          : !this.state.movies.length ? <h1>Loading... </h1> :
         <CardContainer 
          allMovies={this.state.movies}
          />} 
         }
        /> 

        <Route exact path="/movie_details/:id" render={({match}) => 
          <MovieDetail 
            id={match.params.id}
          />} 
        />

        <Route exact path="/error" render={() => 
            <ErrorPage 
                message={this.state.error}
          />} 
        />
        
      </main>
     );
  }
}

export default App;
