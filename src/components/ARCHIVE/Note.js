import React from "react";

import ItemForm from "./ItemForm";
import Item from "./Item";
import NoteTitle from "./NoteTitle";
import OptionsMunu from "./OptionsMenu";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incompItems: [1],
      compItems: [3],
      optionsShowing: false,
      visible: true
    };
  }
  handleSubmit = text => {
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

  deleteNote = (index) => { 
    this.props.deleteNote(index)
  }

  render() {
    //build incomp list
    
    let incompItems = [...this.state.incompItems].map((element, index)=>
      <Item content={element} checked={false} handleToggleCheckedStatus={this.handleToggleCheckedStatus} index={index}/>
    );

    let compItems = [...this.state.compItems].map((element,index)=>
      <Item content={element} checked={true} handleToggleCheckedStatus={this.handleToggleCheckedStatus} index={index}/>
    );

    return (
      <div className="card p-4" style={ this.state.visible ? { display:'block'} : {display : 'none'} }>
        <NoteTitle /> {this.props.index} {this.props.key}

        {incompItems}
        
        <ItemForm handleSubmit={this.handleSubmit} />

        {compItems}

        <div onClick={this.showOptionsMenu}>
          ...
          <OptionsMunu 
          optionsShowing={this.state.optionsShowing} 
          deleteNote={this.deleteNote}
          index={this.props.index}
          />
        </div>
      </div>
    );
  }
}

export default Note;
