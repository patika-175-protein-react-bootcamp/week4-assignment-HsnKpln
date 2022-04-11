import React from "react";
import { Link } from "react-router-dom";
import Start from "../constants/img/Start";
import { useGame } from "../contexts/GameContext";

function Home() {
    /* context imported to this page */
  const { totalPoint, totalQuestion, totalCorrectAnswer, createNumbers } = useGame();
  return (
      /*this section shows total info and starter the game */
    <div className="main">
      <div className="mainContainer">
        <div className="title">Mathematics Game</div>
        <div className="subline"></div>
        <div className="info">Total Point: {totalPoint} </div>
        <div className="info">Total Question: {totalQuestion} </div>
        <div className="info">Correct Answer: {totalCorrectAnswer} </div>
        <div className="startContainer">
          <Start />
          <Link to="/game" className="start" onClick={createNumbers}>
            Start
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
