
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

/* Insert React */
const PhotoListItem = (props) => {
  
  
  const toggleFavorite = function() {
    props.toggleFavorite(props.id);
  }

  const selected = props.favorites.includes(props.id);


  return (
    <article className="photo-list-item">
      <PhotoFavButton 
      id={props.id}
      selected={selected}
      // onClick={props.toggleFavorite}
      onClick={toggleFavorite}
      />

      <img className="photo-list--image" src={props.imageSource} />
      {/* <h1>{props.username}</h1> */}
    </article>


  );
    

};

PhotoListItem.defaultProps = {
  username: 'Jacob',
  imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
  id: 1,
  hideUserName: false,
};

export default PhotoListItem;