import React from 'react';

import Post from '../post/Post';
import './main.css';
import data from '../../data';

const Main = () => {
  return (
    <div className="main-container">
      {data.map((item) => (
        <Post key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Main;
