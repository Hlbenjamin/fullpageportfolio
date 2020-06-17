import React, { Component } from "react";
import Fade from "react-reveal/Fade";

class Form extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  render() {
    return (
      <form id="contact-form">
        <Fade bottom delay={600}>
          <div>
            <input type="text" placeholder="Name" />
          </div>
        </Fade>
        <Fade bottom delay={800}>
          <div>
            <input type="email" placeholder="Email" />
          </div>
        </Fade>
        <Fade bottom delay={1000}>
          <div>
            <textarea rows="4" placeholder="Message" />
          </div>
        </Fade>
        <Fade bottom delay={1200}>
          <button className="submit-button" type="submit">
            Submit
          </button>
        </Fade>
      </form>
    );
  }
}

export default Form;
