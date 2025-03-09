// LoginPage.jsx
import React from 'react';
import './login.css'; // Import your CSS file

function LoginPage() {
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
  <form method="POST">
    <div class="form-group centre-align">
      <label htmlFor="" className="roll-label label-login">Enter Your Roll Number</label>
    <input type="text" placeholder="21DD10090" className="login-roll"/>
      <label htmlFor="" className="dob-label label-login">Enter Your Date of Birth</label>
    <input type="date" className="login-dob"/>
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