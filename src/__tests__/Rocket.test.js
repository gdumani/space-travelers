import React from 'react';
import ReactDOM from 'react-dom/client';
import Rocket from '../components/Rocket';

it('renders without crashing', () => {
  const data = {
    rocketImage: 'image',
    rocketId: 1,
    rocketName: 'm1',
    rocketDescription: 'rocket1',
    rocketStatus: true,
  };
  const root = ReactDOM.createRoot(document.createElement('div'));
  root.render(
    <div>
      <Rocket rocket={data} />
    </div>,
  );
});
