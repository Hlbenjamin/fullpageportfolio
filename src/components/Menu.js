import React, { Component } from "react";

class Menu extends Component {
  state = {};
  render() {
    return (
      <div>
        <ul id="menu">
          <div className="nav-logo">
            <h1 className="logo-letters">
              HB
            </h1>
          </div>
          <div className="nav-items">
            <li data-menuanchor="firstPage">
              <a className="menu-links" href="#firstPage" new-data="HOME">
                <i className="fa fa-home"></i>
              </a>
            </li>
            <li data-menuanchor="secondPage">
              <a className="menu-links" href="#secondPage" new-data="ABOUT">
                <i className="fa fa-user"></i>
              </a>
            </li>
            <li data-menuanchor="3rdPage">
              <a className="menu-links" href="#3rdPage" new-data="SKILLS">
                <i className="fa fa-cog"></i>
              </a>
            </li>
            <li data-menuanchor="4thPage">
              <a className="menu-links" href="#4thPage" new-data="CONTACT">
                <i className="fa fa-envelope"></i>
              </a>
            </li>
          </div>
          <div id="social">
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
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
