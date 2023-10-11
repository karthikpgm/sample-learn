import React, { useEffect, useState } from 'react';

function LeaderBoards(props) 
{
  return (
    <div className="container">
      <div className="row">
        <ul className="nav nav-tabs project-tab" id="myTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="tab1-tab"
              data-bs-toggle="tab"
              href="#tab1"
              role="tab"
              aria-controls="tab1"
              aria-selected="true"
            >
              School
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="tab2-tab"
              data-bs-toggle="tab"
              href="#tab2"
              role="tab"
              aria-controls="tab2"
              aria-selected="false"
            >
              National
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabsContent">
          <div
            className="tab-pane fade show active"
            id="tab1"
            role="tabpanel"
            aria-labelledby="tab1-tab"
          >
          <table className="table" cellspacing="0">
              <thead>
                  <tr>
                      <th>Class</th>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Photo</th>
                      <th>Points</th>
                  </tr>
              </thead>
              <tbody>
                {props.data.map((user, index) => (
                  <tr key={index}>
                    <td>{user.grade}</td>
                    <td>{user.st_rank}</td>
                    <td>{user.name}</td>
                    <td>{user.photo}</td>
                    <td>{user.points}</td>
                  </tr>
                ))}
              </tbody>
          </table>
          </div>
          <div
            className="tab-pane fade"
            id="tab2"
            role="tabpanel"
            aria-labelledby="tab2-tab"
          >
            <table className="table" cellspacing="0">
              <thead>
                  <tr>
                      <th>Class</th>
                      <th>Rank</th>
                      <th>Name</th>
                      <th>Photo</th>
                      <th>Points</th>
                  </tr>
              </thead>
              <tbody>
                {props.top_ten_national.map((user, index) => (
                  <tr key={index}>
                    <td>{user.grade}</td>
                    <td>{user.st_rank}</td>
                    <td>{user.name}</td>
                    <td>{user.photo}</td>
                    <td>{user.points}</td>
                  </tr>
                ))}
              </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );

}

export default LeaderBoards;
