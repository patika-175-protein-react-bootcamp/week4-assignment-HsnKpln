import React, { useCallback, useContext, useState } from "react";

const GameContext = React.createContext();

const GameProvider = ({ children }) => {
  const [totalPoint, setTotalPoint] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [totalCorrectAnswer, setTotalCorrectAnswer] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [controlCorrectAnswer, setControlCorrectAnswer] = useState();
  
  const [number1List, setNumber1List] = useState([]);
  const [number2List, setNumber2List] = useState([]);

  const [tour, setTour] = useState(1);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);

  if (index >= 10) {
    setTour(tour + 1);
    setIndex(0);
  }
   /* this function fixes total info in the main page */
  const restart = useCallback(() => {
    setTotalPoint(totalPoint + score);
    setTotalQuestion((tour - 1) * 10);
    setTotalCorrectAnswer(correctAnswer + totalCorrectAnswer);
    setScore(0);
    setCorrectAnswer(0);
  }, [correctAnswer, score, totalCorrectAnswer, totalPoint, tour]);

   /* this function create numbers in the array for game */
  const createNumbers = useCallback(() => {
    let number1;
    let number2;
    console.log("new number");
    const firstArray = [];
    const secondArray = [];
    for (let i = 1; i <= 10; i++) {
      number1 = Math.floor(Math.random() * 10) + 1;
      firstArray.push(number1);
      number2 = Math.floor(Math.random() * 10) + 1;
      secondArray.push(number2);
    }
    setNumber1List(firstArray);
    setNumber2List(secondArray);
  }, []);

  /* this function check the answer and fixes properties in the game page */
  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  
  
  
  async function answerClick(k) {
    let controlAnswerList = [];
    controlAnswerList.push(k)
    setControlCorrectAnswer(controlAnswerList)
    console.log("control", controlAnswerList)
    
    setIndex(index + 1);


    if (k === number1List[index] * number2List[index]) {

      document.body.style.backgroundColor = "green";
      let newScore = Math.floor(Math.sqrt(k));
      setScore(score + newScore);
      setCorrectAnswer(correctAnswer + 1);
      await delay(3000);
      document.body.style.backgroundColor = "#2d2d2d";

    }
    else{
      document.body.style.backgroundColor = "red";
      await delay(3000);
      document.body.style.backgroundColor = "#2d2d2d";


    }
    
    
  }
  return (
    <GameContext.Provider
      value={{
        totalPoint,
        totalQuestion,
        totalCorrectAnswer,
        number1List,
        number2List,
        answerClick,
        index,
        tour,
        score,
        correctAnswer,
        restart,
        createNumbers,
        controlCorrectAnswer
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
/* this function transfers context to other pages */
function useGame() {
  return useContext(GameContext);
}

export { GameContext, GameProvider, useGame };
