import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SecondStep = () => {
    const navigate = useNavigate();
    const [showOptions, setShowOptions] = useState(true);
    const [showDiedResponse, setShowDiedResponse] = useState(false);
    const [showDiedResponse2, setShowDiedResponse2] = useState(false);
    const [showSurviveResponse, setShowSurviveResponse] = useState(false);

    const handleDied = () => {
        setShowOptions(false);
        setShowDiedResponse2(false);
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
        localStorage.setItem('progress', 10);
        setTimeout(() => {
            navigate('/thirdstep');
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
        <div className='allsteps secondstep'>
            <h3 className='secondtagline'>A waiter takes you to your table, but he has no face and only giant mouth full of sharp teeth. </h3>
            <h3>Everyone else sitting in diner has strange bleack eyes. They all turn to look at you !</h3>
            <h1>The waiter puts a jug of water on your table, what will you do?</h1>
            {showOptions && (
                <div className="options">
                    <button className="btn diedbtn" onClick={handleDied}>
                        Take a seep of water to be polite
                    </button>
                    <button className="btn survivedbtn" onClick={handleSurvive}>
                        Smile and look at the menu
                    </button>
                    <button className="btn diedbtn" onClick={handleDied2}>
                        Ask the waiter why he has no face
                    </button>
                </div>
            )}
            {showDiedResponse && (
                <div>
                    <p className='diedres'>You Died. The bug inside the water ate your throat.</p>
                    <a href='/' className='btn btn-restart'>Restart</a>
                </div>
            )}
            {showSurviveResponse && (
                <p className='surviveres'>You Survived. For now ...</p>
            )}
            {showDiedResponse2 && (
                <div>
                    <p className='diedres'>The waiter dragged you into the kitchen and boiled you alive.</p>
                    <a href='/' className='btn btn-restart'>Restart</a>
                </div>
            )}
        </div>
    );
}

export default SecondStep