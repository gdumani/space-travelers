import axios from 'axios';

export const GET_ROCKETS = 'GET_ROCKETS';
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

const initialState = [];
//   {
//   rocketId: 1,
//   rocketName: 'Falcon1',
//   rocketDescription: 'first stage',
//   rocketImage: 'https://imgur.com/DaCfMsj.jpg',
//   rocketStatus: false,
// }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
