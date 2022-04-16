import { useState } from "react";
import RowList from "./components/RowList";
import RowStatList from "./components/RowStatList";
import "./styles/App.css";
import { FormCreateEdit } from "./components/FormCreateEdit";
import { getNext, store } from "./components/store";

function App() {
  const [notes, setNotes] = useState(store.list);
  const [archiveState, setState] = useState(false);
  const [editState, setEditState] = useState(false);
  const [currentEdit, setCurrentEdit] = useState({});

  const createNote = (newNote) => {
    store.list.push(newNote);
    setNotes([...store.list]);
  };

  const remoteNote = (note) => {
    store.list = store.list.filter((n) => n.id !== note.id);
    setNotes([...store.list]);
  };

  const arviveState = (state) => {
    setState(!state);
  };

  const archiveNote = (note) => {
    const index = store.list.findIndex((n) => n.id === note.id);
    store.list[index].archive = !store.list[index].archive;

    setNotes([...store.list]);
  };

  const saveNote = (note) => {
    const index = store.list.findIndex((n) => n.id === note.id);
    store.list[index] = { ...note };
    setEditState(false);
    setNotes([...store.list]);
  };
  const currentENote = (note) => {
    setCurrentEdit({ ...note });
    setEditState(true);
  };

  return (
    <div className="App">
      <RowList
        notes={notes}
        archiveState={archiveState}
        remove={remoteNote}
        state={arviveState}
        archiveNote={archiveNote}
        currentENote={currentENote}
      />
      <FormCreateEdit
        create={createNote}
        archiveState={archiveState}
        editState={editState}
        currentEdit={currentEdit}
        saveNote={saveNote}
      />

      <RowStatList notes={notes} />
    </div>
  );
}

export { App, getNext };
