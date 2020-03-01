//Iterates a bunch of list items into a list with styling that depends on if the type is completed or incompleted.

import React from "react";
import ItemForm from "./ItemForm";
import Item from "./Item";

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { incomp: [], comp: [] };
  }

  //Adds ItemForm.js to incomp in state

  addToList = text => {
    let currentList = [...this.state.incomp];
    currentList.push(text);
    this.setState({
      incomp: currentList
    });
  };

  render() {
    //Creates a incomp list

    let incompList = this.state.incomp.map(element => {
      return <div>{element}</div>;
    });

    let compList = this.state.comp.map(element => {
      return <div>{element}</div>;
    });

    return (
      <div>
        <h2 id="title">incomp</h2>

        {incompList}

        <h2 id="title">comp</h2>

        {compList}

        <ItemForm addToList={this.addToList} />
      </div>
    );
  }
}

export default ItemList;
