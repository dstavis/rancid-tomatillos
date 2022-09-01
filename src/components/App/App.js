import MovieDetail from "../MovieDetail/MovieDetail";
import ErrorPage from "../ErrorPage";
import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom"
import "./App.css";
import CardContainer from "../CardContainer/CardContainer";
import { fetchData } from "../apiCalls.js"

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      movies: [],
      error: undefined,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetchData()
      .then((response) => {
        const movieData = response.movies;
        this.setState({
          loading: false,
          movies: movieData,
        })
      })
      .catch((err) => {
        this.setState({
          error: err + ". Bad data from server. Refresh or try again later",
          loading: false,
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
        <Route exact path="/" render={({history}) => {
          return  this.state.error ? <Redirect to="/error" /> 
          : this.state.loading ? <h1>Loading... </h1> :
         <CardContainer 
          allMovies={this.state.movies}
          history={history}
          />} 
         }
        /> 

        <Route exact path="/movie_details/:id" render={({match, history}) => 
          <MovieDetail 
            id={match.params.id}
            history={history}
          />} 
        />

        <Route exact path="/error" render={({history}) => 
            <ErrorPage 
                message={this.state.error}
          />} 
        />
        
      </main>
     );
  }
}

export default App;
