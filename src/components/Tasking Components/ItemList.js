import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Item from "./Item";
import "./ItemList.css";

const ItemList = props => {
  const [incomplete, setIncomplete] = useState([]);
  const [complete, setComplete] = useState([]);
  const [uniqueItemId, setUniqueItemId] = useState(0);

  //Adds ItemForm.js to incomplete in list

  const addToList = text => {
    let incompleteList = [...incomplete];
    incompleteList.unshift({ text: text, id: uniqueItemId + 1 });
    setIncomplete(incompleteList);
    setUniqueItemId(uniqueItemId + 1);
  };

  //Changes incomp items to comp

  const handleCompleted = id => {
    let completeList = [...complete];
    let incompleteList = [...incomplete];
    const match = element => element.id === Number(id);
    completeList.unshift(incompleteList[incompleteList.findIndex(match)]);
    incompleteList.splice(incompleteList.findIndex(match), 1);
    setComplete(completeList);
    setIncomplete(incompleteList);
  };

  //Changes comp items to incomp

  const handleCompletedReverse = id => {
    let completeList = [...complete];
    let incompleteList = [...incomplete];
    const match = element => element.id === Number(id);
    incompleteList.unshift(completeList[completeList.findIndex(match)]);
    completeList.splice(completeList.findIndex(match), 1);
    setComplete(completeList);
    setIncomplete(incompleteList);
  };

  //Creates a incomp list
  let incompleteList = [];
  for (let i = 0; i < incomplete.length; i++) {
    incompleteList.push(
      <Item
        data={incomplete[i].text}
        handleCompleted={handleCompleted}
        id={incomplete[i].id}
        checked={false}
        key={incomplete[i].id}
      />
    );
  }

  //Creates a comp list
  let completeList = [];
  for (let j = 0; j < complete.length; j++) {
    completeList.push(
      <Item
        data={complete[j].text}
        handleCompleted={handleCompletedReverse}
        id={complete[j].id}
        checked={false}
        key={complete[j].id}
      />
    );
  }

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
