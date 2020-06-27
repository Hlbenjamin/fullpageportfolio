import React, { Component } from "react";
import "react-typist/dist/Typist.css";
import Typist from "react-typist";
import Fade from "react-reveal/Fade";


class Home extends Component {
  state = {};
  render() {
    return (
      <div className="section" id="home">
        <div className="open-tag">
          <Fade bottom duration={600}>
            <pre>
              <span className="code ml-0">{`<body>`}</span>
            </pre>
          </Fade>
          <Fade bottom delay={200}>
            <pre>
              <span className="code ml-1">{`<div id="home">`}</span>
            </pre>
          </Fade>
        </div>
        <div className="middle-content">
          <Fade bottom delay={400}>
            <pre>
              <span className="code ml-2">{`<h1>`}</span>
            </pre>
          </Fade>
          <h1 className="ml-2">
            Hi, <br></br>I'm Hunter, <br></br>a web developer.
          </h1>
          <Typist>
            <span className="ml-2">
              <Typist.Delay ms={2000} />
            </span>
            <span className="grey">Entry Level Full Stack Deverloper</span>
            <Typist.Backspace count={6} delay={900} />
            <Typist.Delay ms={600} />
            <span className="grey">loper</span>
          </Typist>
          <Fade bottom delay={600}>
            <pre>
              <span className="code ml-2">{`</h1>`}</span>
            </pre>
          </Fade>
          <Fade bottom delay={800}>
            <pre>
              <span className="code ml-2">{`<a href="contact">`}</span>
            </pre>
          </Fade>
          <a href="#4thPage" className="contact-button ml-2">
            Contact Me
          </a>
          <Fade bottom delay={1000}>
            <pre>
              <span className="code ml-2">{`</a>`}</span>
            </pre>
          </Fade>
        </div>
        <div className="close-tag">
          <Fade bottom delay={1200}>
            <pre>
              <span className="code ml-1">{`</div>`}</span>
            </pre>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Home;
