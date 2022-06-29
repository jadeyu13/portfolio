import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

function Homepage() {
  return (
    <>
      <section className="homepage">
       <div className="overlay">

      
        <h1> Jade Yu</h1>
      <p>Front-end Web Developer</p>
        <ul>
          <li>
            <a href="https://github.com/jadeyu13">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jade-y-a1b312217/">
              <BsLinkedin />
            </a>
          </li>
        </ul>
       </div>
      </section>
    </>
  );
}

export default Homepage;
