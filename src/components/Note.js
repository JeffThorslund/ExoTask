import React from "react";

import ItemList from "./Tasking/ItemList";
import Tasking from "./Tasking/Tasking"

import { Col, Card } from "react-bootstrap";

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

render(){

    return (
      
        <div>
            

            <Card
          
          
          /*style={
            this.state.visible ? { display: "block" } : { display: "none" }*/
          
        ><Card.Body>
<h1>
                Title
            </h1>
          <Tasking />

        </Card.Body>
          
        </Card>

            
        </div>
      
    );
  }
}

export default Note;
