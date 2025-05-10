import React from 'react'
import './login.css'
const Login = ({setLogin}) => {
    const handleNotRegistered =()=>{
        setLogin(false);
    }
  return (
    <div className="login">
    <div className="login-card">
      <div className="card-name">
          LOGIN
      </div>
      <div className="login-form">
          <input type="text" placeholder="Enter username" className="input-box"></input>
          <input type="password" placeholder="Enter password" className="input-box"></input>
          <div className="button">Login</div>
          <div className="register-link" onClick={handleNotRegistered}>Not Registered Yet?</div>


      </div>
    </div>
    
    </div>
  )
}

export default Login;