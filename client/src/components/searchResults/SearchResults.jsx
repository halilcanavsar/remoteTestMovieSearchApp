import { getMovieDetails } from '../../axios';
import { useNavigate } from 'react-router-dom';

function SearchResults({ movies }) {
  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    getMovieDetails(id).then((res) => {
      navigate(`/movie/${id}`);
    });
  };

  return (
    <div className="search-result-container">
      {movies.map((movie) => (
        <div key={movie.id} onClick={() => handleMovieClick(movie.id)}>
          <h3>{movie.title}</h3>
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt=""
            />
          ) : (
            <img src="https://via.placeholder.com/500x750" alt="" />
          )}
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
