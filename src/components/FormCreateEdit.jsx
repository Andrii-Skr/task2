import React, { useState, useEffect } from "react";
import { getNext } from "./store";
import MySelect from "./MySelect";
import { parseDate } from "./parseDate";

const FormCreateEdit = ({ create, archiveState, editState, currentEdit, saveNote }) => {
  const [note, setNote] = useState({ name: "", content: "", category: "Task" });
  const [isFormVisible, showForm] = useState(false);
  useEffect(() => {
    showForm(editState);
    if (editState) {
      setNote(currentEdit);
    }
  }, [editState]);

  const options = [
    { value: "Task", name: "Task" },
    { value: "Random Thought", name: "Random Thought" },
    { value: "Idea", name: "Idea" },
  ];

  const editNote = (e) => {
    e.preventDefault();

    showForm(false);
    const eNote = { ...note, dates: parseDate(note.content) };
    saveNote(eNote);
    setNote({ name: "", content: "", category: "Task" });
  };

  const addNote = (e) => {
    e.preventDefault();
    if (!isFormVisible) {
      showForm(true);
      return;
    }
    showForm(false);
    const newNote = {
      ...note,
      id: getNext(),
      archive: archiveState,
      dates: parseDate(note.content),
      created: new Date().toLocaleDateString(),
    };
    create(newNote);
    setNote({ name: "", content: "", category: "Task" });
  };
  if (editState) {
    return (
      <form className="form">
        {isFormVisible && (
          <>
            <h3>Edite note</h3>
            <div>
              <label>Note name</label>
              <input
                type="text"
                className="cell name"
                value={note.name}
                onChange={(e) => setNote({ ...note, name: e.target.value })}
                placeholder="Enter note name"
              />
            </div>

            <div>
              <label>Category</label>

              <MySelect
                onChange={(value) => setNote({ ...note, category: value })}
                value={note.category}
                options={options}
              />
            </div>
            <div>
              <label>Content</label>
              <input
                type="text"
                className="cell content"
                placeholder="Enter content"
                value={note.content}
                onChange={(e) => setNote({ ...note, content: e.target.value })}
              />
            </div>
          </>
        )}
        <div>
          <button onClick={editNote} className="createNote">
            Save
          </button>
        </div>
      </form>
    );
  } else {
    return (
      <form className="form">
        {isFormVisible && (
          <>
            <h3>Create note</h3>
            <div>
              <label>Note name</label>
              <input
                type="text"
                className="cell name"
                value={note.name}
                onChange={(e) => setNote({ ...note, name: e.target.value })}
                placeholder="Enter note name"
              />
            </div>

            <div>
              <label>Category</label>

              <MySelect
                onChange={(value) => setNote({ ...note, category: value })}
                value={note.category}
                options={options}
              />
            </div>
            <div>
              <label>Content</label>
              <input
                type="text"
                className="cell content"
                placeholder="Enter content"
                value={note.content}
                onChange={(e) => setNote({ ...note, content: e.target.value })}
              />
            </div>
          </>
        )}
        <div>
          <button onClick={addNote} className="createNote">
            Create
          </button>
        </div>
      </form>
    );
  }
};

export { FormCreateEdit };
