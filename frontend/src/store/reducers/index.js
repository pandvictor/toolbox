const initialState = {
  files: [],
  loading: false,
  error: null,
};

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FILES_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "GET_FILES_SUCCESS":
      return {
        ...state,
        files: action.payload,
        loading: false,
        error: null,
      };
    case "GET_FILES_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default fileReducer;
