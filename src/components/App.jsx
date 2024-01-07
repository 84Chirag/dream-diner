import { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import restaraunt1 from '../assets/restaraunt1.jpg';
import restaraunt2 from '../assets/restaraunt2.jpg';
import './App.css'
import HomePage from './HomePage';
import Page404 from './404/Page404';
import FirstStep from './steps/FirstStep'
import SecondStep from './steps/SecondStep';
import ThirdStep from './steps/ThirdStep'

function App() {
  const images = [
    restaraunt1,
    restaraunt2
  ];
  
  let currentImageIndex = 0;
  
  function changeBackground() {
    document.body.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }
  
  setInterval(changeBackground, 5000);

  const [savedProgress, setSavedProgress] = useState(localStorage.getItem('progress'));

  useEffect(() => {
    // If savedProgress is null or 0, keep trying until it's not
    if (savedProgress == null || savedProgress === 0) {
      const intervalId = setInterval(() => {
        const progress = localStorage.getItem('progress');
        if (progress !== null && progress !== 0) {
          setSavedProgress(progress);
          clearInterval(intervalId);
        }
      }, 1000); // You can adjust the interval duration
    }
  }, [savedProgress]);
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/firststep' element={<FirstStep />} />
        {savedProgress >= 5 ? (<Route path='/secondstep' element={<SecondStep />} />): (<Route path='*' element={<Page404 />} />)}
        {savedProgress >= 10 ? (<Route path='/thirdstep' element={<ThirdStep />} />): (<Route path='*' element={<Page404 />} />)}
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
    </>

  )
}

export default App
