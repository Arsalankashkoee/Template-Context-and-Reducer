import React from "react";
// import CounterProvider from "./components/CounterProvider";
// import CountReducer from "./components/CountReducer";
import CounterOne from "./components/CounterOne";
import CounterProvider from "./components/CountProviderWithReducer";
const App = () => {
  return (
    <>
      <CounterProvider>
        <p className="bg-green-200 text-center p-1 rounded-lg">
          wellcome to context
        </p>
        <CounterOne />
        {/* <CountReducer /> */}
      </CounterProvider>
    </>
  );
};

export default App;
