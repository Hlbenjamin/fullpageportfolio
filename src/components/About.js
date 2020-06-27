import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class About extends Component {
  state = {};
  render() {
    return (
      <div className="section fp-auto-height-responsive" id="about">
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
            My name is Hunter Benjamin. I am 27 years old and I have spent the
            last 7 years working in the film and televsion industry.
            <br></br>
            <br></br>
            For 6 months prior to the Covid-19 pandemic I lived in Indonesia
            working on my photography and surfing. Upon coming home I began
            learning Python and immediately fell in love with programming.
            <br></br>
            <br></br>
            I’ve spent the last 4 months taking Codecademy courses on Computer
            Science, Python, Javascript, HTML, CSS as well as a fair amount of
            independent studying. I am now looking for work as a developer where
            I can be challenged and continue building my programming skills.
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
