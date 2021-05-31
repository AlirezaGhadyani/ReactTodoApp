import React from "react";

const TodoInput = ({ getInputText }) => {
  const getInputValue = (e) => {
    getInputText(e.target.value);
  };
  return (
    <React.Fragment>
      <form className="todo-form">
        <div className="alert"></div>

        <div className="form-controll">
          <input
            type="text"
            id="todo-inp"
            placeholder="type here"
            onChange={getInputValue}
          />
          <button type="submit" className="sub-btn">
            add
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default TodoInput;
