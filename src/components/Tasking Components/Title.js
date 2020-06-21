import React from "react";
import { Form } from "react-bootstrap";
import "./Title.css";

class ItemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { titled: true };
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
    if (this.props.title.length > 0) {
      this.setState({
        titled: true,
      });
    }
  };

  render() {
    return (
      <>
        {this.state.titled ? (
          <div onClick={(e) => this.setTitleFalse(e)} className="untitled">
            {this.props.title}
          </div>
        ) : (
          <Form
            autocomplete="off"
            onSubmit={(e) => this.setTitleTrue(e)}
            className="form-title"
          >
            <Form.Group id="form-group">
              <Form.Control
                type="title"
                placeholder="Press Enter to Submit"
                value={this.props.title}
                onChange={(e) =>
                  this.props.handleChangeTitle(
                    this.props.noteIndex,
                    e.target.value
                  )
                }
                onBlur={(e) => this.setTitleTrue(e)}
                className="titled"
              />
            </Form.Group>
          </Form>
        )}
      </>
    );
  }
}

export default ItemForm;
