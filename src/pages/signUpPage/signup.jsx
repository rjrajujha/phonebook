import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./signup.css";
import dots from "../Images/dots.svg";
import topleft from "../Images/topleft.svg";
import bottomright from "../Images/bottomright.svg";
const APIUrl = "https://contactsapi-qt0r.onrender.com"

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[confirmPassword,setConfirmPassword ] =useState("");
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    let item ={email,password,confirmPassword}
    console.warn(item)
    if (password !== confirmPassword) {
      alert(("Password does not match!"));
      return;
    }
    let result = await fetch(`${APIUrl}/api/users/signup`,{
      method:"POST",
      body:JSON.stringify(item),
      headers:{
            "Content-Type": "application/json",
            "Accept": "application/json"
      }
    }).catch((e) => {
      alert(e.message);
    });
    result = await result.json();
    console.warn("result",result)
  
    localStorage.setItem('user-info',JSON.stringify(result))

    if(result.errors) alert(result.errors[0].msg)
    if(result.status ==="failed" ){
      alert(result.message);

    } 
    if(result.status === "Success" ){
      alert("Sign Up Successfully completed !!");
       navigate('/')
    } 
  };
  return (
    <>
      <div className="outer-container">

  <img src={topleft} alt="topleft" className="topleft" />

  <div className="inner-container">

    <div className="left">
      <div className="leftsquare">
        <img src={dots} alt="dotLeft" className="dots" />
      </div>
    </div>

  <div className="inner-box">
      <div className="signup-logo-container">
        <p>Logo</p>
      </div>
      <div className="signup-message-container">
        <p>Create New Account</p>
      </div>
      <form action="" >
        <div className='signup-idbox'>
          <input
            type="email"
            id="signup_email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Mail ID"
            required
          />
        </div>
        <div className='signup-idbox'>
          <input
            type="password"
            id="signup_password"
            name="password"
            value={password}
              onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>
        <div className='signup-idbox'>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            required
          />
        </div>

        <div>
          <button id='signup-button' type="submit" onClick={(e) => {handleOnSubmit(e)}}>Sign Up</button>
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
    </>
  );
};

export default Signup;































//     <>
//       <div className="main-container">
//         <div className="signup-heading">
//             {/* <h1> Logo </h1> */}
//           <h2>Create New Account </h2>
//         </div>
//         <div className="signup-container">
//           <div className="form">
//             <input
//               type="text"
//               name="email"
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
//               className="form-input2"
//               placeholder="abcexample@gmail.com"
//               required
//             />

//             <input
//               type="password"
//               name="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-input2"
//               placeholder="Password"
//               required
//             />
            
//             <button
//               className="btn-btn-register" onClick={(e) => {handleOnSubmit(e)}}>Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </>
  // );
// };
// export default Signup;


//value={password}
//onChange={(e) => setPassword(e.target.value)}