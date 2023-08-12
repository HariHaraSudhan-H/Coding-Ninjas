import React, { useEffect, useState } from "react";
import "../index.css";

const TipButton = (props) => {
  const { position } = props;
  const [tipDisplay, setTipDisplay] = useState(false);
  const tip = [
    "Wake up early morning...",
    "Go for walk regularly",
    "Eat healthy food",
    "Be Punctual",
    "Get Vaccinated",
    "Wear a face mask",
    "Keep hands away from face",
    "Clean your home often",
    "Exercise regularly",
    "Meditate every day",
    "Get adequate and good sleep",
    "Limit highly processed foods",
    "Wash your hands regularly",
  ];
  //   Handles the hover action and shows the content
  const handleHover = (hover) => {
    setTipDisplay(hover);
    document.getElementById("hoverContent").style.display = hover
      ? "block"
      : "none";
  };
  // Helps in getting a random tip from the tip array
  const getRandomTip = () => {
    const index = Math.floor(Math.random() * tip.length);
    return tip[index];
  };

  //Executes whenever position of the hoverElement is changed
  useEffect(() => {
    const hoverContent = document.getElementById("hoverContent");
    if (position === "top") {
      hoverContent.style.top = "18%";
      hoverContent.style.left = "42%";
    } else if (position === "right") {
      hoverContent.style.top = "40%";
      hoverContent.style.left = "65%";
    } else if (position === "bottom") {
      hoverContent.style.top = "64%";
      hoverContent.style.left = "42%";
    } else {
      hoverContent.style.top = "40%";
      hoverContent.style.left = "15%";
    }
  }, [position]);

  return (
    <div className="main">
      <span
        className="hoverbutton"
        onMouseOver={() => {
          handleHover(true);
        }}
        onMouseLeave={() => {
          handleHover(false);
        }}
      >
        {tipDisplay ? "See your tip!!!" : "Hover to see Tip"}{" "}
      </span>
      <span
        className="hoverContent"
        id="hoverContent"
        style={{ display: "none" }}
      >
        {getRandomTip()}
      </span>
    </div>
  );
};

export default TipButton;
