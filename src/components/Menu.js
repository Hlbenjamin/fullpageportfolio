import React, { Component } from "react";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul id="menu">
          <div className="nav-logo">
            <h1 id="logo-letters">HB</h1>
          </div>
          <div className="nav-items">
            <li data-menuanchor="Home">
              <a className="menu-links" href="#Home" new-data="HOME">
                <i className="fa fa-home"></i>
              </a>
            </li>
            <li data-menuanchor="About">
              <a className="menu-links" href="#About" new-data="ABOUT">
                <i className="fa fa-user"></i>
              </a>
            </li>
            <li data-menuanchor="Skills">
              <a className="menu-links" href="#Skills" new-data="SKILLS">
                <i className="fa fa-cog"></i>
              </a>
            </li>
            <li data-menuanchor="Contact">
              <a className="menu-links" href="#Contact" new-data="CONTACT">
                <i className="fa fa-envelope"></i>
              </a>
            </li>
          </div>
          <div id="social">
            <li>
              <a href="https://github.com/Hlbenjamin" target="_blank">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hunterlbenjamin/"
                target="_blank"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="www.linkedin.com/in/hunterlbenjamin" target="_blank">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
          </div>
        </ul>
      </div>
    );
  }
}

export default Menu;
