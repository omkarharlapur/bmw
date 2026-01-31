import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css"
import Profile from "./Profile";
import About from "./About"
export default function Navbar(){
    return (
        <div className="nav-container">
            <div className="logo">
                <img src="/bmw_white_logo.svg" alt="" />
            </div>
            <ul className="nav-links">
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/profile"}>Profile</NavLink></li>
                <li><NavLink to={"/about"}>About</NavLink></li>
            </ul>
           
        </div>
    )
}