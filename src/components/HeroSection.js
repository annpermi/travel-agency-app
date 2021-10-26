import React from "react";
import { Button } from "./Button";
import "../App.css";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <div id="overlay"></div>
      <video
        src="/videos/rus_mountains.mp4"
        autoPlay
        loop
        muted
        poster="../images/img-home.jpg"
      />
      <h1>WE LOVE TRAVEL</h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Заказать тур
        </Button>
        {/* <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Популярные направления 
                <i className="fas fa-plane"></i></Button> */}
      </div>
    </div>
  );
}

export default HeroSection;
