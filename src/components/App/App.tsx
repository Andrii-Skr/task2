import React, { useState } from "react";
import RowStatList from "../RowStatList/RowStatList";
import { useSelector } from "react-redux";
import EditModal from "../EditModal";
import { selectNotes } from "../../store/store";
import { Category, Note } from "../../store/types";
import RowList from "../RowList/RowList";
import "./App.css";

const defaultNote: Note = {
  id: -1,
  dates: [],
  created: "",
  archive: false,
  name: "",
  content: "",
  category: Category.Task,
};

function App() {
  const notes = useSelector(selectNotes);
  const [archiveState, setState] = useState<boolean>(false);
  const [isVisible, setVisible] = useState<boolean>(false);
  const [note, setNote] = useState<Note>(defaultNote);
  const [title, setTitle] = useState<{ title: string; btnText: string }>({
    title: "",
    btnText: "",
  });

  const activeState = (state: boolean) => {
    setState(!state);
  };

  return (
    <div className="App">
      <RowList
        notes={notes}
        archiveState={archiveState}
        state={activeState}
        setVisible={setVisible}
        setNote={setNote}
      />
      <div className="createNoteRight">
        <button
          onClick={() => {
            setNote(defaultNote);
            setVisible(true);
            setTitle({ title: "Create note", btnText: "Create" });
          }}
          className="createNote"
        >
          Create
        </button>
      </div>
      <EditModal isVisible={isVisible} note={note} title={title} archiveState={archiveState} />
      <RowStatList notes={notes} />
    </div>
  );
}

export default App;
