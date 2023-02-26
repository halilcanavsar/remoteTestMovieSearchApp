import { useState } from 'react';
import { getMovieByQuery } from '../../axios';

import { useNavigate, useLocation } from 'react-router-dom';

function SearchBar({ movies, setMovies }) {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location, 'location');
  if (location.pathname === '/login') return null;

  const handleSearch = (e) => {
    e.preventDefault();

    if (search.trim() === '') return;

    getMovieByQuery(search).then((res) => {
      console.log(setMovies, 'setMovies');
      setMovies(res.results);
    });

    navigate('/');
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search for a movie"
          value={search}
          onChange={handleSearchChange}
          autoFocus
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
