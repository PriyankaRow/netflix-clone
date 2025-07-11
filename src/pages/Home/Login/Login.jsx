import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className='login'>
      <img src='https://m.media-amazon.com/images/I/31JfJ6dXD9L.png ' className='login-logo' alt="Netflix Logo"/>
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" && (<input type='text' placeholder='Your Name' />)}
          <input type='email' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button>{signState}</button>

          <div className="form-help">
            <div className="remember">
              <input type='checkbox' />
              <label>Remember Me</label>
            </div>
            <p className="help-text">Need Help?</p>
          </div>
        </form>

        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
              New to Netflix?
              <span onClick={() => setSignState("Sign Up")}> Sign Up Now</span>
            </p>
          ):(
            <p>
              Already have an account?
              <span onClick={() => setSignState("Sign In")}> Sign In Now</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
export default Login;