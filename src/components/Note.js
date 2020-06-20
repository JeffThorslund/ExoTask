import React from "react";
import PropTypes from "prop-types";

import ItemList from "./Tasking Components/ItemList";
import Title from "./Tasking Components/Title";

import { MdClose } from "react-icons/md";
import { Card } from "react-bootstrap";

import "./Note.scss";

const Note = (props) => {
  const { deleteNote, id } = props;

  return (
    <Card style={{ width: "18rem" }} id="card-wrapper">
      <Card.Body>
        <div id="flex-container">
          <Title />
          <div>
            <MdClose
              onClick={(e) => {
                deleteNote(e.currentTarget.id);
              }}
              id={id}
            />
          </div>
        </div>
        <ItemList />
      </Card.Body>
    </Card>
  );
};

Note.propTypes = {
  deleteNote: PropTypes.func,
  index: PropTypes.number,
  id: PropTypes.number,
};

export default Note;
