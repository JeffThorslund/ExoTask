import React from "react";

//Options menu will contain delete, edit, ...

class OptionsMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  deleteNote = (e) => {
    this.props.deleteNote(e.currentTarget.id);
  };

  render() {
    return (
      <div>
        <div
          
          
          style={
            this.props.optionsShowing ? { display: "block" } : { display: "none" }
          }
          onClick={this.deleteNote}
          id={this.props.index}
        >
          delete
        </div>
      </div>
    );
  }
}

export default OptionsMenu;
