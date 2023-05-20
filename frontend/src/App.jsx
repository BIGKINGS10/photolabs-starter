import React, {useState} from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';
import TopicList from './components/TopicList';
import TopNavigationBar from './components/TopNavigationBar';
import HomeRoute from './routes/HomeRoute';
import topics from './mocks/topics';
import photos from './mocks/photos';

// Note: Rendering a single component to build components in isolation
const App = () => {

  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = function(id){
    if(favorites.includes(id)){
      console.log("removing favorites:", id);
      setFavorites(favorites.filter(i => i != id));
      return;
    }

    console.log("adding favorites:", id);
    setFavorites([...favorites, id]);
  }
 

  return (
    <div className="App">
      {/* {list} */}
      {/* <PhotoList /> */}
      {/* <TopicList /> */}
      {/* <TopNavigationBar /> */}
      <HomeRoute
        photos={photos}
        topics={topics}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      
      />
    
    </div>

  );


};

export default App;