import React from 'react';
import './About.css';
import myPicture from "../../resources/my-picture.jpg"

const About = () => {
  return (
    <div className="about">
      <h1>&gt; whoami<span className="blink">_</span></h1>
      <h1 className="oranje">Who am I?</h1>
      <div className="newspaper">
        <div className="my-picture">
          <img src={myPicture} alt="Myself working" />
        </div>
        <p>My name is José Ventaja, I’m a software engineer from Brazil focused on solving complex problems with practical tech solutions. I've already worked with languages like Clojure, Elixir, C# and Python across projects in finance and e-commerce, adapting to different frameworks and tools as needed.</p>
        <p>Currently at Nubank, I build high-performance financial solutions using microservices and event-driven architecture. Before this, I was at a renewable energy platform, where I developed reliable backend systems for various applications. I also have experience in fintech, working on payment systems for real-time transactions.</p>
        <p>I’m committed to continuous learning and connecting with diverse teams. My goal is to create impactful solutions and push the boundaries of what technology can do to assist people.</p>
      </div>
    </div>
  );
};

export default About;
