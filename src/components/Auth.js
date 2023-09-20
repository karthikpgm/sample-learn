
import React, { useState } from 'react';
export default function (props) {
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

        if(!Object.values(formData).every(val => val.trim() !== '')){
            setErrMsg('Please Fill in all Required Fields!');
            return;
        }
        loginRequest()
        // const data = await loginUser(formData);
        // console.log(data);
        // if(data.success){
        //     e.target.reset();
        //     setRedirect('Redirecting...');
        //     // await loggedInCheck();
        //     return;
        // }
        // setErrMsg("data.message");
    }
    async function loginRequest() {
        try {
          await fetch('http://localhost/Clapmaster/api_student/login', {
            method: 'POST',
            body: JSON.stringify({
              email: formData.email,
              password: formData.password,
            }),
          })
            .then((respose) => {
              if (respose.ok) {
                return respose.json()
              }
              throw new Error('error')
            })
            .then((data) => {
              if (data.status) {
                localStorage.setItem('token', data.status)
                // navigate('/')
              } else {
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
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}