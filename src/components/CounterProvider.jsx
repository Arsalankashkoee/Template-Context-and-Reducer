import React, { useState, useContext } from "react";

// ------- way 1 -------
// 1.create context
// 2.import context
// export const CounterContext = React.createContext();                // state
// export const CounterContextDispatcher = React.createContext();      //setState()

// ------- way 2 -------
const CounterContext = React.createContext();
const CounterContextDispatcher = React.createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  return (
    //   3.provider
    <CounterContext.Provider value={count}>
      <CounterContextDispatcher.Provider value={setCount}>
        {children}
      </CounterContextDispatcher.Provider>
    </CounterContext.Provider>
  );
};

export default CounterProvider;

// ------- way 2 -------
export const useCount = () => useContext(CounterContext);

export const useCountActions = () => {
  const setCount = useContext(CounterContextDispatcher);

  //  all action on state
  const addOne = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const addFive = () => {
    setCount((prevCount) => prevCount + 5);
  };
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return { addOne, addFive, decrement };
};
