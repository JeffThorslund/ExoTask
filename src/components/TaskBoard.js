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
          Subtitle
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col className="mx-3">
          <Masonry
            className={"masonry-notes"}
            options={{ transitionDuration: 200 }}
          >
            {noteArr}
          </Masonry>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col xs="auto">
          <div className="add-note" onClick={addNote}>
            Add new
          </div>
        </Col>
        <Col xs="auto">
          <div className="demo" onClick={runDemo}>
            Demo
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TaskBoard;
