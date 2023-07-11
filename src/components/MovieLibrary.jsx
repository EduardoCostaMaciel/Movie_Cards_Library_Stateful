import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';
import MovieList from './MovieList';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;

    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies,
    };
  }

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox'
      ? target.checked : target.value;
    this.setState({ [name]: value });
  };

  handleAddMovie = (newMovies) => {
    this.setState((previousState) => ({ movies: [...previousState.movies, newMovies] }));
  }

  handleFilterMovie = (movies, bookmarkedOnly, selectedGenre, searchText) => {
    if (bookmarkedOnly) {
      return movies.filter(({ bookmarked }) => bookmarked === bookmarkedOnly);
    }
    if (selectedGenre !== '') {
      return movies.filter(({ genre }) => genre === selectedGenre);
    }
    if (searchText !== '') {
      return movies.filter(
        ({ title, subtitle, storyline }) => title.includes(searchText)
        || subtitle.includes(searchText)
        || storyline.includes(searchText),
      );
    }
    return movies;
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies } = this.state;

    return (
      <>
        <h2
          style={ { fontSize: '1.6rem', textAlign: 'center', paddingTop: 8 } }
        >
          My awesome movie library
        </h2>
        <SearchBar
          searchText={ searchText }
          onSearchTextChange={ this.handleChange }
          bookmarkedOnly={ bookmarkedOnly }
          onBookmarkedChange={ this.handleChange }
          selectedGenre={ selectedGenre }
          onSelectedGenreChange={ this.handleChange }
        />
        <MovieList
          movies={
            this.handleFilterMovie(movies, bookmarkedOnly, selectedGenre, searchText)
          }
        />
        {/* <MovieList movies={ movies } /> */}
        <AddMovie onClick={ this.handleAddMovie } />
      </>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
