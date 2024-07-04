import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SixthStep = () => {
    const navigate = useNavigate();
    const [showOptions, setShowOptions] = useState(true);
    const [showDiedResponse, setShowDiedResponse] = useState(false);
    const [showDiedResponse2, setShowDiedResponse2] = useState(false);
    const [showSurviveResponse, setShowSurviveResponse] = useState(false);

    const handleDied = () => {
        setShowOptions(false);
        setShowDiedResponse2(false)
        setShowDiedResponse(true);
        localStorage.setItem('player','dead');
    };

    const handleDied2 = () => {
        setShowOptions(false);
        setShowDiedResponse(false);
        setShowDiedResponse2(true);
        localStorage.setItem('player','dead');
    };

    const handleSurvive = () => {
        setShowOptions(false);
        setShowSurviveResponse(true);
        localStorage.setItem('progress',60);
        setTimeout(() => {
            navigate('/seventhstep');
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
    <div className='allsteps secondstep sixthstep'>
            <h3 className='secondtagline'>In the kitchen you see heads shoved into grinders to make burger patties.</h3>
            <h3>You hear footsteps of someone else comming.</h3>
            <h1>The waiter is entering the kitchen ...</h1>
            {showOptions && (
                <div className="options">
                    <button className="btn diedbtn" onClick={handleDied}>
                        Run out of the kitchen and pretend nothing happened.
                    </button>
                    <button className="btn survivedbtn" onClick={handleSurvive}>
                        Hide behind the fridge and be quiet.
                    </button>
                    <button className="btn diedbtn" onClick={handleDied2}>
                        Stay there and pretend you got lost.
                    </button>
                </div>
            )}
            {showSurviveResponse && (
                <p className='surviveres'>You survived and see there's a storage room that's unlocked ...</p>
            )}
            {showDiedResponse2 && (
                <div>
                    <p className='diedres'>Your body get ripped apart by people in Diner as you screams, you died.</p>
                    <a href='/' className='btn btn-restart'>Restart</a>
                </div>
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

export default SixthStep