import React from "react";
import { Form, Button } from "react-bootstrap";

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text:''};
  } 

  //Sends value to Item List

  addToList = (e) => {
    e.preventDefault();
    this.props.addToList(this.state.text);
    this.setState({
        text:''
    })
  };

  handleChange = (e) => {
    this.setState({
        text: e.target.value
    })
  }

  render() {
    return (
      <Form onSubmit={this.addToList}>
        <Form.Group>
          <Form.Control type="task" placeholder="Gimme something!" value={this.state.text} onChange={this.handleChange}/>
        </Form.Group>
      </Form>
    );
  }
}

export default ItemForm;
