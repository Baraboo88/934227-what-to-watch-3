import React from 'react';
import PropTypes from 'prop-types';
import {cardPropTypes} from '../../utils/utils';

const SmallCard = (props) => {
  const {name, img} = props.card;
  return (
    <article
      className="small-movie-card catalog__movies-card"
      onMouseOver={props.onMouseOver}
      data-test="small-card-test"
    >
      <div className="small-movie-card__image">
        <img src={img} alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {name}
        </a>
      </h3>
    </article>
  );
};

SmallCard.propTypes = {
  card: cardPropTypes,
  onMouseOver: PropTypes.func.isRequired
};

export default SmallCard;
