import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
<nav className="navbar navbar-expand-lg text-center justify-content-center">
  <div className="container-fluid text-center justify-content-center">
    <Link className="navbar-brand" to="/"><img src="https://png.pngtree.com/element_pic/00/16/07/06577d261edb9ec.jpg" alt=""  style={{width:"50px"}}/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/">Contact</Link>
        </li>
       
        
      </ul>
     
    </div>
  </div>
</nav>
  </>
  );
}
