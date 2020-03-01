import React from "react";
import Navbar from "../navbar/Navbar";

import Note from "./Note";

class Tasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idArr: [3,4,5,6,7,8]
    };
  }

  //adds another note with a key that is one higher

  IncreaseNoteCount = () => {
    let idArr = [...this.state.idArr];
    idArr.push(idArr[idArr.length - 1] + 1);
    this.setState({
      idArr: idArr
    });
  };

  deleteNote = index => {
    let idArr = [...this.state.idArr];
    console.log('index is ' + index)

    let newIdArr = idArr.filter(item => {
        console.log('current item is ' + item)
        return Number(item) !== Number(index)
    });

    console.log('the new array is ' + newIdArr)

    this.setState({
      idArr: newIdArr
    });
  };

  render() {
    //iterates over the idArr to create a <Note /> for each.

    let noteArr = [...this.state.idArr].map((element, index)=> {
      return (
        <div className="col-6" key={element}>
          <Note index={element}  deleteNote={this.deleteNote} />
        </div>
      );
    });

    return (
      <div>
        <Navbar />
        <div className="container" style={{ fontFamily: "Alata" }}>
          <div className="row">
            {noteArr}
            <div className="col-6">
              <button
                className="btn btn-primary"
                onClick={this.IncreaseNoteCount}
              >
                Add new
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tasks;
