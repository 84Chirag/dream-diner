import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import chopping from "../../assets/audio/chopping.mp3";
import femalescream from "../../assets/audio/femalescream.mp3";

const ThirdStep = () => {
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
        const audio = new Audio(chopping);
        audio.play();
    };

    const handleDied2 = () => {
        setShowOptions(false);
        setShowDiedResponse(false);
        setShowDiedResponse2(true);
        localStorage.setItem('player','dead');
        const audio = new Audio(femalescream);
        audio.play();
    };

    const handleSurvive = () => {
        setShowOptions(false);
        setShowSurviveResponse(true);
        localStorage.setItem('progress', 10);
        setTimeout(() => {
            // navigate('/thirdstep');
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
            <h3 className='secondtagline'>As you are looking at the menu, a girl from table behind you, stands up and walk towards you. </h3>
            <h1>You see her eyes are normal, she hands you a note ...</h1>
            {showOptions && (
                <div className="options">
                    <button className="btn survivedbtn" onClick={handleSurvive}>
                        Take the note and hide it
                    </button>
                    <button className="btn diedbtn" onClick={handleDied}>
                        Take the note and ask her how to escape
                    </button>
                    <button className="btn diedbtn" onClick={handleDied2}>
                        Take the note and read it
                    </button>
                </div>
            )}
            {showSurviveResponse && (
                <p className='surviveres'>You Survived. For now ...</p>
            )}
            {showDiedResponse && (
                <div>
                    <p className='diedres'>You Died. They heard you. they know now you don't belong here and cut off all limbs and hung them up with meat hookers</p>
                    <a href='/' className='btn btn-restart'>Restart</a>
                </div>
            )}
            {showDiedResponse2 && (
                <div>
                    <p className='diedres'>You Died. The girl starts screaming, then waiter ties you both together and shoves you in the oven to cook both alive .</p>
                    <a href='/' className='btn btn-restart'>Restart</a>
                </div>
            )}
        </div>
    );
}

export default ThirdStep