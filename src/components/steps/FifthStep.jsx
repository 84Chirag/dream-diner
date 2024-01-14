import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FifthStep = () => {
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
        localStorage.setItem('progress',25);
        setTimeout(() => {
            navigate('/sixthstep');
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
    <div className='allsteps secondstep fifthstep'>
            <h3 className='secondtagline'>The waiter's back is turned as he is watching other table,</h3>
            <h3>The girl get's up and start to walk toward kitchen.</h3>
            <h1>What will you do?</h1>
            {showOptions && (
                <div className="options">
                    <button className="btn survivedbtn" onClick={handleSurvive}>
                        Follow the girl into the kitchen.
                    </button>
                    <button className="btn diedbtn" onClick={handleDied}>
                        Stay in your seat.
                    </button>
                    <button className="btn diedbtn" onClick={handleDied2}>
                        Try to ask how she knows the escape is in the kitchen in low voice.
                    </button>
                </div>
            )}
            {showSurviveResponse && (
                <p className='surviveres'>Congrats, you made it into the kitchen. Now you must be even more careful ...</p>
            )}
            {showDiedResponse2 && (
                <div>
                    <p className='diedres'>The girl came back to get you. This caught the attention of the waiter, who graps you bite your head off.</p>
                    <a href='/' className='btn btn-restart'>Restart</a>
                </div>
            )}
            {showDiedResponse && (
                <div>
                    <p className='diedres diedres2'>The other people sitting in the Diner all comes and surrounds your table and they squeeze your eyeballs out until they are black empty holes just like theirs.</p>
                    <a href='/' className='btn btn-restart'>Restart</a>
                </div>
            )}
        </div>
  )
}

export default FifthStep