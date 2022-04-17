import React from "react";
import Row from "./Row";
import Header from "./Header";
import { Note } from "./store";

type RowListProps = {
  notes: Note[];
  archiveState: boolean;
  remove: (note: Note) => void;
  state: (a: boolean) => void;
  archiveNote: (note: Note) => void;
  editNote: (note: Note) => void;
};
const RowList = ({ notes, archiveState, remove, state, archiveNote, editNote }: RowListProps) => {
  return (
    <div className="todolist">
      <Header state={state} archiveState={archiveState} />
      {notes
        .filter((note: Note) => note.archive === archiveState)
        .map((note: Note) => {
          return (
            <Row
              key={note.id}
              note={note}
              remove={remove}
              archiveNote={archiveNote}
              editNote={editNote}
            />
          );
        })}
    </div>
  );
};

export default RowList;
