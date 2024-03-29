import React, { useState, useEffect } from 'react'
import bgaudio from "../assets/audio/bgaudio.mp3";
import { Link, useNavigate } from 'react-router-dom';
import Modal from './modal/Modal';

const HomePage = () => {
  const [ showContinue , setShowContinue] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const savedProgress = localStorage.getItem('progress');
    if (savedProgress > 0) {
      setShowContinue(true);
    } else {
      setShowContinue(false);
    }
  }, []);
  
  const savedGame = () => {
    const audio = new Audio(bgaudio);
        audio.loop = true;
        audio.play();
    const savedProgress = localStorage.getItem('progress');
    if (savedProgress == 5) {
      navigate('/secondstep')
    } else if (savedProgress == 10) {
      navigate('/thirdstep')
    } else if (savedProgress == 15) {
      navigate('/fourthstep');
    }else if (savedProgress == 20) {
      navigate('/fifthstep');
    }else if (savedProgress == 25) {
      navigate('/sixthstep');
    }else if (savedProgress == 30) {
      navigate('/seventhstep');
    }else if (savedProgress == 35) {
      navigate('/eighthstep');
    }else if (savedProgress == 40) {
      navigate('/ninthstep');
    }

  }

  return (
    <div>
    {/* <audio src={bgaudio} autoPlay loop></audio> */}
    <span className='maintitle' >Welcome to Dream Diner</span>
    <div className='btn-box'>
    {/* <Link to='/' className="btn btn-play">Play</Link> */}
    <Modal />
    {showContinue && <button onClick={savedGame} className="btn btn-continue">Continue</button>}
    
    </div>
    </div>
  )
}

export default HomePage