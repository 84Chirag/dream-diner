import React, { useState, useEffect } from 'react';
import './allSteps.css';
import { Link, useNavigate } from 'react-router-dom';

const FirstStep = () => {
    const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(true);
  const [showDiedResponse, setShowDiedResponse] = useState(false);
  const [showSurviveResponse, setShowSurviveResponse] = useState(false);

  const handleDied = () => {
    setShowOptions(false);
    setShowDiedResponse(true);
    localStorage.setItem('player','dead');
  };

  const handleSurvive = () => {
    setShowOptions(false);
    setShowSurviveResponse(true);
    localStorage.setItem('progress',10);
    setTimeout(() => {
        navigate('/secondstep');
    }, 3000);
  };

  
  useEffect(() => {
    const player = localStorage.getItem('player');
        const onload = () => {
          if (player == 'dead') {
                navigate('/');
                window.location.reload;
          }
          localStorage.removeItem('player');
        };
        window.addEventListener('load', onload);
      
        return () => {
          window.removeEventListener('load', onload);
        };
      }, [navigate]);

  return (
    <div className='allsteps firststep'>
      <h1>Choose One</h1>
      <h3>It's nighttime, you're driving, but it's snowing heavily. You see a diner with lights on...</h3>
      {showOptions && (
        <div className="options">
          <button className="btn diedbtn" onClick={handleDied}>
            Keep Driving
          </button>
          <button className="btn survivedbtn" onClick={handleSurvive}>
            Go to the Diner
          </button>
        </div>
      )}
      {showDiedResponse && (
        <div>
        <p className='diedres'>You Died. Your car broke down, and you froze to death in the snow.</p>
        <a href='/' className='btn btn-restart'>Restart</a>
        </div>
      )}
      {showSurviveResponse && (
        <p className='surviveres'>You Survived. You leave your car and enter the Diner...</p>
      )}
    </div>
  );
};

export default FirstStep;