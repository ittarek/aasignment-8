import React from "react";
import "./Header.css";

const Header = () => {
  return (
   <>
      <nav className="navbar ">
        <div className="container-fluid flex-nowrap d-flex justify-content-between main-item ">
          <div className="brand-name">
            <a className="navbar-brand fw-bold fs-2" href="#">
             <span className="text-warning fs-1">E</span> Thica <span className="text-danger me-4">L</span>  {' '} Hacker
            </a>
          </div>

          <div>
            <img
              className="w-25 rounded-circle"
              src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
              alt=""
            />
          </div>
        </div>  
      </nav>
      <hr />
    </>
  );
};

export default Header;
