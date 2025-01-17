import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from '../components/TopNavigationBar';
import PhotoList from '../components/PhotoList';

const HomeRoute = (props) =>
  <div className="home-route">
    {/* Insert React */}
    <TopNavigationBar topics={props.topics} />
    <PhotoList 
    photos={props.photos} 
    favorites={props.favorites}
    toggleFavorite={props.toggleFavorite}
    />
  </div>

export default HomeRoute;