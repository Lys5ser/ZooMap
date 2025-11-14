import React, { useState } from 'react';

const LoginCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
    alert(`Login attempt with:\nEmail: ${email}\nRemember Me: ${rememberMe}`);
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
    alert('Google authentication would open here');
  };

  const handleFacebookLogin = () => {
    console.log('Facebook login clicked');
    alert('Facebook authentication would open here');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    console.log('Forgot password clicked');
    alert('Forgot Password feature would navigate here');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Sign up clicked');
    alert('Sign Up feature would navigate here');
  };

  return (
    <div className="login-card">
      <div className="login-header">
        <h2>Login</h2>
        <p className="signup-link">
          Don't have an account?{' '}
          <a href="#signup" onClick={handleSignUp}>
            Sign Up
          </a>
        </p>
      </div>

      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <div className="input-wrapper">
            <i className="fas fa-envelope input-icon"></i>
            <input
              type="email"
              placeholder="Email address"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-wrapper">
            <i className="fas fa-lock input-icon"></i>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="input-field password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i
              className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} input-icon-right toggle-password`}
              onClick={() => setShowPassword(!showPassword)}
              role="button"
              tabIndex="0"
            ></i>
          </div>
        </div>

        <div className="remember-forgot">
          <label className="checkbox-container">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className="checkmark"></span>
            <span className="label-text">Remember me</span>
          </label>
          <a href="#forgot" className="forgot-link" onClick={handleForgotPassword}>
            Forgot Password?
          </a>
        </div>

        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>

      <div className="divider">
        <span>Or</span>
      </div>

      <div className="social-buttons">
        <button
          type="button"
          className="btn btn-social btn-google"
          onClick={handleGoogleLogin}
        >
          <i className="fab fa-google"></i>
          <span>Continue with Google</span>
        </button>
        <button
          type="button"
          className="btn btn-social btn-facebook"
          onClick={handleFacebookLogin}
        >
          <i className="fab fa-facebook-f"></i>
          <span>Continue with Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default LoginCard;
