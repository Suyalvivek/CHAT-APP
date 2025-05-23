import React,{useState} from "react";
import "./register.css";
import AvatarSelector from "./avatarSelector/avatarSelector";
const Register = ({ setLogin }) => {
  const[profileAvatar,setProfileAvatar] = useState(false);
  const handleLogin = ()    => {
    setLogin(true);
  };
  const handleProfileAvatar=()=>{
    setProfileAvatar(prev=>!prev);
  }
  return (
    <div className="register">
      <div className="register-card">
        <div className="card-name">Register</div>
        <div className="register-form">
          <input
            type="text"
            placeholder="Enter username"
            className="input-box"
          ></input>
          <input
            type="password"
            placeholder="Enter password"
            className="input-box"
          ></input>
          <input
            type="text"
            placeholder="Enter name"
            className="input-box"
          ></input>
          <div className="image-file">
            <div className="select-profile-btn" onClick={handleProfileAvatar}>
              Select Profile img

            </div>
            <img src="/src/assets/avatar1.jpg" alt=""  className="avatar"/>

          </div>
          <div className="button">Register</div>
          <div className="register-link" onClick={handleLogin}>
            Already have an account? Login
          </div>
        </div>
      </div>
      {profileAvatar && <AvatarSelector setProfileAvatar={setProfileAvatar} />}

      
    </div>
  );
};

export default Register;
