import React from "react";

type BtnCreateNoteProps = { onClick: () => void };
const BtnCreateNote = ({ onClick }: BtnCreateNoteProps) => {
  return (
    <div className="createNoteLeft">
      <button onClick={onClick} className="createNote">
        Create Note
      </button>
    </div>
  );
};

export default BtnCreateNote;
