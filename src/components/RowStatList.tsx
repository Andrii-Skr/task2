import React from "react";
import RowStat from "./RowStat";
import HeaderStat from "./HeaderStat";
import { getStat } from "./getStat";
//import { Note } from "src/store/types";

//type RowStatListProp = { notes: Note[] };
const RowStatList = ({ notes }: any) => {
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
