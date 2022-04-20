import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNext } from "src/store/store";
import { Note } from "src/store/types";
import MySelect from "./MySelect";
import { parseDate } from "./parseDate";

type FormCreateEditProp = {
  archiveState: boolean;
  defaultNote: Note;
};

const options = [
  { value: "Task", name: "Task" },
  { value: "Random Thought", name: "Random Thought" },
  { value: "Idea", name: "Idea" },
];

const FormCreateEdit = ({ archiveState, defaultNote }: FormCreateEditProp) => {
  const dispach = useDispatch();
  const [note, setNote] = useState<Note>(defaultNote);
  const [isVisible, setVisible] = useState<boolean>(false);

  const btnCancel = () => {
    setVisible(false);
    setNote(defaultNote);
  };

  const btnCreate = () => {
    if (!isVisible) {
      setVisible(true);
      return;
    }
    dispach({
      type: "createNote",
      payload: {
        ...note,
        id: getNext(),
        archive: archiveState,
        dates: parseDate(note.content),
        created: new Date().toLocaleDateString(),
      },
    });
    setVisible(false);
    setNote(defaultNote);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="form"
    >
      {isVisible && (
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
      <div className="formBtns">
        {isVisible && (
          <div>
            <button onClick={() => btnCancel()} className="createNote">
              Cancel
            </button>
          </div>
        )}
        <div>
          <button
            onClick={() => {
              btnCreate();
            }}
            className="createNote"
          >
            Create
          </button>
        </div>
      </div>
    </form>
  );
};

export { FormCreateEdit };
