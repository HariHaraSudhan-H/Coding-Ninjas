import React from "react";
import "../index.css";
const Position = (props) => {
  const { handleClick } = props;
  return (
    <div className="btn-group">
      <span style={{ padding: 2 }}>Hover Position : </span>
      <button
        className="btn"
        id="btn-top"
        onClick={handleClick}
        style={{ backgroundColor: "black" }}
      >
        top
      </button>
      <button className="btn" id="btn-right" onClick={handleClick}>
        right
      </button>
      <button className="btn" id="btn-bottom" onClick={handleClick}>
        bottom
      </button>
      <button className="btn" id="btn-left" onClick={handleClick}>
        left
      </button>
    </div>
  );
};

export default Position;
