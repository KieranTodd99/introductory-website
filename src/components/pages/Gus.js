import React from "react";
import "./Gus.css";

const Gus = () => {
  return (
    <>
      <div className="container">
        <div className="imgHolder">
          <img
            className="img"
            src="Images/Gus2.png"
            onMouseOver={(e) => (e.currentTarget.src = "Images/Gus.png")}
            onMouseOut={(e) => (e.currentTarget.src = "Images/Gus2.png")}
          />
        </div>
        <div className="text">
          <h1>This is Gus</h1>
          <p>
            Age: 7 months
            <br />
            <br />
            <br />
            Gender: Male <br />
            <br />
            <br />
            Attitude: A massive pain in the ass <br /> because he chews
            <strong> Everything</strong>...
            <br />
            <br />
            but hes also cute
          </p>
        </div>
      </div>
    </>
  );
};

export default Gus;
