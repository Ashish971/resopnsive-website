import React from "react";
import { NavLink } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";

const Common = (props) => {
  return (
    <>
      <div className="Common">
        <div className="container-fluid pt-3 nav bg">
          <div className="row">
            <div className="col-md-10 col-12 mx-auto">
              <div className="row">
                <div className="col-md-6  col-12  pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <span className="brand-name"> GrowByData</span>
                  </h1>
                  <h2>
                    Agency & Brand Managers maximize visibility, clicks and
                    conversion with shopper journey insights
                  </h2>
                  <h2 className="my-3">
                    {" "}
                    If you want Any services ,{" "}
                    <NavLink
                      className="contact"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      to={props.visit}
                      className="main-button btn-get-started"
                    >
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Common;
