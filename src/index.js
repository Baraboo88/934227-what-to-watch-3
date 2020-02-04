import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const promoFilmData = {
  promoFilmName: `The Grand Budapest Hotel`,
  promoFilmGenre: `Drama`,
  promoFilmDate: 2014
};

ReactDOM.render(<App {...promoFilmData}/>, document.querySelector(`#root`));
