//formats a task with a checkbox beside it.

import React from "react";
import "./Item.css";
import { FiCheckSquare, FiSquare } from "react-icons/fi";
import PropTypes from "prop-types";

const Item = (props) => {
  return (
    <div
      onClick={(e) => {
        props.handleCompleted(e.target.id);
      }}
      id={props.itemIndex}
      className="item-wrapper"
    >
      <div
        className="checkbox"
        style={{ display: !props.checked ? "inline-block" : "none" }}
        id={props.itemIndex}
      >
        <FiSquare id={props.itemIndex}/>
      </div>
      <div
        className="checkbox"
        style={{ display: props.checked ? "inline-block" : "none" }}
        id={props.itemIndex}
      >
        <FiCheckSquare id={props.itemIndex}/>
      </div>

      {props.data}
    </div>
  );
};

Item.propTypes = {
  data: PropTypes.string,
  id: PropTypes.number,
};

export default Item;
