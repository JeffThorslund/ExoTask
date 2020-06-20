import React, { useState } from "react";
import Note from "./Note";
import "./TaskBoard.css";

const TaskBoard = () => {
  //Holds an array of card ids.
  const [noteIds, setNoteIds] = useState([0]);

  //increases every time a card is added.
  const [globalCounter, setGlobalCounter] = useState(0);

 //Add a note.
  const addNote = () => {
    let noteIdsCopy = [...noteIds];
    noteIdsCopy.push(globalCounter);
    setNoteIds(noteIdsCopy);
    setGlobalCounter(globalCounter + 1);
  };

  //Delete a note.
  const deleteNote = element => {
    let noteIdsCopy = [...noteIds];
    noteIdsCopy.splice(noteIds.indexOf(Number(element)), 1);
    setNoteIds(noteIdsCopy);
  };

  let noteArr = [];
  for (let i = 0; i < noteIds.length; i++) {
    noteArr.push(
      <Note
        deleteNote={deleteNote}
        index={noteIds.indexOf(noteIds[i])}
        id={noteIds[i]}
        key={noteIds[i]}
      />
    );
  }

  return (
    <div id="wrapper">
      <h1 id="title">Tasket</h1>
      <div id="cards">{noteArr}</div>
      
      
    <div id="button-container"> 
      <div id="add-note" onClick={addNote}>
        Add new
        </div>
    </div>
        
      
    </div>
  );
};

export default TaskBoard;
