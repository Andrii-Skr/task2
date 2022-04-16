import React from "react";
const icons = {
  Task: <img src="./img/Task.png" alt="icon" />,
  "Random Thought": <img src="./img/Random.png" alt="icon" />,
  Idea: <img src="./img/Idea.png" alt="icon" />,
};
const RowStat = (props) => {
  return (
    <div className="row stat">
      <div className="cell">{icons[props.note.category]}</div>
      <div className="cell">{props.note.category}</div>
      <div className="cell">{props.note.active}</div>
      <div className="cell">{props.note.archive}</div>
    </div>
  );
};

export default RowStat;
