import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./css/nav.css";

const Navbar = () => {

  const totalitem =useSelector((state) => state.counter.totalCartItem);
  const logindata =useSelector((state) => state.counter.username);

  console.log(logindata)

  return (
    <div className="nav_container">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">M-Shop</span>
          <span className="navbar-brand mb-0 h1"> Hello {logindata}</span>
          <div className="nav-button">
          <Link to="/cart"><button className="btn btn-primary"> <span>Cart {totalitem}</span></button></Link></div>
         
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
