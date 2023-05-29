import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [err,setErr]=useState(false)
  const navigate = useNavigate();

  const handleEmailBlur = () => {
    if (email.trim() === '') {
      setEmailError('*required');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordBlur = () => {
    if (password.trim() === '') {
      setPasswordError('*required');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email.trim() === '') {
      setEmailError('*required');
    }

    if (password.trim() === '') {
      setPasswordError('*required');
    }

    if (email.trim() !== '' && password.trim() !== '') {
      const options = {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      };

      const response = await fetch('http://localhost:8000/login', options);
      if (response.status === 200) {
        navigate('/AllEmployees');
      }
      else{
        setErr(true)
      }
    }
  };

  return (
    <div className='background d-flex flex-column justify-content-center align-items-center'>
      <form onSubmit={handleSubmit} className='col-8 col-md-4 login-card box-shadow d-flex flex-column form'>
        <div className="form-group m-1">
          <label htmlFor="hrEmail">EMAIL</label>
          <input
            type="email"
            className={`form-control ${emailError && 'is-invalid'}`}
            placeholder='ENTER YOUR EMAIL'
            id="hrEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            
          />
          {emailError && <p className="invalid-feedback">{emailError}</p>}
        </div>
        <div className="form-group m-1">
          <label htmlFor="hrPassword">PASSWORD</label>
          <input
            type="password"
            className={`form-control ${passwordError && 'is-invalid'}`}
            id="hrPassword"
            placeholder='ENTER YOUR PASSWORD'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={handlePasswordBlur}
            
          />
          {passwordError && <p className="invalid-feedback">{passwordError}</p>}
        </div>
        <button type="submit" className="hr-button m-1 align-self-center">Login</button>
        {err?<p className='invalid-feedback'>"password and username is not matched"</p>:null}
      </form>
    </div>
  );
};

export default LoginForm;
