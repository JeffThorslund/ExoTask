import React, { useState } from "react";
import Note from "./Note";
import "./TaskBoard.css";

import { IoIosAddCircle } from "react-icons/io";

const TaskBoard = () => {
  const [noteId, setNoteId] = useState([0]); // This holds an array of card ids
  const [unique, setUnique] = useState(3); //Holds Unique Id

  //Function to add a Note.

  const IncreaseNoteCount = () => {
    let noteIdList = [...noteId];
    noteIdList.push(unique); //Counter to add the next number onto the end.
    setUnique(unique + 1);
    setNoteId(noteIdList);
  };

  //Deletes a certain note.

  const deleteNote = element => {
    //Takes in the id of selected note.
    let noteIdList = [...noteId];
    console.log(noteIdList.indexOf(Number(element)), element);
    noteIdList.splice(noteId.indexOf(Number(element)), 1);
    setNoteId(noteIdList);
  };

  let noteArr = [];
  for (let i = 0; i < noteId.length; i++) {
    noteArr.push(
      <Note
        deleteNote={deleteNote}
        index={noteId.indexOf(noteId[i])}
        id={noteId[i]}
        key={noteId[i]}
      />
    );
  }

  return (
    <div id="wrapper">
      <h1 id="title">Tasket</h1>
      <div id="cards">{noteArr}</div>
      
      
    <div id="button-container"> 
      <div id="add-note" onClick={IncreaseNoteCount}>
        Add new
        </div>
    </div>
        
      
    </div>
  );
};

export default TaskBoard;
