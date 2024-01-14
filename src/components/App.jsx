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
import ThirdStep from './steps/ThirdStep';
import FourthStep from './steps/FourthStep';
import FifthStep from './steps/FifthStep';
import SixthStep from './steps/SixthStep';
import SeventhStep from './steps/SeventhStep';
import EighthStep from './steps/EighthStep';
import NinthStep from './steps/NinthStep.jsx';
import ThankYou from './steps/ThankYou.jsx';


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
    const checkProgress = () => {
      const progress = localStorage.getItem('progress');

      if (progress !== null && progress !== savedProgress) {
        setSavedProgress(progress);
      }

      if (progress !== '40') {
        setTimeout(checkProgress, 1000); // You can adjust the timeout duration
      }
    };

    checkProgress();
  }, [savedProgress]);


  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/firststep' element={<FirstStep />} />
        {savedProgress >= 5 ? (<Route path='/secondstep' element={<SecondStep />} />): (<Route path='*' element={<Page404 />} />)}
        {savedProgress >= 10 ? (<Route path='/thirdstep' element={<ThirdStep />} />): (<Route path='*' element={<Page404 />} />)}
        {savedProgress >= 15 ? (<Route path='/fourthstep' element={<FourthStep />} />): (<Route path='*' element={<Page404 />} />)}
        {savedProgress >= 20 ? (<Route path='/fifthstep' element={<FifthStep />} />): (<Route path='*' element={<Page404 />} />)}
        {savedProgress >= 25 ? (<Route path='/sixthstep' element={<SixthStep />} />): (<Route path='*' element={<Page404 />} />)}
        {savedProgress >= 30 ? (<Route path='/seventhstep' element={<SeventhStep />} />): (<Route path='*' element={<Page404 />} />)}
        {savedProgress >= 35 ? (<Route path='/eighthstep' element={<EighthStep />} />): (<Route path='*' element={<Page404 />} />)}
        {savedProgress >= 40 ? (<Route path='/ninthstep' element={<NinthStep />} />): (<Route path='*' element={<Page404 />} />)}
        {savedProgress >= 40 ? (<Route path='/ending' element={<ThankYou />} />): (<Route path='*' element={<Page404 />} />)}
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Router>
    </>

  )
}

export default App
