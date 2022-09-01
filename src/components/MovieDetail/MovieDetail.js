import React, { Component } from "react";
import "./MovieDetail.css"
import GenreBubble from "./GenreBubble/GenreBubble.js"
import {  fetchData } from "../apiCalls.js"

const urlBody = "https://rancid-tomatillos.herokuapp.com/api/v2/movies/";
class MovieDetail extends Component {
  constructor(props) {
    const { id, history } = props;
    super(props);
    this.state = {
      id: id,
      error: undefined,
    };
  }

  componentDidMount = () => {
    fetchData(this.state.id)
      .then((data) => {
        this.setState({
          ...this.state,
          movie: data.movie,
        })
      })
      .catch((err) => {
        this.setState({
          error: err + ". Bad data from server. Refresh or try again later",
        })
      })
    };

  render = () => {
    const movie = this.state.movie;
    if(this.state.error) {
      return (<h1>{this.state.error}</h1>)
    } else if (movie) {
      let genreBubbles;
      genreBubbles = movie.genres.map( 
        (genre) => {
          return <GenreBubble genre={genre} />
        } )

      return (
        <div className="movie-container">
          <div>
            <h2 onClick={(() => this.props.history.push(`/`))} className="all-movies">All Movies</h2>
          </div>
          <section className="movie-detail">
              <div className="movie-header">
                <div className="movie-title">
                  <h1>{movie.title}</h1>
                  <small>
                    {movie.release_date} • {movie.runtime}{" mins "}
                  </small>
                </div>
                <div className="movie-rating">
                  ⭐ <span className="rating-score">{movie.average_rating.toFixed(1)}</span>/10
                </div>
              </div>          
              <div className="movie-banner">
                <img src={movie.poster_path} className="poster" alt="movie poster"></img>
                <img src={movie.backdrop_path} className="backdrop" alt="movie backdrop"></img>
              </div>         
              <div className="movie-errata">
                  <h3 className="tagline">{movie.tagline}</h3>
                  <h4 className="overview">{movie.overview}</h4>             
                <div className="left-column">
                  <div className="genre-bubbles">
                    {genreBubbles}
                  </div>
                    <p>Revenue: {"$" + new Intl.NumberFormat().format(movie.revenue)}</p>               
                </div>
                <div className="right-column">
                </div>
              </div>
          </section>
        </div>
      )
    } else {
      return (<h1>Loading...</h1>)
    }
  };
}

export default MovieDetail;
