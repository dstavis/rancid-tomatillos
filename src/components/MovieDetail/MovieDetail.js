import React, { Component } from "react";
import "./MovieDetail.css";
import GenreBubble from "./GenreBubble/GenreBubble.js"

const urlBody = "https://rancid-tomatillos.herokuapp.com/api/v2/movies/";
class MovieDetail extends Component {
  constructor(props) {
    const { id } = props;
    super(props);

    this.state = {
      id: id,
    };
  }

  componentDidMount = () => {
    fetch(urlBody + this.state.id)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          ...this.state,
          movie: data.movie,
        });
      });
  };

  render = () => {
    const movie = this.state.movie;
    // const genreBubbles = movie.genres.map( 
    //   (genre) => {
    //     return <GenreBubble genre={genre} />
    //   } )

    return (
      <div className="movie-container">
        <section className="movie-detail">
          { movie && (
            <div className="movie-header">
              <div className="movie-title">
                <h1>{movie.title}</h1>
                <small>
                  {movie.release_date} • {movie.runtime}{" "}
                </small>
              </div>

              <div className="movie-rating">

                ⭐ <span className="rating-score">{movie.average_rating.toFixed(1)}</span>/10
              </div>
            </div>
          )}

          { movie && (
            <div className="movie-banner">
              <img src={movie.poster_path} className="poster" alt="movie poster"></img>
              <img src={movie.backdrop_path} className="backdrop" alt="movie backdrop"></img>
            </div>
          ) }

          { movie && (
            <div className="movie-errata">
              <div className="left-column">
                <div className="genre-bubbles">
                  {/* {genreBubbles} */}
                </div>

              </div>
              <div className="right-column">

              </div>
            </div>
          )
          }
        </section>
      </div>
    );
  };
}

export default MovieDetail;
