import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import axios from 'axios';


class Form extends Component {

    handleSubmit(e){
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      axios({
          method: "POST", 
          url:"http://localhost:3002/send", 
          data: {
              name: name,   
              email: email,  
              message: message,
          }
      }).then((response)=>{
          if (response.data.msg === 'success'){
              alert("Message Sent."); 
              this.resetForm()
          }else if(response.data.msg === 'fail'){
              alert("Message failed to send.")
          }
      })
  }

  resetForm(){
      document.getElementById('contact-form').reset();
  }

  render() {
    return (
      <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
        <Fade bottom delay={600}>
          <div>
            <input id="name" type="text" placeholder="Name" />
          </div>
        </Fade>
        <Fade bottom delay={800}>
          <div>
            <input id="email" type="email" placeholder="Email" />
          </div>
        </Fade>
        <Fade bottom delay={1000}>
          <div>
            <textarea id="message" rows="4" placeholder="Message" />
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
