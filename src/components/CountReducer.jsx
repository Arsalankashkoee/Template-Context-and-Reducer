import { useReducer } from "react";
// ------- way 1 -------
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "addOne":
//       return state + 1;
//     case "addFive":
//       return state + 5;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

// ------- way 2 -------
const initialState = 0;
const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return state + action.value;
    case "decrement":
      return state - action.value;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CountReducer = () => {
  //  1. useReducer => like useState : state management
  //  2. useReducer => reduce handler


  //----------- multiple useReducer ------------
  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
  //   steps:
  // 1. import useReducer()
  // 2. useReducer(reducer,initialState)
  // 3. return : [count , dispatch]
  // 4. reducer(state.action)

  return (
    <div className="bg-orange-200 text-center mt-4 rounded-lg p-3 text-lg">
      {/*  ------- way 1 ------- */}
      {/* <h2>count is {count}</h2> */}
      {/* <button
        className="bg-violet-400 px-2 py-1 rounded-lg m-3"
        onClick={() => dispatch("addOne")}
      >
        add one
      </button>
      <button
        className="bg-violet-400 px-2 py-1 rounded-lg m-3"
        onClick={() => dispatch("addFive")}
      >
        add five
      </button>
      <button
        className="bg-violet-400 px-2 py-1 rounded-lg m-3"
        onClick={() => dispatch("decrement")}
      >
        decrement
      </button>
      <button
        className="bg-violet-400 px-2 py-1 rounded-lg m-3"
        onClick={() => dispatch("reset")}
      >
        reset
      </button> */}
      {/*  ------- way 2 ------- */}
      <h2>count one is {count}</h2>
      <h2>count two is {countTwo}</h2>
      {/* ------- button-1 ------- */}
      <div>
        <button
          className="bg-violet-400 px-2 py-1 rounded-lg m-3"
          onClick={() => dispatch({ type: "add", value: 1 })}
        >
          add one
        </button>
        <button
          className="bg-violet-400 px-2 py-1 rounded-lg m-3"
          onClick={() => dispatch({ type: "add", value: 5 })}
        >
          add five
        </button>
        <button
          className="bg-violet-400 px-2 py-1 rounded-lg m-3"
          onClick={() => dispatch({ type: "decrement", value: 1 })}
        >
          decrement
        </button>
        <button
        className="bg-violet-400 px-2 py-1 rounded-lg m-3"
        onClick={() => dispatch({ type: "reset" })}
      >
        reset
      </button>
      </div>
      {/* ------- button-2 ------- */}
      <div>
        <button
          className="bg-violet-400 px-2 py-1 rounded-lg m-3"
          onClick={() => dispatchTwo({ type: "add", value: 1 })}
        >
          add one
        </button>
        <button
          className="bg-violet-400 px-2 py-1 rounded-lg m-3"
          onClick={() => dispatchTwo({ type: "add", value: 5 })}
        >
          add five
        </button>
        <button
          className="bg-violet-400 px-2 py-1 rounded-lg m-3"
          onClick={() => dispatchTwo({ type: "decrement", value: 1 })}
        >
          decrement
        </button>
      <button
        className="bg-violet-400 px-2 py-1 rounded-lg m-3"
        onClick={() => dispatchTwo({ type: "reset" })}
      >
        reset
      </button>
      </div>
      
    </div>
  );
};

export default CountReducer;
