import React from "react";
import ItemForm from "./ItemForm";
import Item from "./Item";
import "./ItemList.css";
const shortid = require('shortid');

const ItemList = (props) => {
  const { complete, incomplete, noteIndex, handleAppendListItems } = props;

  //Adds ItemForm.js to incomplete in list
  const addToList = (text) => {
    incomplete.unshift(text);
    handleAppendListItems(noteIndex, complete, incomplete);
  };

  //Changes incomp items to comp
  const handleCompleted = (index) => {
    let completeCopy = [...complete];
    let incompleteCopy = [...incomplete];
    completeCopy.unshift(incompleteCopy[index]);
    incompleteCopy.splice(index, 1);
    handleAppendListItems(noteIndex, completeCopy, incompleteCopy);
  };

  //Changes comp items to incomp

  const handleCompletedReverse = (index) => {
    let completeCopy = [...complete];
    let incompleteCopy = [...incomplete];
    incompleteCopy.unshift(completeCopy[index]);
    completeCopy.splice(index, 1);
    handleAppendListItems(noteIndex, completeCopy, incompleteCopy);
  };

  //Creates a incomp list

  let incompleteList = incomplete.map((item, index) => {
    let randId = shortid.generate();
    return (
      <Item
        data={item}
        handleCompleted={handleCompleted}
        checked={false}
        itemIndex={index}
        key={randId}
      />
    );
  });

  let completeList = complete.map((item, index) => {
    let randId = shortid.generate();
    return (
      <Item
        data={item}
        handleCompleted={handleCompletedReverse}
        checked={false}
        itemIndex={index}
        key={randId}
      />
    );
  });

  return (
    <div>
      <ItemForm addToList={addToList} />
      <div className={incompleteList.length === 0 ? "empty" : "full"}>
        Incomplete Items appear here
      </div>
      <div id="incomplete">{incompleteList}</div>

      <div id="line"></div>
      <div className={completeList.length === 0 ? "empty" : "full"}>
        Complete Items appear here
      </div>
      <div id="complete">{completeList}</div>
    </div>
  );
};

export default ItemList;
