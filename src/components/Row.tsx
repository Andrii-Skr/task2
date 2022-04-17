import React from "react";
import { Note } from "./store";
const icons = {
  Task: <img src="/img/Task.png" alt="icon" />,
  "Random Thought": <img src="./img/Random.png" alt="icon" />,
  Idea: <img src="./img/Idea.png" alt="icon" />,
};
type RowProp = {
  note: Note;
  remove: (note: Note) => void;
  archiveNote: (note: Note) => void;
  editNote: (note: Note) => void;
};
const Row = ({ note, remove, archiveNote, editNote }: RowProp) => {
  return (
    <div className="row">
      <div className="cell">{icons[note.category]}</div>
      <div className="cell">{note.name}</div>
      <div className="cell">{note.created}</div>
      <div className="cell">{note.category}</div>
      <div className="cell">{note.content}</div>
      <div className="cell">{note.dates}</div>
      <div className="cell btnRow">
        <div onClick={() => editNote(note)} className="myBtn edit">
          <img src="./img/edit.png" alt="edit" title="edit" />
        </div>
        <div onClick={() => archiveNote(note)} className="myBtn archive">
          <img
            src="./img/archiveBlack.png"
            alt="archive"
            title="add to archive/remove from archive"
          />
        </div>
        <div onClick={() => remove(note)} className="myBtn delete">
          <img src="./img/binBlack.png" alt="delete" title="delete" />
        </div>
      </div>
    </div>
  );
};

export default Row;
