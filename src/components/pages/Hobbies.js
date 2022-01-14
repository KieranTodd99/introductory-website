import React from "react";
import "./Hobbies.css";
import CardItem from "./CardItem";

const Hobbies = () => {
  return (
    <>
      <div className="hero-container"></div>
      <div className="cards">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="Images/MartialArts3.jpg"
                text="Tang Soo Do"
                path="/TangSoo"
              />
              <CardItem
                src="./Images/League.png"
                text="Gaming"
                path="/Gaming"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src="Images/WeddingPhoto.jpg"
                text="Looking dope"
                label="Mystery"
                path="/Dope"
              />
              <CardItem
                src="Images/Gen1.jpg"
                text="General tomfoolery"
                label="Adventure"
                path="/Silly"
              />
              <CardItem
                src="Images/DuffMan.jpg"
                text="Being Swole"
                label="Adrenaline"
                path="/Swole"
              />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hobbies;
