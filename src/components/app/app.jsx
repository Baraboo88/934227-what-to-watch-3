import Main from '../main/main.jsx';
import React, {PureComponent} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CardDetails from '../card-details/card-details';
import PropTypes from 'prop-types';
import {cardPropTypes} from '../../utils/utils';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cardId: -1
    };

    this._headerClickHandler = this._headerClickHandler.bind(this);
  }

  _headerClickHandler(id) {
    this.setState({
      cardId: id
    });
  }

  _renderCards() {
    const {cards} = this.props;

    if (this.state.cardId === -1) {
      return <Main {...this.props} onTitleClick={this._headerClickHandler} />;
    } else {
      const newCard = cards.find((card) => card.id === this.state.cardId);
      if (newCard) {
        return <CardDetails card={newCard} />;
      }
      return null;
    }
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderCards()}
          </Route>
          <Route exact path="/dev-film-detail">
            <CardDetails card={this.props.cards[0]} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  cards: PropTypes.arrayOf(cardPropTypes)
};

export default App;
