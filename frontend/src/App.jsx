import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import TopicList from './components/TopicList';
import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';

// Note: Rendering a single component to build components in isolation
const App = () => {
 

  return (
    <div className="App">
      {/* {list} */}
      {/* <PhotoList /> */}
      {/* <TopicList /> */}
      {/* <TopNavigationBar /> */}
      <HomeRoute />
    
    </div>

  );


};

export default App;