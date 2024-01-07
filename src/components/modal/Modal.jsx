import React from 'react'
import './modal.css'
import bgaudio from "../../assets/audio/bgaudio.mp3";
import { useNavigate } from 'react-router-dom';

const Modal = () => {
    const navigate = useNavigate();
    const audio = new Audio(bgaudio);
    const playAudio = () => {
        audio.loop = true;
        audio.play();
    };
    const start = () => {
        navigate('/firststep');
    }
    const pauseAudio = () => {
        audio.pause();
    }

    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" onClick={playAudio} className="btn btn-play" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Play
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Rules</h1>
                            <button type="button"onClick={pauseAudio} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ul>
                                <li>Don't drink water there is something inside that you can't see</li>
                                <li>Don't order off the menu</li>
                                <li>Don't get caught in kitchen, if you see what they are really cooking, they will kill you</li>
                                <li>If they hear you speak they will know you don't belong here</li>
                                <li>Find a way to escape ( wake up ) </li>
                            </ul>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={start} className="btn btn-secondary btnstart" data-bs-dismiss="modal">Start</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal