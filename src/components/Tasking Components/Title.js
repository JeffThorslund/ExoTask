import React from "react";
import { Form } from "react-bootstrap";
import './Title.css'

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" ,
  title: false};
  }

  //Sends value to Item List

  handleSubmit = e => {
      e.preventDefault()
      this.setState(prevState=>({
        title: !prevState.title
      }))
      

  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };



  render() {
    return (
      <div>
        <div className={!this.state.title ? 'on' : 'off'}> 
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
        </div>
        

      <div id='finaltitle' className={this.state.title ? 'on' : 'off'}

      > 
        {this.state.text}
      </div>

      </div>
      
    );
  }
}

export default ItemForm;
