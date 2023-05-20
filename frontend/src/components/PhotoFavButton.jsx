import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  // const [selected, setSelected] = useState(false);


  
  // const onClick = function(){
  //   // setSelected(!selected);
  //   props.onClick(props.id);
  // }



  return (
    // <div className="photo-list--fav-icon" onClick={onClick}>
    <div className="photo-list--fav-icon" onClick={props.onClick}>
      <div className="photo-list--fav-icon-svg">
        {/* Insert React */}

        <FavIcon 
          width={20}
          height={27}
          outlineWidth={1}
          fill={props.selected ? '#C80000' : '#EEEEEE'}
          stroke={props.selected ? '#FFFFFF' : '#C80000'}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;