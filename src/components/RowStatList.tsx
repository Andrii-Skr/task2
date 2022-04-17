import React from "react";
import RowStat from "./RowStat";
import { getStat } from "./GetStat";
import HeaderStat from "./HeaderStat";
import { Note } from "./store";

type RowStatListProp = { notes: Note[] };
const RowStatList = ({ notes }: RowStatListProp) => {
  return (
    <div className="categorylist">
      <HeaderStat />
      {getStat(notes).map((stat) => {
        return <RowStat stat={stat} key={stat.id} />;
      })}
    </div>
  );
};

export default RowStatList;
