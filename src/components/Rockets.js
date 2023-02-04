import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Rocket from './Rocket';
import { getRockets } from '../redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  useEffect(() => {
    if (rockets.length === 0) { dispatch(getRockets()); }
  }, [dispatch, rockets.length]);
  return (
    <div>
      <h2>Rockets</h2>
      {rockets.map((rocket) => <Rocket key={rocket.rocketId} rocket={rocket} />)}
    </div>
  );
};

export default Rockets;
