//formats a task with a checkbox beside it.

import React from "react";
import "./Item.css";
import { FiCheckSquare, FiSquare } from "react-icons/fi";
import PropTypes from 'prop-types';

const Item = props => {
  const handleCompleted = e => {
    props.handleCompleted(e.target.id);
  };

  return (
    <div onClick={handleCompleted} id={props.id} key={props.id} className="item-wrapper">
      <div
        id="checkbox"
        style={{ display: !props.checked ? "inline-block" : "none" }}
      >
        <FiSquare />
      </div>
      <div
        id="checkbox"
        style={{ display: props.checked ? "inline-block" : "none" }}
      >
        <FiCheckSquare />
      </div>

      {props.data},{props.id}

    </div>
  );
};

/*Item.propTypes = {
  data: PropTypes.string,
  id: PropTypes.number
};*/

export default Item;
