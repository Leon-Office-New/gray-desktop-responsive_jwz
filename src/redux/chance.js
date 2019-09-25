const ADD_CARD_BET = 'ADD_CARD_BET';
const CARD_SELECTION = 'CARD_SELECTION';

// export const TYPED

const cards = ['7', 'J', '8', 'Q', '9', 'K', '10', 'A'];

const getOdds = () => {
  let odds = [];
  for (let i = 0; i < cards.length; i++) {
    odds.push({
      id: i + 1,
      card: cards[i],
      text: cards[i],
      value: 1 + Math.random()
    });
  }
  return odds;
};

const initialState = {
  odds_of_cards: getOdds(),
  bets_of_cards: {},
  selectedCards: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD_BET: {
      return {
        ...state,
        bets_of_cards: { ...state.bets_of_cards, ...action.payload }
      };
    }

    case CARD_SELECTION: {
      return {
        ...state,
        selectedCards: state.selectedCards.includes(action.payload)
          ? state.selectedCards.filter(item => item !== action.payload)
          : state.selectedCards.concat(action.payload)
      };
    }

    default: {
      return state;
    }
  }
};

export const addCardBet = (bet, type) => {
  return dispatch => {
    let obj = {
      [type]: {
        ...bet
      }
    };

    dispatch({
      type: ADD_CARD_BET,
      payload: obj
    });
  };
};

export const cardSelection = type => {
  return dispatch => {
    dispatch({
      type: CARD_SELECTION,
      payload: type
    });
  };
};
