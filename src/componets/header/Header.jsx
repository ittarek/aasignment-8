import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav className="navbar">
        <div className="container-fluid flex-nowrap d-flex main-item ">
          <div className="brand-name">
            <a className="navbar-brand fw-bold text-success fs-2" href="#">
              Knowledge Cafe
            </a>
          </div>

          <div>
            <img
              className="w-25 rounded-circle"
              src="./src/assets/picture 1.jpg"
              alt=""
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
