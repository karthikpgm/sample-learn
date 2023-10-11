
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function (props) {
    const navigate = useNavigate();

    // const {loginUser, wait, loggedInCheck} = useContext(UserContext);
    const [redirect, setRedirect] = useState(false);
    const [errMsg, setErrMsg] = useState(false);
    const [formData, setFormData] = useState({
        email:'',
        password:''
    });

    const onChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    
    const submitForm = async (e) => {
        e.preventDefault();

          // Create a new FormData object and append user input data
        const fData = new FormData();
        fData.append('email', formData.email);
        fData.append('password', formData.password);


        if(!Object.values(formData).every(val => val.trim() !== '')){
            setErrMsg('Please Fill in all Required Fields!');
            return;
        }
        // loginRequest(fData)
        const data = await loginRequest(fData);
        // console.log(data);
        // if(data){
        //     e.target.reset();
        //     setRedirect('Redirecting...');
        // //     // await loggedInCheck();
        //     return;
        // }
        // setErrMsg("data.message");
    }
    async function loginRequest(fdata) {
       const apiUrl = `${process.env.REACT_APP_BASE_URL}/api_student/login`;
      console.log(apiUrl);
        console.log(fdata)
        try {
          await fetch(apiUrl, {
            method: 'POST',
            body: fdata
          })
            .then((respose) => {
              if (respose.ok) {
                return respose.json()
              }
              throw new Error('error')
            })
            .then((data) => {
                if (data.validity == 1) 
                {
                    if(data.profile_category_type == "2" || data.profile_category_type == "3")
                    {
                        console.log(data);
                        if (data.multi_profile == 1) 
                        {
                            navigate(`/multi-profile/${data.email}`);
                        }
                        else
                        {
                            localStorage.setItem('token', data.token)
                            localStorage.setItem('user_id',data.user_id);
                            localStorage.setItem('class',data.class);
                        }
                    }
                    else
                    {
                        alert('Please try to login at your school.');
                        return;
                    }
                    // navigate('/')
              } 
              else 
              {
                //set error
              }
            })
        } catch (error) {
          console.log(error.message)
        }
      }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={submitForm}>

        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          {errMsg && <div className="alert alert-danger">{errMsg}</div>}
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email" name="email"  onChange={onChangeInput}
              className="form-control mt-1"
              placeholder="Enter email" id="email" value={formData.email}
            />
           
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password" name="password" onChange={onChangeInput} 
              className="form-control mt-1"
              placeholder="Enter password"
              id="password" value={formData.password} 
            />
          </div>
          <div className="d-grid gap-2 mt-3">
          {redirect ? redirect : <button type="submit" className="btn btn-primary">Login</button>}
           </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}