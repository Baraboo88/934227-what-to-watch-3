import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.jsx';
import {promoFilmData, titleClickHandler} from "./utils/test-utils";
import {films} from "./mocks/films";


ReactDOM.render(<App {...promoFilmData} titleClickHandler = {titleClickHandler} cards={films}/>, document.querySelector(`#root`));
