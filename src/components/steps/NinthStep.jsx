import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NinthStep = () => {
    const navigate = useNavigate();
    const [showOptions, setShowOptions] = useState(true);
    const [showDiedResponse, setShowDiedResponse] = useState(false);
    const [showDiedResponse2, setShowDiedResponse2] = useState(false);
    const [showSurviveResponse, setShowSurviveResponse] = useState(false);

    const handleDied = () => {
        setShowOptions(false);
        setShowDiedResponse(true);
        localStorage.setItem('player','dead');
    };

    const handleDied2 = () => {
        setShowOptions(false);
        setShowDiedResponse2(true);
        localStorage.setItem('player','dead');
    };

    const handleSurvive = () => {
        setShowOptions(false);
        setShowSurviveResponse(true);
        localStorage.setItem('progress',40);
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
    <div className='allsteps secondstep ninthstep'>
            <h3 className='secondtagline'>You go back into the kitchen, and see an unnaturally tall demonic creature with glowing eyes and a large smile from ear to ear. Its skin is burnt and it has giant claws for hands.</h3>
            <h3>It's holding a meat cleaver to the girl's neck. he is the one who turns people trapped in the Diner and and couldn't wake up into creatures like the waiter.</h3>
            <h1>You have just met The Chef...</h1>
            {showOptions && (
                <div className="options">
                    <button className="btn diedbtn" onClick={handleDied}>
                        Pick a kitchen knife and get ready to fight.
                    </button>
                    <button className="btn diedbtn" onClick={handleDied2}>
                        Ask the chief if you can have something to eat.
                    </button>
                    <button className="btn survivedbtn" onClick={handleSurvive}>
                        Leave the girl and run back to storage room.
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
            {showDiedResponse2 && (
                <div>
                    <p className='diedres diedres2'>The people on the meat hook have become mindless zombie, and they are trapped forever. As soon you have set them free they eat alive, you died.</p>
                    <a href='/' className='btn btn-restart'>Restart</a>
                </div>
            )}
    </div>
  )
}

export default NinthStep