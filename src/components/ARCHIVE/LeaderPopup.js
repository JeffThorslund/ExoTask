import React from "react";

const LeaderPopup = props => {
  let handleClick = e => {
    props.selection(e.target.value);
  };

  let handleToggle = () => {
    props.closeMenu();
  };

  let leaderList = ["Chad", "MegaChad", "UltraChad", "SuperChad"];

  let leaderMenu = leaderList.map(x => {
    return (
      <button className="btn btn-primary" value={x} onClick={handleClick}>
        {x}
      </button>
    );
  });

  return (
    <div
      className="btn-group"
      role="group"
      onClick={handleToggle}
      style={{ display: props.toggle ? "block" : "none" }}
    >
      {leaderMenu}
    </div>
  );
};

export default LeaderPopup;
