import React, { useState } from "react";
import Note from "./Note";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Masonry from "react-masonry-component";

import "./TaskBoard.css";

const shortid = require("shortid");

const TaskBoard = () => {
  const [notes, setNotes] = useState([
    {
      id: "aUniqueId",
      title: "Example",
      complete: ["a complete task", "another complete task"],
      incomplete: ["an incomplete task", "another incomplete task"],
    },
  ]);

  //Add a note.
  const addNote = () => {
    let notesCopy = [...notes];
    notesCopy.push({
      id: shortid.generate(),
      title: "Example",
      complete: ["a complete task", "another complete task"],
      incomplete: ["an incomplete task", "another incomplete task"],
    });
    setNotes(notesCopy);
  };

  //Sets list items
  const handleAppendListItems = (index, complete, incomplete) => {
    let notesCopy = [...notes];
    notesCopy[index].complete = complete;
    notesCopy[index].incomplete = incomplete;
    setNotes(notesCopy);
  };

  //Delete a note FIX THIS
  const deleteNote = (index) => {
    let notesCopy = [...notes];
    notesCopy.splice(index, 1);
    setNotes(notesCopy);
  };

  let noteArr = notes.map((note, index) => {
    return (
      <Note
        deleteNote={deleteNote}
        handleAppendListItems={handleAppendListItems}
        title={note.title}
        complete={note.complete}
        incomplete={note.incomplete}
        noteIndex={index}
        key={note.id}
      />
    );
  });

  return (
    <Container fluid className="taskboard-container">
      <Row className="justify-content-center">
        <Col xs="auto" className="title m-3">
          Tasket
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col sm={9}>
          <Masonry options={{ transitionDuration: 0 }}>{noteArr}</Masonry>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto">
          <div id="add-note" onClick={addNote}>
            Add new
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskBoard;
