// LoginPage.jsx
import React, { useRef } from 'react';
import './login.css'; // Import your CSS file
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';


function LoginPage() {
  const rollNumberRef = useRef(null);
  const dobRef = useRef(null);

  useEffect(() => {
    // Check if user is already logged in
    const token = window.localStorage.getItem("token");
    if (token) {
      window.location.href = "/home";
    }
  }, []);

  setInterval(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      window.location.href = "/home";
    }
  }, 1000);

  const handleSubmit = async(event) => {
    event.preventDefault();
    const rollNumber = rollNumberRef.current.value;
    const dob = dobRef.current.value;
    
    //request to submit the form
    try{
      const response = await axios.post("http://localhost:5000/api/users/login", {
        rollno: rollNumber,
        dob: dob
      });

      console.log(response.data);

      window.localStorage.setItem("token", response.data.token);

      console.log("Token:", response.data.token);

      // Redirect to home page

      window.location.href = "/home";

    } catch (error) {
      console.error("Error fetching posts:", error);
      alert("Invalid Credentials");
      
    }

  



    console.log("Roll Number:", rollNumber);
    console.log("Date of Birth:", dob);
  };

  return (
    <div className="main-contanier">
      <div className="sac-name">STUDENTS' ALUMNI CELL</div>
      <div class="logo-container">
        <img src="../../src/img/kgplogo_white.png" alt="Institution Logo" />
        <h2 class="portal-title">YEARBOOK PORTAL</h2>
        <div class="year">2025</div>
      </div>
      <div class="login-container">
        <h2 class="form-title">Login To Yearbook Portal 2025</h2>
        <form method="POST" onSubmit={handleSubmit}>
          <div class="form-group centre-align">
            <label htmlFor="" className="roll-label label-login">Enter Your Roll Number</label>
            <input type="text" placeholder="21DD10090" className="login-roll" ref={rollNumberRef} />
            <label htmlFor="" className="dob-label label-login">Enter Your Date of Birth</label>
            <input type="date" className="login-dob" ref={dobRef} />
            <button class="btn-login btn" type="submit">LOGIN</button>
            <small class="btn-test btn">
              <a href="">Write Testinomials</a>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
