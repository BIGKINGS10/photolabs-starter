import React from 'react';

import '../styles/PhotoList.scss';
import PhotoListItem from './PhotoListItem';

const PhotoList = (props) => {
  const list = props.photos.map(photo =>
    <PhotoListItem
      key={photo.id}
      // imageSource={photo.imageSource}
      imageSource={photo.urls.regular}
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