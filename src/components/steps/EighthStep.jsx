import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EighthStep = () => {
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
        localStorage.setItem('progress',80);
        setTimeout(() => {
            navigate('/ninthstep');
        }, 5000);
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
    <div className='allsteps secondstep eighthstep'>
            <h3 className='secondtagline'>In the storage room you see rows of people hung upside down on meat hooks. Their jaws are unhinged and their faces are burned off.</h3>
            <h3>They are still alive. You realize someone is creating creatures like the waiter, and they used to be human</h3>
            <h1>You see a red door at the far end of the storage room, but suddenly you hear the scream of the girl from kitchen ...</h1>
            {showOptions && (
                <div className="options">
                    <button className="btn diedbtn" onClick={handleDied}>
                        Save the people on meat hook.
                    </button>
                    <button className="btn survivedbtn" onClick={handleSurvive}>
                        Go back to kitchen and save the girl.
                    </button>
                </div>
            )}
            {showSurviveResponse && (
                <p className='surviveres'>You are getting closer to waking up from your Dream ...</p>
            )}
            {showDiedResponse && (
                <div>
                    <p className='diedres diedres2'>The people on the meat hook have become mindless zombie, and they are trapped forever. As soon you have set them free they eat alive, you died.</p>
                    <a href='/' className='btn btn-restart'>Restart</a>
                </div>
            )}
    </div>
  )
}

export default EighthStep