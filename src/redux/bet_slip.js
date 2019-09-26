import { removeByKey } from '../helpers';
import sport_icon from '../images/soccer-ball-variant.svg';

const ADD_BET = 'ADD_BET';
const REMOVE_BET = 'REMOVE_BET';
const REMOVE_ALL_BETS = 'REMOVE_ALL_BETS';
const CHANGE_STAKE_OF_BET = 'CHANGE_STAKE_OF_BET';

export const DEFAULT_BET = {
  id: Math.random(),
  category: {
    name: 'כדורגל',
    icon: sport_icon
  },
  live: true,
  event: {
    name: '..אופ״א ליגת האלופות'
  },
  participants: [
    {
      name: "מנצ'סטר יונייטד",
      score: 1
    },
    {
      name: 'יובנטוס',
      score: 0
    }
  ],
  market: {
    name: 'אסייתי - סיום המשחק(שערים)',
    bet: {
      name: "מנצ'סטר יונייטד",
      handicap_odds: '-0.5',
      odds: 1
    }
  },
  stake: 200,
  toReturn: 0
};

const initialState = {
  bets: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_BET: {
      return {
        ...state,
        bets: state.bets.concat({
          ...action.payload,
          id: state.bets.length + 1
        })
      };
    }

    case REMOVE_BET: {
      return {
        ...state,
        bets: removeByKey(state.bets, 'id', action.payload)
      };
    }

    case CHANGE_STAKE_OF_BET: {
      return {
        ...state,
        bets: changeStake(state.bets, action.payload.id, action.payload.stake)
      };
    }

    case REMOVE_ALL_BETS: {
      return {
        ...state,
        bets: []
      };
    }

    default: {
      return state;
    }
  }
};

export const addBet = (bet, odds) => {
  return dispatch => {
    dispatch({
      type: ADD_BET,
      payload: {
        ...bet,
        market: { ...bet.market, bet: { ...bet.market.bet, odds } }
      }
    });
  };
};

export const removeBet = id => {
  return dispatch => {
    dispatch({
      type: REMOVE_BET,
      payload: id
    });
  };
};

export const removeAllBets = () => {
  return dispatch => {
    dispatch({
      type: REMOVE_ALL_BETS
    });
  };
};

const changeStake = (list, id, stake) => {
  let item = list.filter(i => i.id === id)[0];
  item.stake = stake;
  return list;
};

export const changeStakeOfBet = (stake, id) => {
  return dispatch => {
    dispatch({
      type: CHANGE_STAKE_OF_BET,
      payload: { stake, id }
    });
  };
};
