import React, { useState } from "react";
import { Form } from "react-bootstrap";
import "./ItemForm.css";

const ItemForm = props => {
  const [text, setText] = useState("");

  //Passes text up to ItemList.js
  const addToList = e => {
    e.preventDefault();
    if (text.length > 0) {
      props.addToList(text);
    }
    setText("");
  };

  //Handles each keystroke
  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <Form onSubmit={addToList} autocomplete="off">
      <Form.Group>
        <Form.Control
          type="task"
          placeholder="Type a task, then press Enter"
          value={text}
          onChange={handleChange}
          id="input-form"
        />
      </Form.Group>
    </Form>
  );
};

export default ItemForm;
