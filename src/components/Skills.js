import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Circle from "./Circle";

class Skills extends Component {
  state = {};
  render() {
    return (
      <div className="section" id="skills">
        <div className="open-tag">
          <Fade bottom>
            <pre>
              <span className="code ml-1">{`<div id="skills">`}</span>
            </pre>
          </Fade>
        </div>
        <div className="middle-content">
          <Fade bottom delay={200}>
            <pre>
              <span className="code ml-2">{`<h1>`}</span>
            </pre>
          </Fade>
          <h1 className="ml-2 color">My Skills.</h1>
          <Fade bottom delay={400}>
            <pre>
              <span className="code ml-2">{`</h1>`}</span>
            </pre>
          </Fade>
          <Fade bottom delay={600}>
            <pre>
              <span className="code ml-2">{`<div id="charts">`}</span>
            </pre>
          </Fade>
          <div id="charts">
            <Circle />
            <div id="skill-comment">
              <p>
                Additional skills include Git, Command Line, jQuery, Bootstrap,
                Adobe Photoshop and Illustrator.
              </p>
            </div>
          </div>
          <Fade bottom delay={1000}>
            <pre>
              <span className="code ml-2">{`</div>`}</span>
            </pre>
          </Fade>
        </div>
        <div className="close-tag">
          <Fade bottom delay={1400}>
            <pre>
              <span className="code ml-1">{`</div>`}</span>
            </pre>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Skills;
