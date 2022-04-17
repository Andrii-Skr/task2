import React, { useState } from "react";
import RowList from "./components/RowList";
import RowStatList from "./components/RowStatList";
import "./styles/App.css";
import { FormCreateEdit } from "./components/FormCreateEdit";
import { getNext, store, Note } from "./components/store";

function App() {
  const [notes, setNotes] = useState<Note[]>(store.list);
  const [archiveState, setState] = useState<boolean>(false);
  const [editState, setEditState] = useState<boolean>(false);
  const [currentEdit, setCurrentEdit] = useState<Note | undefined>(undefined);

  const createNote = (newNote: Note) => {
    store.list.push(newNote);
    setNotes([...store.list]);
  };

  const remoteNote = (note: Note) => {
    store.list = store.list.filter((n) => n.id !== note.id);
    setNotes([...store.list]);
  };

  const arviveState = (state: boolean) => {
    setState(!state);
  };

  const archiveNote = (note: Note) => {
    const index = store.list.findIndex((n) => n.id === note.id);
    store.list[index].archive = !store.list[index].archive;

    setNotes([...store.list]);
  };

  const saveNote = (note: Note) => {
    const index = store.list.findIndex((n) => n.id === note.id);
    store.list[index] = { ...note };
    setEditState(false);
    setNotes([...store.list]);
  };
  const editNote = (note: Note) => {
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
        editNote={editNote}
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
