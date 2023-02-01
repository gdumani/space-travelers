// import axios from "axios";
const GET_ROCKETS = 'GET_ROCKETS';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return { ...state };

    default:
      return state;
  }
};

export default reducer;
