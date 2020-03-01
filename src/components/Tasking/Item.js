//formats a task with a checkbox beside it.

import React from "react";

const Item = props => {
  const handleCompleted = e => {
    props.handleCompleted(e.target.id);
  };

  return (
    <div onClick={handleCompleted} id={props.id}>
      {props.data} X
    </div>
  );
};

export default Item;
