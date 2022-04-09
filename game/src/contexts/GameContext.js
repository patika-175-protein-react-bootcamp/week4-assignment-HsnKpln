import React, { useContext, useEffect, useState } from 'react'

const GameContext = React.createContext();

const GameProvider = ({children}) =>{
    const [totalPoint,setTotalPoint] = useState(0);
    const [totalQuestion,setTotalQuestion] = useState(0);
    const [totalCorrectAnswer, setTotalCorrectAnswer] = useState(0);

    const [tour,setTour] = useState(1)
    const [score,setScore] = useState(0)
    const [index,setIndex] = useState(0)

    if(index>=10){
        setTour(tour+1)
        setIndex(0)
    }
    
    useEffect(()=>{
      setTotalPoint(score)
      setTotalQuestion((tour-1)*10)
    },[tour])


    const number1List = [];
    const number2List = [];

    let number1;
    let number2;
    function createNumber(){
        console.log("new number");
        console.log('number1',number1,'number2',number2)
        for (let i = 1; i <= 10; i++) {
            number1 = (Math.floor(Math.random() * 10) + 1)
            number1List.push(number1)
            number2 = (Math.floor(Math.random() * 10) + 1)
            number2List.push(number2)
        }
        console.log(number1List,number2List);
    }
    
    function hello(k){
        console.log('hello');
        setIndex((index+1));
        if(k === (number1List[index]*number2List[index])){
            let newScore = Math.floor(Math.sqrt(k))
            setScore(score+newScore)
            setTotalCorrectAnswer(totalCorrectAnswer+1)
        }
        console.log("tıklandı",k,(number1List[index]*number2List[index]))
      }
    return(
        <GameContext.Provider
        value={{
            totalPoint,
            totalQuestion,
            totalCorrectAnswer,
            createNumber,
            number1List,
            number2List,
            hello,
            index,
            tour,
            score
          }}
          >
            {children}
        </GameContext.Provider>
    )
}
function useGame(){
    return useContext(GameContext);
}

export {GameContext,GameProvider,useGame}