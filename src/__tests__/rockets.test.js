import rocketReducer, { GET_ROCKETS, CHANGE_ROCKET_RESERVATION } from '../redux/rockets/rockets';

const state = [
  {
    rocketId: 1,
    rocketName: 'm1',
    rocketDescription: 'rocket1',
    rocketStatus: true,
  },
  {
    rocketId: 2,
    rocketName: 'm2',
    rocketDescription: 'rocket2',
    rocketStatus: false,
  },
];

describe('Rocket Reducer', () => {
  it('action GET_ROCKETS', () => {
    const action = { type: GET_ROCKETS, payload: state };
    const result = rocketReducer([], action);
    expect(result.length).toEqual(state.length);
  });

  it('action CHANGE_ROCKET_RESERVATION', () => {
    const action = {
      type: CHANGE_ROCKET_RESERVATION,
      payload: 1,
    };
    const newState = [
      {
        rocketId: 1,
        rocketName: 'm1',
        rocketDescription: 'rocket1',
        rocketStatus: false,
      },
      {
        rocketId: 2,
        rocketName: 'm2',
        rocketDescription: 'rocket2',
        rocketStatus: false,
      },
    ];
    const result = rocketReducer(state, action);
    expect(result).toEqual(newState);
  });
});
