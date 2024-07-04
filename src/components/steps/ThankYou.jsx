import React from 'react'
import './thanks.css'
import { FaInstagram } from "react-icons/fa";

const reset =()=>{
  localStorage.removeItem('progress');
}

const ThankYou = () => {
  return (
    <div className='allsteps'>
      <div className="appreciation">
        <h2>Thank you for playing till here!</h2>
        <h4>Please wait for Ending of as I've is still not completed</h4>
      </div>
      <div className="follow-us">
        <p><strong>Follow Me on  <br /><a href='https://www.instagram.com/mr.smarty_chirag/' target='_blank' rel="noopener noreferrer"> <FaInstagram size="25px" /></a></strong></p>
        <p>Story Credit goes to <b>itsheidiwong
        </b> <a href="https://www.instagram.com/itsheidiwong/" target='_blank' rel="noopener noreferrer" > <br />
            <FaInstagram size="30px" />
          </a></p>
          <p><a href='/' className='tohome' onClick={reset}>Home</a></p>
      </div>

    </div>
  )
}

export default ThankYou