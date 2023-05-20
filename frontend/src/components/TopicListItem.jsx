import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItem = (props) => {


  return (
    <div className="topic-list--item">
      {/* Insert React */}
      <span href={props.link}>
        {props.label}

      </span>
    </div>

  );
};

TopicListItem.defaultProps = {
  id: 1,
  label: 'Nature',
  link: 'link placeholder'
};

export default TopicListItem;