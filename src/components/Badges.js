import React, { useEffect, useState } from 'react';

function Badges(props) {

  if (!props.badges.badges_details) {
    // If it's not defined, you can return null or a loading indicator
    return null; // You can customize this based on your needs
  }

  return (
    <div className='container'>
      <div className='row'>
        {props.badges.badges_details.map((badge, index) => (
          <div className="col-md-4" key={index}>
            <div className="item">
              <a href="#">
                <span className="notify-badge">{badge.title}</span>
                <img src={`${process.env.REACT_APP_BASE_URL}/uploads/badges/${badge.image}`} alt="" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
}

export default Badges;
