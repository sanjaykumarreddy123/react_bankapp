import React, { Component } from "react";
import { useNavigate } from "react-router";
import { FaLinkedin, FaInstagram,FaEnvelope } from 'react-icons/fa';
import "./HomePage.css"; // Import your CSS file from the correct path


const HomePage = (props) => {
    const navigate = useNavigate();

    const login = () => {
        navigate("/login");
    };

    const signup = () => {
        navigate("/signup");
    };

    const logout = () => {
        navigate("/logout");
    };

    return (
        <div className="container mt-4" >
            <div className="row">
                <div className="col-md-5 left-column" style={{ background: "transparent"}} >
                    <ul className="list-group">
                        <li className="list-group-item">Name: sanjay</li>
                        <li className="list-group-item">Mobile: 9392388202</li>
                        <li className="list-group-item">Mail: sanjaybijjam6@gmail.com</li>

                    </ul> 
                    <div className="make"> 
                    <a href="https://www.linkedin.com/in/bijjam-sanjay-159836302/" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <FaLinkedin className="icon linkedin-icon" />
                        </a>
                        <a href="https://www.instagram.com/sanjaykumarreddy32/" target="_blank" rel="noopener noreferrer" className="icon-link">
                            <FaInstagram className="icon instagram-icon" />
                        </a>
                        
                        <a href="mailto:your-sanjaybijjam6@gmail.com" className="icon-link">
                            <FaEnvelope className="icon gmail-icon" />
                        </a>
                    </div>  &nbsp; &nbsp; &nbsp;      
                    
                </div>
                <div className="col-md-4 right-column" style={{ background: "transparent"}}>                 
                    <img src={require('./IMG-20240212-WA0006.jpg')} alt="My-Image" className="img-thumbnail" width={"300px"} height={"100px"}/>

                    <form className="form-group">
                       
                        {props.isLoggedIn ? (
                            <button className="btn btn-success" onClick={logout}>Logout</button>
                        ) : (
                            <>
                                <button className="btn btn-primary" type="button" onClick={login}>Login</button>
                                <button className="btn btn-primary" type="button" onClick={signup}>Signup</button>
                            </>
                        )}
                    </form>
                </div>

                
                
            </div>
            
        </div>
    );
};

export default HomePage;
