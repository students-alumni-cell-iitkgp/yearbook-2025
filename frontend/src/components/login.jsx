// LoginPage.jsx
import React from 'react';
import './login.css'; // Import your CSS file

function LoginPage() {
  return (
  <div className="main-contanier">
  <div class="login-container">
  <div class="logo-container">
    <img src="../../src/img/kgplogo_white.png" alt="Institution Logo" />
    <h2 class="portal-title">YEARBOOK PORTAL</h2>
    <div class="year">2025</div>
  </div>

  <h2 class="form-title">Login Now</h2>
  <form method="POST">
    <div class="form-group centre-align">
    <input type="text" placeholder="21DD10090" className="login-roll"/>
    <input type="text" placeholder="22122002" className="login-dob"/>
      <button class="btn-login" type="submit">LOGIN</button>
      <small class="text-muted d-block text-right mt-3">
        <a href="">Write Testinomials</a>
      </small>
    </div>
  </form>
  </div>
  </div>
  );
}

export default LoginPage;