import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="navbar-left">
                <NavLink className="navbar-brand" to="/">
                  {" "}
                  <img
                    src="https://cdn-images-1.medium.com/max/1286/1*pnkMUTOavKhfvl0zq4qg2Q@2x.png"
                    alt=" GBD"
                  />{" "}
                </NavLink>
              </div>
            </div>
            <div className="col-md-9 col-6">
              <nav class="navbar navbar-expand-lg navbar-light">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                  <li type = 'none' className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link active"
                      aria-current="page"
                      to="/"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li type = 'none' className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/about"
                    >
                      {" "}
                      About{" "}
                    </NavLink>
                  </li>
                  <li  type = 'none' className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/service"
                    >
                      Services
                    </NavLink>
                  </li>
                  <li type = 'none' className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
