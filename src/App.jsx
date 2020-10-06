import React from "react";
import Home from "./components/Home/Home";

function App() {
  const random = Math.floor(Math.random() * 3),
    gradients = [
      ["rgb(229, 75, 80)", "rgb(0, 0, 0)"],
      ["rgb(75, 80, 229)", "rgb(0, 0, 0)"],
      ["rgb(206, 129, 61)", "rgb(0, 0, 0)"],
    ];
  return (
    <React.Fragment>
      <div
        className="container"
        style={{
          background: `linear-gradient(180deg, ${gradients[random][0]}, ${gradients[random][1]})`,
        }}
      >
        <Home />
      </div>
    </React.Fragment>
  );
}

export default App;
