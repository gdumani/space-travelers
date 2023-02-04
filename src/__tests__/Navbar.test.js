import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar';

it('renders without crashing', () => {
  const root = ReactDOM.createRoot(document.createElement('div'));
  root.render(
    <div>
      <Navbar />
    </div>,
  );
});
