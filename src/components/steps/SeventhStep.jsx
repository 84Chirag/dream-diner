import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SeventhStep = () => {
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
        localStorage.setItem('progress',35);
        setTimeout(() => {
            navigate('/eighthstep');
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
    <div className='allsteps secondstep seventhstep'>
            <h3 className='secondtagline'>The waiter leaves the kitchen. Now that you and the girl are alone, she says</h3>
            <h3>"Go search the storage room. I'll keep looking for the escape."</h3>
            <h1>Her voice sounds normal ...</h1>
            {showOptions && (
                <div className="options">
                    <button className="btn diedbtn" onClick={handleDied}>
                        Ask her to come with you.
                    </button>
                    <button className="btn survivedbtn" onClick={handleSurvive}>
                        Go into the storage room alone.
                    </button>
                </div>
            )}
            {showSurviveResponse && (
                <p className='surviveres'>You survived, but now you're very close to learn the secret of Dream Diner's ...</p>
            )}
            {showDiedResponse && (
                <div>
                    <p className='diedres'>The waiter caught you and cut your brains out to make pasta sauce, you died.</p>
                    <a href='/' className='btn btn-restart'>Restart</a>
                </div>
            )}
    </div>
  )
}

export default SeventhStep