import React from "react";
import { Form } from "react-bootstrap";
import './Title.css'

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  //Sends value to Item List

  handleSubmit = e => {
      e.preventDefault()
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  render() {
    return (
      <Form autocomplete="off" onSubmit={this.handleSubmit} className="title">
        <Form.Group id='form-group'>
          <Form.Control
            type="title"
            placeholder="Title"
            value={this.state.text}
            onChange={this.handleChange}
            id='title-form'
          />
        </Form.Group>
      </Form>
    );
  }
}

export default ItemForm;
