import React, { useEffect, useState } from 'react';
import Rank from './Rank';
import LeaderBoards from './LeaderBoards';
import Badges from './Badges'

function Dashboard() {
  const [user_details, setData] = useState([]);
  const [top_ten_school, setTenSchool] = useState([]);
  const [top_ten_national, setNationalSchool] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const fData = new FormData();
  fData.append('auth_token',localStorage.getItem('token'));
  fData.append('user_id',localStorage.getItem('user_id'));
  useEffect(() => {
    // Replace 'apiEndpoint' with the actual API endpoint that provides image URLs
    fetch('http://localhost/Clapmaster/api_user/fetch_leaderboard', {
      method: 'POST',
      body: fData
    })
    .then((response) => response.json())
      .then((data) => {
          console.log(data.user_details);
              setData(data.user_details); // Assuming 'details' contains the array you want to display
              setTenSchool(data.top_ten_school); // Assuming 'details' contains the array you want to display
              setNationalSchool(data.top_ten_national); // Assuming 'details' contains the array you want to display
              setLoading(false);
            
        
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <Rank data={user_details}  />
      <LeaderBoards data={top_ten_school} top_ten_national={top_ten_national} />
      <Badges />
    </div>
  );
}

export default Dashboard;