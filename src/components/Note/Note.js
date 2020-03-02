import React from "react";
import Tasking from "../Tasking Components/Tasking";
import { Card } from "react-bootstrap";
import "./Note.scss";

//import ItemForm from "./ItemForm";
//import Item from "./Item";
//import NoteTitle from "./NoteTitle";
//import OptionsMunu from "./OptionsMenu";

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incompItems: [1], //This should not be an array?
      compItems: [3], //Or this?
      optionsShowing: false,
      visible: true
    };
  }

  render() {
    return (
        <Card id='card-wrapper'>
          <Card.Body>
            <Card.Title>Title</Card.Title>
            <Card.Text>Get this stuff done!</Card.Text>
            <Tasking />
          </Card.Body>
        </Card>
    );
  }
}

export default Note;
