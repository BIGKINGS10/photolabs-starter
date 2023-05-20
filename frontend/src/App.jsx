import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import PhotoList from './components/PhotoList';

import './App.scss';

// Note: Rendering a single component to build components in isolation
const App = () => {
 

  return (
    <div className="App">
      {/* {list} */}
      <PhotoList />
    
    </div>

  );


};

export default App;