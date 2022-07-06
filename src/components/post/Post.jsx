import React from 'react';

import locationIcon from '../../assets/images/locationIcon.png';
import './post.css';

const Post = (props) => {
  const location = props.item.location.toUpperCase();

  return (
    <div className="post-container">
      <div className="post-left">
        <img src={props.item.imageUrl} alt="" className="post-image" />
      </div>
      <div className="post-details">
        <div className="post-location">
          <img src={locationIcon} alt="location" className="location-icon" />
          <span className="location-name">{location}</span>
          <a href={props.item.googleMapsUrl} className="location-link">
            {' '}
            View on Google Maps{' '}
          </a>
        </div>
        <h2 className="post-title">{props.item.title}</h2>
        <p className="duration">
          {props.item.startDate} - {props.item.endDate}
        </p>
        <p className="text">{props.item.description}</p>
      </div>
    </div>
  );
};

export default Post;
