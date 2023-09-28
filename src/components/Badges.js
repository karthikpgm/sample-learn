import React, { useEffect, useState } from 'react';

function Badges() {

  
  return (
    <div className='container'>
      <div className="col-sm-4">
          <div className="item">
            <a href="#">
            <span className="notify-badge">NEW</span>
                <img src="http://placehold.it/200x200"  alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Badges;
