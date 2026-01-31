import React from "react";
import { Routes,Route} from "react-router-dom";
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import "./Pages/App.css"
import Profile from "./Pages/Profile"
import About from "./Pages/About"

export default function App(){  


    return (
        <div>
            <Navbar/>
                <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
    )
}