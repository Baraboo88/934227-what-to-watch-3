import React, {PureComponent} from "react";
import SmallCard from "../SmallCard/small-card.jsx";
import PropTypes from "prop-types";
import {cardPropTypes} from "../../utils/utils";

class CardList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeFilmId: -1
    };
  }

  _hoverFilmHandler(id) {
    this.setState({
      activeFilmId: id
    });
  }

  _resetState() {
    this.setState({
      activeFilmId: -1
    });
  }

  _renderCard(cards) {
    return cards.map((card) => (
      <SmallCard
        card = {card}
        key={card.id}
        onMouseOver={() => this._hoverFilmHandler(card.id)}
      />
    ));
  }

  render() {
    return (
      <React.Fragment>{this._renderCard(this.props.films)}</React.Fragment>
    );
  }
}

CardList.propTypes = {
  films: PropTypes.arrayOf(cardPropTypes).isRequired
};

export default CardList;
