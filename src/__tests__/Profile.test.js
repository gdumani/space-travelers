import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from '../components/Profile';

it('renders without crashing', () => {
  const root = ReactDOM.createRoot(document.createElement('div'));
  root.render(
    <div>
      <Profile />
    </div>,
  );
});
