import React, { useEffect, useState } from 'react';

function Rank(props) {
  return (
  <div className="container-fluid">
    <div className='rank'>
      <div className='rank-profile'>
        <div className='rank-img'>
            <img src='' alt='test'></img>
            <h4>{props.data.name}</h4>
        </div>
        <div className='rank-badge'>
          <img src='' alt='test'></img>
          <h4>{props.data.rank_level}</h4>
        </div>
      </div>
      <div className="row">
          <div className="col-md-4 col-xl-4">
              <div className="card bg-c-green order-card">
                  <div className="card-block">
                      <h6 className="m-b-20">National Rank</h6>
                      <h2 className="text-right"><i className="fa fa-rocket f-left"></i><span>{props.data.user_national_rank}</span></h2>
                  </div>
              </div>
          </div>
          
          <div className="col-md-4 col-xl-4">
              <div className="card bg-c-yellow order-card">
                  <div className="card-block">
                      <h6 className="m-b-20">Rank Points</h6>
                      <h2 className="text-right"><i className="fa fa-refresh f-left"></i><span>{props.data.points}</span></h2>
                  </div>
              </div>
          </div>
          
          <div className="col-md-4 col-xl-4">
              <div className="card bg-c-pink order-card">
                  <div className="card-block">
                      <h6 className="m-b-20">School Rank</h6>
                      <h2 className="text-right"><i className="fa fa-credit-card f-left"></i><span>{props.data.user_school_rank}</span></h2>
                  </div>
              </div>
          </div>
      </div>
    </div>
</div>

  );
}

export default Rank;
