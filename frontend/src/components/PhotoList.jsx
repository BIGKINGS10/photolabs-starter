import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const list = props.photos.map(photo =>
    <PhotoListItem
      
      // imageSource={photo.imageSource}
      key={photo.id}
      id={photo.id}
      imageSource={photo.urls.regular}
      favorites={props.favorites}
      toggleFavorite={props.toggleFavorite}

    />

  );
  return (
    <ul className="photo-list">
      {/* Insert React */}
      {list}
    </ul>

  );
};

PhotoList.defaultProps = {
  photos: [
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 1,
      hideUserName: false,
    },
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 2,
      hideUserName: false,
    },
    {
      username: 'Jacob',
      imageSource: `${process.env.PUBLIC_URL}/Image.jpg`,
      id: 3,
      hideUserName: false,
    }
  ]
};

export default PhotoList;