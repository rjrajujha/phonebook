import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate,Link } from "react-router-dom";

import "./signin.css";
import React from "react";
import dots from "../Images/dots.svg";
import topleft from "../Images/topleft.svg";
import bottomright from "../Images/bottomright.svg";
const APIUrl = "https://contactsapi-qt0r.onrender.com"


const Signin = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const email = formdata.get("email");
    const password = formdata.get("password");

    axios
      .post(`${APIUrl}/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.status === "success") {
          window.localStorage.setItem("token", res.data.token);
          alert("SignIn Sucessfully!");
          console.log(email);
          navigate('/TotalContacts')
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Enter Valid Details");
      });
  };
  
  return (
    <> 

    <div className ="main-container">
      <div className="outer-container">
        <img src={topleft} alt="topleft" className="topleft" />

        <div className="inner-container">
          <div className="left">
            <div className="leftsquare">
              <img src={dots} alt="dotLeft" className="dots" />
            </div>
          </div>

          <div className="inner-box">
            <div className="signin-logo-container">
              <p>Logo</p>
            </div>
            <div className="signin-message-container">
              <p>Enter your credentials to access your account</p>
            </div>
            <form action="" onSubmit={handleOnSubmit}>
              <div className="signin-idbox">
                <input
                  type="email"
                  id="login_email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="User ID"
                  required
                />
              </div>
              <div className="signin-idbox">
                <input
                  type="password"
                  id="login_password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  required
                />
              </div>
              <div>
                
                <button id="signin-button" type="submit">
                  Sign In
                </button>
              </div>
              <div className="signupbox">
                <Link to="/signup">Sign Up</Link>
                {/* <button id="signin-button" type="submit">
                  Sign Up
                </button> */}
              </div>
            </form>
          </div>

          <div className="right-container">
            <div className="rightsquare">
              <img src={dots} alt="dotright" className="dots" />
            </div>
          </div>
        </div>
        <img src={bottomright} alt="bottomright" className="bottomright" />
      </div>
      </div>
    </>
  );
};

export default Signin;
