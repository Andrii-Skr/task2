import React from "react";
import RowStat from "./RowStat";
import getStat from "./GetStat";
import HeaderStat from "./HeaderStat";

const RowStatList = ({ notes }) => {
  return (
    <div className="categorylist">
      <HeaderStat />
      {getStat(notes).map((note) => {
        return <RowStat note={note} key={note.id} />;
      })}
    </div>
  );
};

export default RowStatList;
