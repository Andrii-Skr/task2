import React from "react";
import { useDispatch } from "react-redux";
import { Note } from "src/store/types";
import MySelect from "./MySelect";
import { parseDate } from "./parseDate";

type EditModalProp = {
  isVisible: boolean;
  note: Note;
  setVisible: (visible: boolean) => void;
  setNote: (note: Note) => void;
};

export const EditModal = ({ isVisible, setVisible, note, setNote }: EditModalProp) => {
  const dispach = useDispatch();
  const options = [
    { value: "Task", name: "Task" },
    { value: "Random Thought", name: "Random Thought" },
    { value: "Idea", name: "Idea" },
  ];
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
          <div className="formBtns">
            <div>
              <button
                onClick={() => {
                  dispach({
                    type: "editNote",
                    payload: {
                      ...note,
                      dates: parseDate(note.content),
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
