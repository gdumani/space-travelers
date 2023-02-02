import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);
  return (
    <div>
      <h2>Rockets</h2>
      {rockets.map((rocket) => <Rocket key={rocket.rocketId} rocket={rocket} />)}
    </div>
  );
};

export default Rockets;
