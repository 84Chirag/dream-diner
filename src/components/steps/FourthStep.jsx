import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FourthStep = () => {
    
    const navigate = useNavigate();
    const [showOptions, setShowOptions] = useState(true);
    const [showDiedResponse, setShowDiedResponse] = useState(false);
    const [showSurviveResponse2, setShowSurviveResponse2] = useState(false);
    const [showSurviveResponse, setShowSurviveResponse] = useState(false);

    const handleDied = () => {
        setShowOptions(false);
        setShowDiedResponse(true);
        localStorage.setItem('player','dead');
    };

    const handleSurvive2 = () => {
        setShowOptions(false);
        setShowSurviveResponse2(true);
        localStorage.setItem('progress',40);
        setTimeout(() => {
            navigate('/fifthstep');
        }, 3000);
    };

    const handleSurvive = () => {
        setShowOptions(false);
        setShowSurviveResponse(true);
        localStorage.setItem('progress',20);
        setTimeout(() => {
            navigate('/fifthstep');
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
    <div className='allsteps secondstep fourthstep'>
            <h3 className='secondtagline'>The note says "Front door is a trap. Escape is in the kitchen". You sit with the girl at your table,</h3>
            <h1>And the waiter puts plate of food in front of you ...</h1>
            {showOptions && (
                <div className="options">
                    <button className="btn survivedbtn" onClick={handleSurvive2}>
                        Eat the food.
                    </button>
                    <button className="btn diedbtn" onClick={handleSurvive}>
                        Smile and keep the food on your table but don't eat it.
                    </button>
                    <button className="btn survivedbtn" onClick={handleDied}>
                        Say you didn't order the food yet.
                    </button>
                </div>
            )}
            {showSurviveResponse2 && (
                <p className='surviveres'>As you're eating you find a human eyeball on the food, but you survive ...</p>
            )}
            {showSurviveResponse && (
                <p className='surviveres'>The waiter is getting suspicious, but you Survived for now ...</p>
            )}
            {showDiedResponse && (
                <div>
                    <p className='diedres'>Waiter know you don't belong here, he smashes your face into the the food then cuts your head off with a piece of boken plate.</p>
                    <a href='/' className='btn btn-restart'>Restart</a>
                </div>
            )}
        </div>
  )
}

export default FourthStep