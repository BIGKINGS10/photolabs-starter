import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';
import FavBadge from './FavBadge';

const TopNavigationBar = function(props) {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar--logo">PhotoLabs</span>

      <div className="top-nav-bar--topic-list">
        <TopicList topics={props.topics} />
        <div className="top-nav-bar--fav-badge">
          <FavBadge />
        </div>

      </div>
    </div>
  );
};

export default TopNavigationBar;