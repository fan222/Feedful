import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => (
  <div>
    <div>
      <GreetingContainer />
      {children}
    </div>
  </div>
);

export default App;
