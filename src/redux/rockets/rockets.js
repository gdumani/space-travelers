// import axios from 'axios';
const axios = require('axios');

export const GET_ROCKETS = 'GET_ROCKETS';
export const CHANGE_ROCKET_RESERVATION = 'CHANGE_ROCKET_RESERVATION';
const ROCKET_URL = 'https://api.spacexdata.com/v3/rockets';

export const getRockets = () => async (dispatch) => {
  const response = await axios.get(ROCKET_URL).then(
    (rockets) => rockets.data.map((el) => (
      {
        rocketId: el.id,
        rocketName: el.rocket_name,
        rocketDescription: el.description,
        rocketImage: el.flickr_images[0],
        rocketStatus: false,
      }
    )),
  );
  dispatch({
    type: GET_ROCKETS,
    payload: response,
  });
};

export const changeRocketReservation = (id) => ({
  type: CHANGE_ROCKET_RESERVATION,
  payload: id,
});

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;
    case CHANGE_ROCKET_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.rocketId === action.payload) {
          return {
            ...rocket,
            rocketStatus: !rocket.rocketStatus,
          };
        }
        return { ...rocket };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
