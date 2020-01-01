import React, { Component } from "react";

class Nav extends Component {
  state = {
    collapsed: false
  };

  toggleBurger = () => {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  };

  render() {
    const burgerClass = this.state.collapsed ? "active-burger" : "";

    return (
      <div class="nav-width">
        <nav class="navbar">
          <a class="nav-logo" href="#">
            Jacob Fenwick
          </a>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Portfolio</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div
            onClick={this.toggleBurger.bind(this)}
            class={`burger-container ${burgerClass}`}
          >
            <div class="burger burger-main"></div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
