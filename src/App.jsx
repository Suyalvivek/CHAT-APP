import { Dashboard } from "./components/dashboard/dashboard";
import Home from "./components/home";
import {Routes, Route } from "react-router-dom";

const App =()=>{
    return (

        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
            
        </div>
    )
}
export default App;