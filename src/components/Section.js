import React from 'react';
import './Section.css';
import { Button } from './Button';

function Section() {
    return (
        <div className="section-container">
            <video src="videos/video.mp4" autoPlay loop muted/>
            <h1>ADVENTURE WAITS</h1>
            <p>What are you waiting for</p>
            <div className="section-btn">
            <Button
               className='btns'
               buttonStyle='btn--outline'
               buttonSize='btn--large'
                   >
               GET STARTED
            </Button>

            <Button
               className='btns'
               buttonStyle='btn--primary'
               buttonSize='btn--large'
                   >
               WATCH TRILER <i className="far fa-play-circle"/>
            </Button>
            </div>
        </div>
    )
}

export default Section;


