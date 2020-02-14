import React from 'react';
import PropTypes from 'prop-types';
import {cardPropTypes} from '../../utils/utils';

const SmallCard = (props) => {
  const {name, img, id} = props.card;

  const titleClickHandler = (event) => {
    event.preventDefault();
    props.onTitleClick(id);
  };

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
        <a className="small-movie-card__link" href="#" onClick={titleClickHandler} data-test = 'test-title-click'>
          {name}
        </a>
      </h3>
    </article>
  );
};

SmallCard.propTypes = {
  card: cardPropTypes,
  onMouseOver: PropTypes.func.isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default SmallCard;
