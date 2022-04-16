import React from "react";
import Row from "./Row";
import Header from "./Header";

const RowList = ({ notes, archiveState, remove, state, archiveNote, currentENote }) => {
  return (
    <div className="todolist">
      <Header state={state} archiveState={archiveState} />
      {notes
        .filter((note) => note.archive === archiveState)
        .map((note) => {
          return (
            <Row
              note={note}
              key={note.id}
              remove={remove}
              archiveNote={archiveNote}
              currentENote={currentENote}
            />
          );
        })}
    </div>
  );
};

export default RowList;
