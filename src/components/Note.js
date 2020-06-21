import React from "react";

import ItemList from "./Tasking Components/ItemList";
import Title from "./Tasking Components/Title";

import { MdClose } from "react-icons/md";

import "./Note.scss";

const Note = (props) => {
  const {
    handleAppendListItems,
    handleChangeTitle,
    noteId,
    title,
    complete,
    incomplete,
    noteIndex,
    deleteNote,
  } = props;

  return (
    <div className="note">
      <div id="flex-container">
        <Title title={title} noteIndex={noteIndex} handleChangeTitle={handleChangeTitle} />
        <div
          onClick={(e) => {
            deleteNote(e.currentTarget.id);
          }}
          id={noteIndex}
        >
          <MdClose id={noteIndex} />
        </div>
      </div>
      <ItemList
        noteId={noteId}
        complete={complete}
        incomplete={incomplete}
        noteIndex={noteIndex}
        handleAppendListItems={handleAppendListItems}
      />
    </div>
  );
};

export default Note;
