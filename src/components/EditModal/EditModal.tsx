import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getNext } from "src/store/store";
import { Note } from "src/store/types";
import MySelect from "./MySelect";
import { parseDate } from "../../utils/parseDate";
import "./EditModal.css";

type EditModalProp = {
  isVisible: boolean;
  note: Note;
  title: { title: string; btnText: string };
  archiveState: boolean;
};

const options = [
  { value: "Task", name: "Task" },
  { value: "Random Thought", name: "Random Thought" },
  { value: "Idea", name: "Idea" },
];

const EditModal = (props: EditModalProp) => {
  const dispatch = useDispatch();
  const [editedNote, setEditedNote] = useState(props.note);
  const [isVisible, setVisible] = useState(props.isVisible);
  const [title, setTitle] = useState(props.title);

  useEffect(() => {
    setVisible(props.isVisible);
    setTitle(props.title);
    setEditedNote(props.note);
  }, [props.note, props.isVisible, props.title]);

  const btnCancel = () => {
    setVisible(false);
    setTitle({ title: "", btnText: "" });
  };

  const saveEdit = () => {
    if (title.title === "") {
      dispatch({
        type: "editNote",
        payload: {
          ...editedNote,
          dates: parseDate(editedNote.content),
          created: new Date().toLocaleDateString(),
        },
      });

      setVisible(false);
      setTitle({ title: "", btnText: "" });
    } else {
      if (editedNote.name === "" && editedNote.content === "") {
        setVisible(false);
        setTitle({ title: "", btnText: "" });
        return;
      }
      dispatch({
        type: "createNote",
        payload: {
          ...editedNote,
          id: getNext(),
          archive: props.archiveState,
          dates: parseDate(editedNote.content),
          created: new Date().toLocaleDateString(),
        },
      });
      setVisible(false);
      setTitle({ title: "", btnText: "" });
    }
  };

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
          <h3>{title.title === "" ? "Etit Note" : title.title}</h3>
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
              <button onClick={() => btnCancel()} className="createNote">
                Cancel
              </button>
            </div>
            <div>
              <button onClick={() => saveEdit()} className="createNote">
                {title.btnText === "" ? "Save" : title.btnText}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
