//Iterates a bunch of list items into a list with styling that depends on if the type is completed or incompleted.

import React from "react";
import ItemForm from "../ItemForm";
import Item from "../Item/Item";
import "./ItemList.scss";

class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incomp: ["test", "ok boomer", "crappy", "buddyyyy"],
      comp: ["test"]
    };
  }

  //Adds ItemForm.js to incomp in state

  addToList = text => {
    let currentList = [...this.state.incomp];
    currentList.unshift(text);
    this.setState({
      incomp: currentList
    });
  };

  //Changes incomp items to comp

  handleCompleted = index => {
    let incomp = [...this.state.incomp];
    let comp = [incomp.splice(index, 1), ...this.state.comp];
    this.setState({
      comp: comp,
      incomp: incomp
    });
  };

  //Changes comp items to incomp

  handleCompletedReverse = index => {
    let comp = [...this.state.comp];
    let incomp = [...this.state.incomp, comp.splice(index, 1)];
    this.setState({
      comp: comp,
      incomp: incomp
    });
  };

  render() {
    //Creates a incomp list

    let incompList = this.state.incomp.map((element, index) => {
      return (
        <Item
          data={element}
          handleCompleted={this.handleCompleted}
          id={index}
          checked={false}
        />
      );
    });

    //Creates a comp list

    let compList = this.state.comp.map((element, index) => {
      return (
        <Item
          data={element}
          handleCompleted={this.handleCompletedReverse}
          id={index}
          checked={true}
        />
      );
    });

    return (
      <div>
        <ItemForm addToList={this.addToList} />
        <div id="incomplete">{incompList}</div>
        <div id='line'></div>
        <div id="complete">{compList}</div>
        
      </div>
    );
  }
}

export default ItemList;
