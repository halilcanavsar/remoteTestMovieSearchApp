import './App.css';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import MovieDetails from './pages/movieDetails/MovieDetails';
import Navbar from './components/navbar/Navbar';
import SearchBar from './components/searchBar/SearchBar';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    if (email && password) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      navigate('/login');
    }
  }, [navigate]);

  // window.addEventListener('beforeunload', () => {
  //   localStorage.removeItem('email');
  //   localStorage.removeItem('password');
  // });

  return (
    <div>
      <Navbar />
      <SearchBar movies={movies} setMovies={setMovies} />
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
