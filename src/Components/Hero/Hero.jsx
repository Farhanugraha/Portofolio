import React from "react";
import "./Hero.css";
import profile_image from "../../assets/heroPhoto.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile_image} alt="" />
      <h1>
        I'm <span>Farhan Nugraha</span>, Software Engineer 💻
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum illo
        sapiente vero. Ad impedit exercitationem, laudantium iure assumenda,
        recusandae totam culpa, cupiditate eum explicabo eaque architecto
        expedita obcaecati quaerat quos.
      </p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
