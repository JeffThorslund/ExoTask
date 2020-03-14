//Iterates a bunch of list items into a list with styling that depends on if the type is completed or incompleted.

import React, { useState } from "react";
import ItemForm from "../ItemForm/ItemForm";
import Item from "../Item/Item";
import "./ItemList.scss";

const ItemList = props => {
  const [incomplete, setIncomplete] = useState([
    { text: "This is the incomplete content", id: 0 }
  ]);

  const [complete, setComplete] = useState([
    { text: "This is the complete content", id: 1 },
    { text: "yeeeep", id: 3 },
    { text: "ok", id: 4 }
  ]);

  const [unique, setUnique] = useState(5);

  //Adds ItemForm.js to incomplete in list

  const addToList = text => {
    let incompleteList = [...incomplete];
    incompleteList.unshift({ text: text, id: unique + 1 });
    setIncomplete(incompleteList);
    setUnique(unique + 1);
  };

  //Changes incomp items to comp

  const handleCompleted = id => {
    let completeList = [...complete];
    let incompleteList = [...incomplete];

    const match = element => element.id == id; 
    completeList.unshift(incompleteList[incompleteList.findIndex(match)]);
    incompleteList.splice(incompleteList.findIndex(match), 1);

    setComplete(completeList);
    setIncomplete(incompleteList);
  };

  //Changes comp items to incomp

  const handleCompletedReverse = id => {
    let completeList = [...complete];
    let incompleteList = [...incomplete];

    const match = element => element.id == id;

    console.log(
      "incompleteList before change: ",
      incompleteList,
      "\n",
      "completeList before change: ",
      completeList,
      "\n",
      "id of selected element: ",
      id,
      "\n",
      "index of selected element: ",
      incompleteList.findIndex(match),
      "\n",
      "selected element: ",
      incompleteList[incompleteList.findIndex(match)]
    );

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

  //console.log(typeof complete[1].id)

  return (
    <div>
      <ItemForm addToList={addToList} />
      <div id="incomplete">{incompleteList}</div>
      <div id="line"></div>
      <div id="complete">{completeList}</div>
    </div>
  );
};

export default ItemList;
