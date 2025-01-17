import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';

const TopicList = (props) => {

  const list = props.topics.map(topic =>
    <TopicListItem
      key={topic.id}
      d={topic.id}
      // label={topic.label}
      label={topic.title}
      link={topic.link}
    
    />
  );

  return (
    <div className="top-nav-bar--topic-list">
      {/* Insert React */}
      {list}
    </div>

  );
};

TopicList.defaultProps = {
  topics: [
    {
      id: 1,
      label: 'Nature',
      link: 'link placeholder'
    },
    {
      id: 2,
      label: 'Food',
      link: 'link placeholder'
    },
    {
      id: 3,
      label: 'People',
      link: 'link placeholder'
    },
  ]
};
export default TopicList;