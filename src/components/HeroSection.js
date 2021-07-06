import React from 'react';
import { Button } from './Button';
import '../App.css';
import './HeroSection.css'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/video-1.mp4" autoPlay loop muted poster="../images/img-home.jpg"/>
            <h1>ADVENTURE AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
                <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch Trailer
                <i className='fa fa-play-circle'></i></Button>
            </div>
        </div>
    )
}

export default HeroSection;
