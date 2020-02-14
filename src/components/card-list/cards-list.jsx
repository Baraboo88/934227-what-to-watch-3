import React, {PureComponent} from "react";
import SmallCard from "../small-card/small-card.jsx";
import {cardPropTypes} from "../../utils/utils";
import PropTypes from "prop-types";

class CardsList extends PureComponent {
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
        onTitleClick = {this.props.onTitleClick}
      />
    ));
  }

  render() {
    return (
      <React.Fragment>{this._renderCard(this.props.cards)}</React.Fragment>
    );
  }
}

CardsList.propTypes = {
  cards: PropTypes.arrayOf(cardPropTypes).isRequired,
  onTitleClick: PropTypes.func.isRequired
};

export default CardsList;
