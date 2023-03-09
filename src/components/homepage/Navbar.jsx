import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
  state = {
    loading: true,
    error: null,
  };

  render() {
    return (
      <div className="top">
        <nav className="navbar navbar-expand-sm  main pt-0 mt-5">
          <div className="word  mx-5 text-black">W.</div>
          <div className="cotainer-fluid content-home">
            <ul className="navbar-nav d-flex ">
              <li className="nav-item mx-3">Home</li>
              <li className="nav-item mx-3">New</li>
              <li className="nav-item mx-3">Popular</li>
              <li className="nav-item mx-3">Trending</li>
              <li className="nav-item mx-3">Categories</li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
