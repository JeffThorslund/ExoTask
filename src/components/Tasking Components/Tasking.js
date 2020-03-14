import React from "react";

import ItemList from "./ItemList/ItemList";

//import ItemForm from "./ItemForm";
//import Item from "./Item";
//import NoteTitle from "./NoteTitle";
//import OptionsMunu from "./OptionsMenu";

class Tasking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incompItems: [1], //This should not be an array?
      compItems: [3], //Or this?
      optionsShowing: false,
      visible: true
    };
  }

  /*handleSubmit = text => {
    if (text.length > 0) {
      let itemArray = [...this.state.incompItems];
      itemArray.push(text);
      this.setState({
        incompItems: itemArray
      });
    }
  };

  handleToggleCheckedStatus = (checked, index) => {// 0 is unchecked, 1 is checked
    let incompItems = [...this.state.incompItems]
    let compItems = [...this.state.compItems]
  if(!checked){//Going from unchecked to checked
    compItems.push(incompItems[index])
    incompItems.splice(index,1)
  }
  else if(checked){//going from unchecekd to checked
    incompItems.push(compItems[index])
    compItems.splice(index, 1)
  }
    this.setState({
      incompItems: incompItems,
      compItems: compItems
    })
}

  showOptionsMenu = () => {
    this.setState(prevState => ({
      optionsShowing: !prevState.optionsShowing
    }));
  };

  deleteNote = index => {
    this.props.deleteNote(index);
  };*/

  render() {
   

    return (
      
        <div>

          <ItemList/>
          
          

          
          
          
          {/*
          <div onClick={this.showOptionsMenu}>
          ...
          <OptionsMunu
            optionsShowing={this.state.optionsShowing}
            deleteNote={this.deleteNote}
            index={this.props.index}
          />
    </div>*/}
        </div>


        
      
    );
  }
}

export default Tasking;
