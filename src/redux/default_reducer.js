const DEFAULT_ACTION = 'DEFAULT_ACTION';

const initialState = {
  count: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DEFAULT_ACTION: {
      return {
        ...state,
        count: state.count + action.payload
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
      type: DEFAULT_ACTION,
      payload: Number(number)
    });
  };
};
