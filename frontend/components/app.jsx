import React from 'react';
import { Link } from 'react-router';
import SidebarContainer from './sidebar/sidebar_container';
import MiddlePage from './middlepage/middlepage';

const App = ({ children }) => (
  <div>
    <div>
      <SidebarContainer />
      <MiddlePage />
      <div className="tbd">
        {children}
      </div>
    </div>
  </div>
);

export default App;
