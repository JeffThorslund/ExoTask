import React from "react";

import ItemList from "./ItemList/ItemList";

class Tasking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ItemList />
      </div>
    );
  }
}

export default Tasking;
