import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";


export default function Home() {
  return (
    <div className="home-page">
      <video id="background_video" className='background_video' autoPlay loop muted >
        <source src='/videos/background.mp4' type='video/mp4' />
      </video>
      <h1>VISIONS</h1>
      <p>An online shop for professional photos</p>
      <div className="home-page-btn">
        <Link to="/shop">
          <button>
            Enter shop
          </button>
        </Link>
      </div>
    </div>
  );
}
