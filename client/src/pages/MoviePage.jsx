import {useContext, useEffect, useState} from "react";
import MovieList from "../components/MovieList";
import MovieSearchField from "../components/MovieSearchField";
import MovieFilterMenu from "../components/MovieFilterMenu.jsx";
import GlobalContext from "../GlobalContext.jsx";

export default function () {
  //handles the searching for movies
  const {movies} = useContext(GlobalContext);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [searchString, setSearchString] = useState(null);

  useEffect(() => {setFilteredMovies(movies)}, [movies]);

  const addUserSearchString = (event) => {
    setSearchString(event.target.value);
  };

  //handles the sorting of movies
  useEffect(() => {
    if (isValidSearch(searchString)) filterMoviesBySearch();
    else setFilteredMovies(movies);
  }, [searchString]);

  return (
    <section className="movies">
      <div className="movie-search-and-filter-area">
        <h2>Movies</h2>
        <MovieSearchField handleSearch={addUserSearchString} />
        <MovieFilterMenu setFilteredMovies={setFilteredMovies} />
      </div>
      <MovieList movies={filteredMovies} />
    </section>
  );

  function filterMoviesBySearch() {
    setFilteredMovies([
      ...movies.filter((movie) =>
        compareTitleWithSearch(movie, searchString)
      ),
    ]);
  }
}

function isValidSearch(search) {
  return !(search === null || search === "");
}

function compareTitleWithSearch(movie, searchString) {
  let title = movie.title.toLowerCase();
  let string = searchString.toLowerCase();
  return title.includes(string);
}
