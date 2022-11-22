import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
const Service = () => {
  return (
    <>
      <div className="main-breadcrumb">
        <div className="container">
          <h2>Services</h2>
        </div>
      </div>
      <div className="main-services">
        <div className="container">
          <div className="row">
            {Sdata.map((val, ind) => {
              return (
                <Card
                  key={ind}
                  imgsrc={val.imgsrc}
                  title={val.title}
                  paragraph={val.paragraph}
                />
              );
            })}
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Service;
