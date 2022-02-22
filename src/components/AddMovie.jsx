import React from 'react';
import PropTypes from 'prop-types';

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
  }

  handleSubTitle = () => {
    const { subtitle } = this.state;
    return (
      <label htmlFor="subtitulo" data-testid="subtitle-input-label">
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
  }

  handleTitle = () => {
    const { title } = this.state;
    return (
      <label htmlFor="título" data-testid="title-input-label">
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
  }

  handleImagePath = () => {
    const { imagePath } = this.state;
    return (
      <label htmlFor="imagem" data-testid="image-input-label">
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
  }

  handleStoryLine = () => {
    const { storyline } = this.state;
    return (
      <label htmlFor="sinopse" data-testid="storyline-input-label">
        Sinopse
        <textarea
          name="storyline"
          value={ storyline }
          onChange={ this.handleChange }
          data-testid="storyline-input"
        />
      </label>
    );
  }

  handleRating = () => {
    const { rating } = this.state;
    return (
      <label htmlFor="avaliação" data-testid="rating-input-label">
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
  }

  handleGenre = () => {
    const { genre } = this.state;
    return (
      <label htmlFor="gênero" data-testid="genre-input-label">
        Gênero
        <select
          name="genre"
          value={ genre }
          onChange={ this.handleChange }
          data-testid="genre-input"
        >
          <option data-testid="genre-option" value="action">Ação</option>
          <option data-testid="genre-option" value="comedy">Comédia</option>
          <option data-testid="genre-option" value="thriller">Suspense</option>
        </select>
      </label>
    );
  }

  handleButtonSubmit = () => (
    <button
      type="button"
      onClick={ this.handleClick }
      data-testid="send-button"
    >
      Adicionar filme
    </button>
  )

  render() {
    return (
      <div>
        <form data-testid="add-movie-form">
          {this.handleSubTitle()}
          {this.handleTitle()}
          {this.handleImagePath()}
          {this.handleStoryLine()}
          {this.handleRating()}
          {this.handleGenre()}
          {this.handleButtonSubmit()}
        </form>
      </div>
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
