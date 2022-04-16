import React from "react";
import FormCreateEdit from "./FormCreateEdit";
import ShowForm from "./ShowForm";

const BtnCreateNote = ({ onClick }) => {
  return (
    <div className="createNoteLeft">
      <button onClick={onClick} className="createNote">
        Create Note
      </button>
    </div>
  );
};

export default BtnCreateNote;
