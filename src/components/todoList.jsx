import React from "react";

const TodoList = () => {
  return (
    <React.Fragment>
      <div className="list-sec"></div>
      <div className="clear-all-sec">
        <button type="button" className="clear-btn">
          clear all
        </button>
      </div>
    </React.Fragment>
  );
};

export default TodoList;
