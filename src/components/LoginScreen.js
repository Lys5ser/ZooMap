import React from 'react';
import '../styles/LoginScreen.css';
import LogoCard from './LogoCard';
import LoginCard from './LoginCard';

const LoginScreen = () => {
  return (
    <div className="desktop-container">
      <div className="background-container">
        <div className="gradient-bg"></div>
        <div className="wildlife-overlay"></div>
      </div>
      <div className="content-wrapper">
        <LogoCard />
        <LoginCard />
      </div>
    </div>
  );
};

export default LoginScreen;
