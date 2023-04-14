const initialState = [];

const filesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FILES_SUCCESS":
      return action.payload;
    case "GET_FILES_FAILURE":
      return state;
    default:
      return state;
  }
};

export default filesReducer;
