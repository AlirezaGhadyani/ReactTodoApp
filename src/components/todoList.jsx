import React from "react";

const TodoList = () => {
  return (
    <React.Fragment>
      <div class="list-sec"></div>
      <div class="clear-all-sec">
        <button type="button" class="clear-btn">
          clear all
        </button>
      </div>
    </React.Fragment>
  );
};

export default TodoList;
