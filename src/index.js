import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/app.jsx';
import {promoFilmData, titleClickHandler} from "./utils/test-data";

ReactDOM.render(<App {...promoFilmData} titleClickHandler = {titleClickHandler}/>, document.querySelector(`#root`));
