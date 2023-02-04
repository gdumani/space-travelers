import React from 'react';
import ReactDOM from 'react-dom/client';
import Rockets from '../components/Rockets';

it('renders without crashing', () => {
  const root = ReactDOM.createRoot(document.createElement('div'));
  root.render(
    <div>
      <Rockets />
    </div>,
  );
});
