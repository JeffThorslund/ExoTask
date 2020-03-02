import React, { Component } from "react";
import Note from "../Note/Note";
import { CardColumns } from "react-bootstrap";
import './TaskBoard.css'



class TaskBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idArr: [1] // This holds an array with each number being the id of the arr.length[x]
    };
  }

  //Function to add a task.

  IncreaseNoteCount = () => {
    let idArr = [...this.state.idArr];
    idArr.push(idArr[idArr.length - 1] + 1); //Counter to add the next number onto the end.
    this.setState({
      idArr: idArr
    });
  };

  //Deletes a certain note.

  deleteNote = index => {
    //Takes in the id (or maybe the position) of selected note.
    let idArr = [...this.state.idArr];
    console.log("index is " + index);
    let newIdArr = idArr.filter(item => {
      console.log("current item is " + item);
      return Number(item) !== Number(index);
    });
    console.log("the new array is " + newIdArr);
    this.setState({
      idArr: newIdArr
    });
  };

  render() {
    //iterates over the idArr to create a <Note /> for each.
    let noteArr = [...this.state.idArr].map((element, index) => {
      return <Note index={element} /*deleteNote={this.deleteNote}*/ />;
    });

    return (
      <div id="wrapper">
        <h1 id="title">Task-it Basket</h1>
        <h2 id="subtitle"> Assigning tasks has never been easier. </h2>
        <CardColumns>{noteArr}</CardColumns>
        <button className="btn btn-primary" onClick={this.IncreaseNoteCount}>
          Add new
        </button>
      </div>
    );
  }
}

export default TaskBoard;
