import React from "react";
import { Form } from "react-bootstrap";
import "./Title.css";

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {titled: false };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  setTitleFalse = (e) => {
    e.preventDefault();
    this.setState({
      titled: false,
    });
  };

  setTitleTrue = (e) => {
    e.preventDefault();
    this.setState({
      titled: true,
    });
  };

  render() {
    return (
      <div>
        {this.state.titled ? (
          <div onClick={(e) => this.setTitleFalse(e)} className="untitled">
            {this.state.value}
          </div>
        ) : (
          <Form
            autocomplete="off"
            onSubmit={(e) => this.setTitleTrue(e)}
            className="title"
          >
            <Form.Group id="form-group">
              <Form.Control
                type="title"
                placeholder="Enter a Title"
                value={this.state.value}
                onChange={this.handleChange}
                onBlur={(e) => this.setTitleTrue(e)}
                className="titled"
              />
            </Form.Group>
          </Form>
        )}
      </div>
    );
  }
}

export default ItemForm;
