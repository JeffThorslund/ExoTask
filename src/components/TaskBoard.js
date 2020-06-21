import React, { useState } from "react";
import Note from "./Note";
import demo from "../demo.json";

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
      title: "Click Title to Edit",
      complete: ["click a task to uncomplete it", "try this one!"],
      incomplete: ["click a task to complete it", "give it a go!"],
    },
  ]);

  //Add a note.
  const addNote = () => {
    let notesCopy = [...notes];
    notesCopy.push({
      id: shortid.generate(),
      title: "Click Title to Edit",
      complete: ["a complete task", "another complete task"],
      incomplete: ["an incomplete task", "another incomplete task"],
    });
    setNotes(notesCopy);
  };

  //Change Title
  const handleChangeTitle = (index, title) => {
    let notesCopy = [...notes];
    notesCopy[index].title = title;
    setNotes(notesCopy);
  };

  //Sets list items
  const handleAppendListItems = (index, complete, incomplete) => {
    let notesCopy = [...notes];
    notesCopy[index].complete = complete;
    notesCopy[index].incomplete = incomplete;
    setNotes(notesCopy);
  };

  //Delete a note
  const deleteNote = (index) => {
    let notesCopy = [...notes];
    notesCopy.splice(index, 1);
    setNotes(notesCopy);
  };

  //Demo
  const runDemo = () => {
    console.log(demo);
    setNotes(demo);
  };

  let noteArr = notes.map((note, index) => {
    return (
      <Note
        deleteNote={deleteNote}
        handleAppendListItems={handleAppendListItems}
        handleChangeTitle={handleChangeTitle}
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
        <Col xs="auto" className="title">
          Tasket
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto" className="subtitle">
          Get your life together, bud.
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col className="mx-3">
          <Masonry
            className={"masonry-notes"}
            options={{ transitionDuration: 500 }}
          >
            {noteArr}
          </Masonry>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs="auto">
          <div className="add-note button" onClick={addNote}>
            Add New Note
          </div>
        </Col>
        <Col xs="auto">
          <div className="demo button" onClick={runDemo}>
            Demo
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto">
          <div className="summary button">Send Me an Email Summary</div>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskBoard;
