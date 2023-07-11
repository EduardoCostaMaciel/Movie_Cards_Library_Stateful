import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

class AddMovie extends React.Component {
  constructor() {
    super();

    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: name === 'rating' ? Number(value) : value });
  };

  handleClick = () => {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState({
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    });
  };

  handleSubTitle = () => {
    const { subtitle } = this.state;
    return (
      <label
        className="form-label-container addMovie-form-container-subtitle "
        htmlFor="subtitulo"
        data-testid="subtitle-input-label"
      >
        Subtítulo
        <input
          type="text"
          name="subtitle"
          value={ subtitle }
          onChange={ this.handleChange }
          data-testid="subtitle-input"
        />
      </label>
    );
  };

  handleTitle = () => {
    const { title } = this.state;
    return (
      <label
        className="form-label-container"
        htmlFor="título"
        data-testid="title-input-label"
      >
        Título
        <input
          type="text"
          name="title"
          value={ title }
          onChange={ this.handleChange }
          data-testid="title-input"
        />
      </label>
    );
  };

  handleImagePath = () => {
    const { imagePath } = this.state;
    return (
      <label
        className="form-label-container"
        htmlFor="imagem"
        data-testid="image-input-label"
      >
        Imagem
        <input
          type="text"
          name="imagePath"
          value={ imagePath }
          onChange={ this.handleChange }
          data-testid="image-input"
        />
      </label>
    );
  };

  handleStoryLine = () => {
    const { storyline } = this.state;
    return (
      <label
        className="form-label-container"
        htmlFor="sinopse"
        data-testid="storyline-input-label"
      >
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  };

  handleRating = () => {
    const { rating } = this.state;
    return (
      <label
        className="form-label-container-rating"
        htmlFor="avaliação"
        data-testid="rating-input-label"
      >
        Avaliação
        <input
          type="number"
          name="rating"
          value={ rating }
          onChange={ this.handleChange }
          data-testid="rating-input"
        />
      </label>
    );
  };

  handleGenre = () => {
    const { genre } = this.state;
    return (
      <label
        className="form-label-container-rating"
        htmlFor="gênero"
        data-testid="genre-input-label"
      >
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">
            Ação
          </option>
          <option data-testid="genre-option" value="comedy">
            Comédia
          </option>
          <option data-testid="genre-option" value="thriller">
            Suspense
          </option>
        </select>
      </label>
    );
  };

  handleButtonSubmit = () => (
    <button
      type="button"
      data-testid="send-button"
      className="addMovie-form-button"
      onClick={ this.handleClick }
    >
      Adicionar filme
    </button>
  );

  render() {
    return (
      <>
        <form className="addMovie-form" data-testid="add-movie-form">
          {this.handleSubTitle()}
          {this.handleTitle()}
          {this.handleImagePath()}
          {this.handleStoryLine()}
          {this.handleRating()}
          {this.handleGenre()}
        </form>
        {this.handleButtonSubmit()}
      </>
    );
  }
}

AddMovie.defaultProps = {
  onClick: 'func',
};

AddMovie.propTypes = {
  onClick: PropTypes.func,
};

export default AddMovie;
