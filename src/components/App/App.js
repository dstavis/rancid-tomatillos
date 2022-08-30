import MovieDetail from "../MovieDetail/MovieDetail";
import ErrorPage from "../ErrorPage";
import React, { Component } from "react";
import { Route, Link } from "react-router-dom"
import "./App.css";
import CardContainer from "../CardContainer/CardContainer";

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
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        } else {
          return response.json();
        }
      })
      .then((response) => {
        const movieData = response.movies;
        this.setState({
          loading: false,
          movies: movieData,
        });
      })
      .catch((err) => {
        this.setState({
          error: err + ". Bad data from server. Refresh or try again later",
          loading: false,
        });
      });
  }

  render() {
    return (
      <main className="App">
       <header>
        <Link to="/">
          <h1>Rancid</h1>
        </Link>
        </header>
        <Route exact path="/" render={({history}) => 

         <CardContainer 
          allMovies={this.state.movies}
          history={history}
          />} />

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


      {/* <Route 
          exact path ="/:movieId"
            render={({match}) => {
              const movieToRender = puppies.find(creature => creature.id === parseInt(match.params.id));
              return <CreatureDetails {...creatureToRender} />
            }}
        />     */}

      {/* {this.state.error && <h2>{this.state.error}</h2>}
      {this.state.loading ? (
        <h1>Loading... </h1>
      ) : (
        !this.state.movieClickedID && (
          <CardContainer
            allMovies={this.state.movies}
            handleMovieCardClick={this.handleMovieCardClick}
          />
        )
      )} */}

      {/* {this.state.movieClickedID && (
        <MovieDetail
          id={this.state.movieClickedID}
          closeMovieDetails={this.closeMovieDetails}
        />
      )} */}




      // <main className="App">
      //   <header>
      //     <h1>Rancid</h1>
      //   </header>
      //   {this.state.error && <h2>{this.state.error}</h2>}
      //   {this.state.loading ? (
      //     <h1>Loading... </h1>
      //   ) : (
      //     !this.state.movieClickedID && (
      //       <CardContainer
      //         allMovies={this.state.movies}
      //         handleMovieCardClick={this.handleMovieCardClick}
      //       />
      //     )
      //   )}

      //   {this.state.movieClickedID && (
      //     <MovieDetail
      //       id={this.state.movieClickedID}
      //       closeMovieDetails={this.closeMovieDetails}
      //     />
      //   )}
      // </main>

// function Home() {
//   return (
    
//   )
// }

export default App;
