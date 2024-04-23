const { SET_LANGUAJE, SET_THEME } = require("./types");

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LANGUAJE:
      return {
        ...state,
        languaje: payload,
      };
    case SET_THEME:
      return {
        ...state,
        theme: payload,
      };

    default:
      return state;
  }
};

export default reducer;
