const REQUESTING = 'REQUESTING';
const DEFAULT_ACTION = 'DEFAULT_ACTION';

const initialState = {
  count: 0,
  isRequesting: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT_ACTION: {
      return {
        ...state,
        isRequesting: false,
        count: state.count + action.payload
      };
    }

    case REQUESTING: {
      return {
        ...state,
        isRequesting: true
      };
    }

    default: {
      return state;
    }
  }
};

export const defaultAction = number => {
  return dispatch => {
    dispatch({
      type: REQUESTING
    });

    fetch('https://green-crm-stage.jellyworkz.com/api/get-events-with-bets')
      .then(response => response.json())
      .then(json => {
        let count = Object.keys(json).length;

        dispatch({
          type: DEFAULT_ACTION,
          payload: Number(count)
        });
      });
  };
};
