import React, {useState} from "react";


function App() {

  const [currentTime, setTime] = useState("TIME");

  function getTime() {
    const time = new Date().toLocaleTimeString();
    setTime(time);
    setInterval(getTime, 1000);
  }
  

  return (
    <div className="container">
      <h1> {currentTime} </h1>
      <button onClick={getTime} >Get Time</button>
    </div>
  );
}

export default App;
