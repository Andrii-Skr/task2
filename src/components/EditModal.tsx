import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Note } from "src/store/types";
import MySelect from "./MySelect";
import { parseDate } from "./parseDate";

type EditModalProp = {
  isVisible: boolean;
  note: Note;
  setVisible: (visible: boolean) => void;
};

const options = [
  { value: "Task", name: "Task" },
  { value: "Random Thought", name: "Random Thought" },
  { value: "Idea", name: "Idea" },
];

export const EditModal = ({ isVisible, setVisible, note }: EditModalProp) => {
  const dispach = useDispatch();
  const [editedNote, setEditedNote] = useState(note);
  useEffect(() => {
    setEditedNote(note);
  }, [note]);
  return (
    <div
      className={isVisible ? "editModal visible" : "editModal"}
      onClick={() => setVisible(false)}
    >
      <div className="editModalContent" onClick={(e) => e.stopPropagation()}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="form"
        >
          <h3>Edit note</h3>
          <div>
            <label>Note name</label>
            <input
              type="text"
              className="cell name"
              value={editedNote.name}
              onInput={(e) => setEditedNote({ ...editedNote, name: e.currentTarget.value })}
              placeholder="Enter note name"
            />
          </div>

          <div>
            <label>Category</label>

            <MySelect
              onChange={(value) => setEditedNote({ ...editedNote, category: value })}
              value={editedNote.category}
              options={options}
            />
          </div>
          <div>
            <label>Content</label>
            <input
              type="text"
              className="cell content"
              placeholder="Enter content"
              value={editedNote.content}
              onInput={(e) => setEditedNote({ ...editedNote, content: e.currentTarget.value })}
            />
          </div>
          <div className="formBtns">
            <div>
              <button
                onClick={() => {
                  dispach({
                    type: "editNote",
                    payload: {
                      ...editedNote,
                      dates: parseDate(editedNote.content),
                      created: new Date().toLocaleDateString(),
                    },
                  });

                  setVisible(false);
                }}
                className="createNote"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
