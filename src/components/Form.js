import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import axios from "axios";
import LoadingSpinner from "./Loading";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true });
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    axios({
      method: "POST",
      url:
        "https://us-central1-hunterlbenjamin-55bab.cloudfunctions.net/submit",
      data: {
        name: name,
        email: email,
        message: message,
      },
    }).then((response) => {
      if (response.data.msg === "success") {
        alert("Message Sent.");
        this.resetForm();
        this.setState({
          loading: false,
        });
      } else if (response.data.msg === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    document.getElementById("contact-form").reset();
  }

  render() {
    const { loading } = this.state;
    return (
      <form
        id="contact-form"
        onSubmit={this.handleSubmit.bind(this)}
        method="POST"
      >
        <Fade bottom delay={600}>
          <div className="form-group">
            <input id="name" type="text" placeholder="Name" />
          </div>
        </Fade>
        <Fade bottom delay={800}>
          <div className="form-group">
            <input id="email" type="email" placeholder="Email" />
          </div>
        </Fade>
        <Fade bottom delay={1000}>
          <div className="form-group">
            <textarea id="message" rows="4" placeholder="Message" />
          </div>
        </Fade>
        <Fade bottom delay={1200}>
          <button className="submit-button" type="submit">
            {loading ? <LoadingSpinner /> : "Submit"}
          </button>
        </Fade>
      </form>
    );
  }
}

export default Form;
