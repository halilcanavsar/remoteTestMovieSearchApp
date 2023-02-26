import SearchResults from '../../components/searchResults/SearchResults';

function Home({ movies }) {
  return (
    <div>
      <SearchResults movies={movies} />
    </div>
  );
}

export default Home;
