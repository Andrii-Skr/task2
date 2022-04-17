import React, { useState, useEffect } from "react";
import { Category, getNext, Note } from "./store";
import MySelect from "./MySelect";
import { parseDate } from "./parseDate";

type FormCreateEditProp = {
  create: (note: Note) => void;
  archiveState: boolean;
  editState: boolean;
  currentEdit?: Note;
  saveNote: (note: Note) => void;
};

const defaultNote: Note = {
  id: -1,
  dates: [],
  created: "",
  archive: false,
  name: "",
  content: "",
  category: Category.Task,
};
const FormCreateEdit = ({
  create,
  archiveState,
  editState,
  currentEdit,
  saveNote,
}: FormCreateEditProp) => {
  const [note, setNote] = useState<Note>(defaultNote);
  const [isFormVisible, showForm] = useState<boolean>(false);

  useEffect(() => {
    if (!currentEdit) return;
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

  const editNote: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    showForm(false);
    const eNote: Note = { ...note, dates: parseDate(note.content) };
    saveNote(eNote);
    setNote(defaultNote);
  };

  const cancelEdit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    showForm(false);
    setNote(defaultNote);
  };

  const addNote: React.MouseEventHandler<HTMLButtonElement> = (e) => {
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
    setNote(defaultNote);
  };
  if (editState) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault;
        }}
        className="form"
      >
        {isFormVisible && (
          <>
            <h3>Edit note</h3>
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
            <span>
              <button onClick={cancelEdit} className="createNote">
                Cancel
              </button>
            </span>
          </>
        )}

        <span>
          <button onClick={editNote} className="createNote">
            Save
          </button>
        </span>
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
