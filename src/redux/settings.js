const SET_LANGUAGES = 'SET_LANGUAGES';
const SELECT_LANGUAGE = 'SELECT_LANGUAGE';
const SET_DECIMALS = 'SET_DECIMALS';
const SELECT_DECIMAL = 'SELECT_DECIMAL';

const initialState = {
  languages: [],
  selectedLanguage: null,
  decimals: [],
  selectedDecimal: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGES: {
      return {
        ...state,
        languages: action.payload
      };
    }

    case SELECT_LANGUAGE: {
      return {
        ...state,
        selectedLanguage: action.payload
      };
    }

    case SET_DECIMALS: {
      return {
        ...state,
        decimals: action.payload
      };
    }

    case SELECT_DECIMAL: {
      return {
        ...state,
        selectedDecimal: action.payload
      };
    }

    default: {
      return state;
    }
  }
};

export const setLanguages = languages => {
  return dispatch => {
    dispatch({
      type: SET_LANGUAGES,
      payload: languages
    });
  };
};

export const selectLanguage = language => {
  return dispatch => {
    dispatch({
      type: SELECT_LANGUAGE,
      payload: language
    });
  };
};

export const setDecimals = decimals => {
  return dispatch => {
    dispatch({
      type: SET_DECIMALS,
      payload: decimals
    });
  };
};

export const selectDecimal = decimal => {
  return dispatch => {
    dispatch({
      type: SELECT_DECIMAL,
      payload: decimal
    });
  };
};
