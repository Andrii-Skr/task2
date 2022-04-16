import React from "react";

const MySelect = ({ options, defaultValue, value, onChange }) => {
  return (
    <select
      name="select"
      className="cell category"
      value={value}
      onChange={(event) => onChange(event.currentTarget.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;

//

/* <option value="Task">Task</option>
          <option value="Random Thought">Random Thought</option>
          <option value="Idea">Idea</option> */
