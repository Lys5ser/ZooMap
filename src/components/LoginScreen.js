import React from 'react';
import '../styles/LoginScreen.css';
import StatusBar from './StatusBar';
import LogoCard from './LogoCard';
import LoginCard from './LoginCard';
import HomeIndicator from './HomeIndicator';

const LoginScreen = () => {
  return (
    <div className="mobile-container">
      <StatusBar />
      <div className="app-content">
        <div className="background-container">
          <div className="gradient-bg"></div>
          <div className="wildlife-overlay"></div>
        </div>
        <LogoCard />
        <LoginCard />
      </div>
      <HomeIndicator />
    </div>
  );
};

export default LoginScreen;
