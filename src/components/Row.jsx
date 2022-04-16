import React from "react";
const icons = {
  Task: <img src="/img/Task.png" alt="icon" />,
  "Random Thought": <img src="./img/Random.png" alt="icon" />,
  Idea: <img src="./img/Idea.png" alt="icon" />,
};
const Row = (props) => {
  return (
    <div className="row">
      <div className="cell">{icons[props.note.category]}</div>
      <div className="cell">{props.note.name}</div>
      <div className="cell">{props.note.created}</div>
      <div className="cell">{props.note.category}</div>
      <div className="cell">{props.note.content}</div>
      <div className="cell">{props.note.dates}</div>
      <div className="cell btnRow">
        <div onClick={() => props.currentENote(props.note)} className="myBtn edit">
          <img src="./img/edit.png" alt="edit" title="edit" />
        </div>
        <div onClick={() => props.archiveNote(props.note)} className="myBtn archive">
          <img
            src="./img/archiveBlack.png"
            alt="archive"
            title="add to archive/remove from archive"
          />
        </div>
        <div onClick={() => props.remove(props.note)} className="myBtn delete">
          <img src="./img/binBlack.png" alt="delete" title="delete" />
        </div>
      </div>
    </div>
  );
};

export default Row;
