import React from "react";
import "./Header.css";

const Header = () => {
  return (
   <>
    
        <div className="container-fluid ps-2 m-autoflex-nowrap d-flex justify-content-between">
          <div className="brand-name mt-3">
            <a className="navbar-brand fw-bold fs-2 shadow" href="#">
             <span className="text-warning fst-italic  fs-1">E</span> Thica <span className="text-info me-4">L</span>  {' '} <span className="text-danger fw-bolder fs-1 fst-italic ">H</span> Acker
            </a>
          </div>

          <div>
            <img
              className="w-25 mt-3 ms-5 rounded-circle"
              src="https://tricky-photoshop.com/wp-content/uploads/2017/08/final-1.png"
              alt=""
            />
          </div>
        </div>  
     
      <hr className="w-100 mt-2 m-auto"/>
    </>
  );
};

export default Header;
