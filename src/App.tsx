import React, { useState } from "react";
import RowList from "./components/RowList";
import RowStatList from "./components/RowStatList";
import "./styles/App.css";
import { FormCreateEdit } from "./components/FormCreateEdit";
import { useSelector } from "react-redux";
import { Category, Note } from "./store/types";
import { EditModal } from "./components/EditModal";
import { selectNotes } from "./store/store";

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
  const [note, setNote] = useState<Note>(defaultNote);
  const [isVisible, setVisible] = useState<boolean>(false);

  const arviveState = (state: boolean) => {
    setState(!state);
  };

  return (
    <div className="App">
      <RowList
        notes={notes}
        archiveState={archiveState}
        state={arviveState}
        setVisible={setVisible}
        setNote={setNote}
      />
      <FormCreateEdit archiveState={archiveState} defaultNote={defaultNote} />
      <EditModal isVisible={isVisible} setVisible={setVisible} note={note} />
      <RowStatList notes={notes} />
    </div>
  );
}

export { App };
