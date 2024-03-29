import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

class SearchBar extends React.Component {
  handleText = () => {
    const { searchText, onSearchTextChange } = this.props;
    return (
      <label
        htmlFor="input1"
        data-testid="text-input-label"
        className="form-label-container"
        // className="searchBar-form-container-input-text"
      >
        Inclui o texto
        <input
          name="searchText"
          type="text"
          value={ searchText }
          onChange={ onSearchTextChange }
          data-testid="text-input"
        />
      </label>
    );
  };

  handleCheck = () => {
    const { bookmarkedOnly, onBookmarkedChange } = this.props;
    return (
      <label
        htmlFor="inputCheck"
        data-testid="checkbox-input-label"
        className="searchBar-form-container-input-check"
      >
        Mostrar somente favoritos
        <input
          type="checkbox"
          name="bookmarkedOnly"
          checked={ bookmarkedOnly }
          value={ bookmarkedOnly }
          onChange={ onBookmarkedChange }
          data-testid="checkbox-input"
        />
      </label>
    );
  };

  handleSelectGenre = () => {
    const { selectedGenre, onSelectedGenreChange } = this.props;
    return (
      <label
        htmlFor="select"
        data-testid="select-input-label"
        className="searchBar-form-container-select"
      >
        Filtrar por gênero
        <select
          name="selectedGenre"
          value={ selectedGenre }
          onChange={ onSelectedGenreChange }
          data-testid="select-input"
        >
          <option data-testid="select-option" value="">
            Todos
          </option>
          <option data-testid="select-option" value="action">
            Ação
          </option>
          <option data-testid="select-option" value="comedy">
            Comédia
          </option>
          <option data-testid="select-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  };

  render() {
    return (
      <>
        {/* searchBar form */}
        <form data-testid="search-bar-form" className="searchBar-form">
          {this.handleText()}
          {this.handleCheck()}
          {this.handleSelectGenre()}
        </form>
      </>
    );
  }
}

SearchBar.defaultProps = {
  searchText: '',
  onSearchTextChange: '',
  bookmarkedOnly: false,
  onBookmarkedChange: '',
  selectedGenre: '',
  onSelectedGenreChange: '',
};

SearchBar.propTypes = {
  searchText: PropTypes.string,
  onSearchTextChange: PropTypes.func,
  bookmarkedOnly: PropTypes.bool,
  onBookmarkedChange: PropTypes.func,
  selectedGenre: PropTypes.string,
  onSelectedGenreChange: PropTypes.func,
};

export default SearchBar;
