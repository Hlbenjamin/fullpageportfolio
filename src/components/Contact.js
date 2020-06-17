import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Form from "./Form";

class Contact extends Component {
  state = {};
  render() {
    return (
      <div className="section" id="contact">
        <div className="open-tag">
          <Fade bottom>
            <pre>
              <span className="code ml-1">{`<div id="contact">`}</span>
            </pre>
          </Fade>
        </div>
        <div className="middle-section">
          <Fade bottom delay={200}>
            <pre>
              <span className="code ml-2">{`<h1>`}</span>
            </pre>
          </Fade>
          <h1 className="ml-2 color">Let's talk.</h1>
          <Fade bottom delay={400}>
            <pre>
              <span className="code ml-2">{`</h1>`}</span>
            </pre>
            <pre>
              <span className="code ml-2">{`<form>`}</span>
            </pre>
          </Fade>
          <Form />
          <Fade bottom delay={1400}>
            <pre>
              <span className="code ml-2">{`</form>`}</span>
            </pre>
          </Fade>
        </div>
        <div className="close-tag">
          <Fade bottom delay={1600}>
            <pre>
              <span className="code ml-1">{`</div>`}</span>
            </pre>
          </Fade>
          <Fade bottom delay={1800}>
            <pre>
              <span className="code">{`</body>`}</span>
            </pre>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Contact;
