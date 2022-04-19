import React from "react";
import Row from "./Row";
import Header from "./Header";
import { Note } from "src/store/types";

type RowListProps = {
  notes: any;
  archiveState: boolean;
  state: (a: boolean) => void;
  setVisible: (visible: boolean) => void;
  setNote: (note: Note) => void;
};
const RowList = ({ notes, archiveState, state, setVisible, setNote }: RowListProps) => {
  return (
    <div className="todolist">
      <Header archiveState={archiveState} state={state} />
      {notes
        .filter((note: Note) => note.archive === archiveState)
        .map((note: Note) => {
          return <Row key={note.id} note={note} setVisible={setVisible} setNote={setNote} />;
        })}
    </div>
  );
};

export default RowList;
