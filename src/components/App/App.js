import './App.css';
// import movieData from "../assets/movieData.js"
import MovieList from '../MovieList/MovieList.js'
import movieData from '../../assets/movieData.js'

const movies = movieData.movies

function App() {
  return (
    <div className="App">
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
