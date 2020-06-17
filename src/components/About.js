import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="section" id="about">
        <div className="open-tag">
          <Fade bottom duration={600}>
            <pre>
              <span className="code ml-1">{`<div id="about">`}</span>
            </pre>
          </Fade>
        </div>
        <div className="middle-content">
          <Fade bottom delay={200}>
            <pre>
              <span className="code ml-2">{`<h1>`}</span>
            </pre>
          </Fade>
          <h1 className="ml-2 color">About Me.</h1>
          <Fade bottom delay={400}>
            <pre>
              <span className="inline code ml-2">{`</h1>`}</span>
            </pre>
          </Fade>
          <Fade bottom delay={600}>
            <pre>
              <span className="code ml-2">{`<p>`}</span>
            </pre>
          </Fade>
          <p id="about-text" className="ml-4">
            I am a 27 year old developer born and raised in Los Angeles. I love
            traveling, photography, fitness, nutition and programming.
            <br></br>
            <br></br> Between coding, researching, working out and eating
            healthy, I spend nearly all day everyday working to become better
            than I was the day before.<br></br>
            <br></br>Some of my interestes in the tech field include but are not
            limited to; machine learning, data science, responsive design and
            advanced UI/UX.
          </p>
          <Fade bottom delay={800}>
            <pre>
              <span className="code ml-2">{`</p>`}</span>
            </pre>
          </Fade>
        </div>
        <div className="close-tag">
          <Fade bottom delay={1000}>
            <pre>
              <span className="code ml-1">{`</div>`}</span>
            </pre>
          </Fade>
        </div>
      </div>
    );
  }
}

export default About;
