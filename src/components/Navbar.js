import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <React.Fragment>
      <nav>
        <div className="my-name">
          <Link to="/">Oluyemi Sodipo</Link>
        </div>
        <ul>
          <li className="nav-item">
            <Link to="/">
              <span className="tooltip">Home</span>
              <i className="fa fa-home"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about">
              <span className="tooltip">About</span>
              <i className="fa fa-info-circle"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio">
              <span className="tooltip">Projects</span>
              <i className="fa fa-briefcase"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">
              <span className="tooltip">Contact</span>
              <i className="fa fa-envelope"></i>
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
