import React,{useState} from "react";
import "./home.css";
import Login from "./login";
import Register from "./register";
const Home = () => {
    const[loginPage,setLoginPage] = useState(true);
    const setLogin =(val)=>{
        setLoginPage(val)
    }
  return (
    <div className="home">
        {
            loginPage?<Login setLogin={setLogin}/>:<Register setLogin={setLogin}/>
        }
    </div>
  );
};

export default Home;
