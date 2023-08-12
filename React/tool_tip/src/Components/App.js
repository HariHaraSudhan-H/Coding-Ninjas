import Position from "./Position";
import TipButton from "./TipButton";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState("top");

  // Handles the click of the button for position. This is passed as props to the Position Component to access in that component
  const handleClick = (e) => {
    const newPosition = e.target.innerHTML;
    document.getElementById(`btn-${position}`).style.backgroundColor = "red";
    setPosition(newPosition);
    document.getElementById(`btn-${newPosition}`).style.backgroundColor =
      "black";
  };

  return (
    <div className="App">
      <h1 className="heading"><img className='logo' src="https://img.icons8.com/?size=512&id=107145&format=png" alt="icon"/>Tool Tip</h1>
      <Position handleClick={handleClick} />
      <TipButton position={position} />
    </div>
  );
}

export default App;
