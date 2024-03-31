import React from "react";
import flag from '../assets/Flag_of_Singapore.svg'
import './Home.css'

const Home = () => {
  return (
    <>
      <h1>Hi! My name is Stefano Kusuma Ali</h1>
      <div class="align-vert">
        <span>I am based in </span>
        <img src={flag} className="flag" />
      </div>
      <br />
      <a href="https://www.linkedin.com/in/stefanokusumaali/">
        Click here to see my Linkedin!
      </a>
      <h2>My hobbies</h2>
      <div>
        <div>Walk in nature</div>
        <div>Exercise</div>
        <div>Travelling</div>
      </div>
      <h2>About me</h2>
      <p>
        I am a structural engineer with interest in programming. <br />
        In my day job I creates in-house program using C# and Phyton. <br />
        During my free time I coded free software for strucutral engineers.{" "}
        <br />
      </p>
    </>
  );
};

export default Home;
