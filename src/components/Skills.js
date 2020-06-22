import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Charts from "./Charts";
import Circle from "./Circle";
import Typist from "react-typist";


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
              <p className="grey">
              <Typist>
                <Typist.Delay ms={3500} />
                  <pre className="inline grey">{`<--! `}</pre>Additional skills include Adobe Photoshop, Adobe Illustrator, teamwork and communication.<pre className="inline grey">{` -->`}</pre>
              </Typist>
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
