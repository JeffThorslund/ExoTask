import React from "react";
import Tasking from "./Tasking Components/Tasking";
import Title from "./Tasking Components/Title";
import { Card } from "react-bootstrap";
import "./Note.scss";
import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";

const Note = props => {
  const deleteNote = e => {
    
    props.deleteNote(e.currentTarget.id);
  };

  return (
    
      <Card style={{ width: "18rem" }} id="card-wrapper">
        <Card.Body>
          <div id="flex-container">
            <Title />
            <div><MdClose onClick={deleteNote} id={props.id} /></div>
          </div>

          {/*index:{props.index} <br />
          id:{props.id}*/}

          <Tasking />
        </Card.Body>
      </Card>
    
  );
};

Note.propTypes = {
  id: PropTypes.number,
  deleteNote: PropTypes.func,
  index: PropTypes.number
};

export default Note;
