import React from "react";

const Achivements = () => {
  return (
    <>
    <h1 className="big">My Recent Achivements</h1>
      <div className="imgHolder">
        <img className="img" src="Images/Hair.jpg"></img>
      </div>
      <div className="text">
        <h1>Donated my hair to cancer charity</h1>
        <ul>
          <li><p><br/>When I started university I started growing out my hair, initally it was due to laziness but after a couple mounths I decided to grow it out as long as I could in the hopes of possibly donaing it to charity</p></li>
          <li><p><br/>After I finnished university I had grown my hair out and donated 13 inches of hair to the use in wigs for children</p></li>
        </ul>
      </div>
      <div className="imgHolder">
        <img className="img" src="Images/MartialArts3.jpg"></img>
      </div>
      <div className="text">
      <h1>Martial Arts</h1>
        <ul>
          <li><p><br/>In 2017, I achived my 2nd degree black belt in Tang Soo Do.</p></li>
          <li><p><br/>In March of this year, I will be testing for my 3rd degree black belt.</p></li>
        </ul>
      </div>
      <div className="imgHolder">
        <img className="img" src="Images/Pogo.PNG"></img>
      </div>
      <div className="text">
      <h1>Reached The Top of The Montain</h1>
        <ul>
          <li><p><br/>Completed the 1st map in a game called Pogo Stuck (its a rage game).</p></li>
          <li><p><br/>According to steam only 2% of all the people the play this game have completed the 1st map.</p></li>
          <li><p><br/>This game sucks to play.</p></li>
        </ul>
      </div>
    </>
  );
};

export default Achivements;
