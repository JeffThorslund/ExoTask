//formats a task with a checkbox beside it.

import React from "react";
import "./Item.css";
import { FiCheckSquare, FiSquare } from "react-icons/fi";

const Item = props => {
  const handleCompleted = e => {
    props.handleCompleted(e.target.id);
  };

  return (
    <div onClick={handleCompleted} id={props.id} className="item-wrapper">

      <div
        id="checkbox"
        style={{display: !props.checked ? 'inline-block' : 'none'}}
      >
        <FiSquare />
      </div>
      <div
        id="checkbox"
        style={{display: props.checked ? 'inline-block' : 'none'}}
      >
        <FiCheckSquare />
      </div>{props.data}

      
    </div>
  );
};

export default Item;
