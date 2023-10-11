// src/components/ProfileSwitcher.js
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function ProfileSwitcher() {

    const { email } = useParams();
    const [userProfiles, setProfiles] = useState([]);
    const navigate = useNavigate();
    const generate_multi_profile_token = async (e) =>
    {
        const fData = new FormData();
        fData.append('user_id', e);
        const apiUrl = `${process.env.REACT_APP_BASE_URL}/api_student/generate_multi_profile_token`;

        try {
          await fetch(apiUrl, {
            method: 'POST',
            body: fData
          })
            .then((respose) => {
              if (respose.ok) {
                return respose.json()
              }
              throw new Error('error')
            })
            .then((data) => {
                localStorage.setItem('token', data.token)
                localStorage.setItem('user_id', data.user_id)
                localStorage.setItem('class',data.class);
                navigate(`/home`);

            })
        } catch (error) {
          console.log(error.message)
        }
    }
    async function MultiProfile(email) {
        const fData = new FormData();
        fData.append('email', email);
        try {
          const apiUrl = `${process.env.REACT_APP_BASE_URL}/api_user/fetch_multiple_profiles`;
          await fetch(apiUrl, {
            method: 'POST',
            body: fData
          })
            .then((respose) => {
              if (respose.ok) {
                return respose.json()
              }
              throw new Error('error')
            })
            .then((data) => {
                setProfiles(data);
              
            })
        } catch (error) {
          console.log(error.message)
        }
      }
      useEffect(() => {
        MultiProfile(email);
      }, [email]);
  return (
    <div>
        <h2>Select a Profile</h2>
        <ul className="list-group">
            {userProfiles.map((profile) => (
                <li key={profile.user_id} className="list-group-item">
                <button onClick={() => generate_multi_profile_token(profile.user_id)}>
                    {profile.first_name}
                </button>
                </li>
            ))}
        </ul>
    </div>
  );
}

export default ProfileSwitcher;
