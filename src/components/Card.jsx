import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <>
      <div className=" col-md-4  col-12  ">
        <div className="card-single card">
          <div className="card-img">
            <img
              src={props.imgsrc}
              class="card-img-top"
              alt={props.imgsrc}
              width="200x"
              height="190px"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">{props.paragraph}</p>
            <NavLink to="#" className="btn-get-started">
              Click Here
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
