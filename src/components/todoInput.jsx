import React from "react";

const TodoInput = () => {
  return (
    <React.Fragment>
      <form class="todo-form">
        <div class="alert"></div>

        <div className="form-controll">
          <input type="text" id="todo-inp" placeholder="type here" />
          <button type="submit" class="sub-btn">
            add
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default TodoInput;
