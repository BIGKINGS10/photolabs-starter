
import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {
  /* Insert React */
  return (
    <article className="photo-list-item">
      <PhotoFavButton />
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