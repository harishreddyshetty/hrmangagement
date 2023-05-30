import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [errMsg,setErrMsg]=useState(false)
  const [errMsgDisplay,setErrMsgDisplay]=useState('')
  
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

      const response = await fetch('http://192.168.0.158:8000/validating_credentials  ', options);
      if (response.status === 200) {
        navigate('/allemployees');
        

      }
      else{
        setErrMsg(true)
        const data=await response.json()
        setErrMsgDisplay(data.detail)
        
    
     
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
        {errMsg&&<p className='err-msg-display'>*{errMsgDisplay}</p>}
        <button type="submit" className="hr-button m-1 align-self-center">Login</button>
        
    
      </form>
    </div>
  );
};

export default LoginForm;
