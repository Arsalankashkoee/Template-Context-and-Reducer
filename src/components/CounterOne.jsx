// ------- way 1 -------
// import { useContext } from "react";
// import { CounterContext, CounterContextDispatcher } from "./CounterProvider";
// ------- way 2 -------
// import { useCount, useCountActions } from "./CounterProvider";

// ***CountProviderWithReducer***
import { useCount, useCountActions } from "./CountProviderWithReducer";

const CounterOne = () => {
  // ------- way 1 -------
  // 4.useContext=>consume
  //   const count = useContext(CounterContext);                      //state
  //   const setCount = useContext(CounterContextDispatcher);         //setState()

  // ------- way 2 -------
  const count = useCount();
  //------- CounterProvider -------
  // const { addFive, addOne, decrement } = useCountActions();

  // CountProviderWithReducer
  const dispatch = useCountActions();

  return (
    //-------  CounterProvider -------

    // <div className="bg-red-200 text-center mt-4 rounded-lg p-3 text-lg">
    //   <h2>count is {count}</h2>
    //   <button
    //     className="bg-violet-400 px-2 py-1 rounded-lg m-3"
    //     onClick={addOne}
    //   >
    //     add one
    //   </button>
    //   <button
    //     className="bg-violet-400 px-2 py-1 rounded-lg m-3"
    //     onClick={addFive}
    //   >
    //     add five
    //   </button>
    //   <button
    //     className="bg-violet-400 px-2 py-1 rounded-lg m-3"
    //     onClick={decrement}
    //   >
    //     decrement
    //   </button>
    // </div>

    // ------- CountProviderWithReducer -------
    <div className="bg-red-200 text-center mt-4 rounded-lg p-3 text-lg">
      <h2>count is {count}</h2>
      <button
        className="bg-violet-400 px-2 py-1 rounded-lg m-3"
        onClick={() => dispatch({ type: "add", value: 1 })}
      >
        add one
      </button>
      <button
        className="bg-violet-400 px-2 py-1 rounded-lg m-3"
        onClick={() => dispatch({ type: "reset" })}
      >
        reset
      </button>
      <button
        className="bg-violet-400 px-2 py-1 rounded-lg m-3"
        onClick={() => dispatch({ type: "decrement", value: 1 })}
      >
        decrement
      </button>
    </div>
  );
};

export default CounterOne;
