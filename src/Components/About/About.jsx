import React from 'react'
import './About.css'
import dpp from '../../assets/dp picter.jpg';

const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <img src={logo} alt="" height={40} /> */}
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={dpp} alt="" height={400} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am an experienced frontend developer from Jaipur Rajasthan
            </p>
            <p>
              in building responsive and user-friendly web applications. I have
              a strong foundation in HTML, CSS, and JavaScript, and I am
              proficient in modern frameworks like React-js and Express-js.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>
                HTML&CSS </p><hr style={{ width: "50%" }} />
        
            </div>
            <div className="about-skill">
              <p>
                {" "}
                React js</p> <hr style={{ width: "70%" }} />
            
            </div>
            <div className="about-skill">
              <p> JavaScript</p><hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>
                Next js</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p> YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>10+</h1>
          <p> PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p> HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
}

export default About