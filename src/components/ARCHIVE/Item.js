import React from "react";
import LeaderPopup from "./LeaderPopup";
import CalendarPopup from './CalendarPopup'

import { FaRegCheckCircle, FaRegCircle } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //checked: false,
      taskedLeaders: "",
      showPop: false
    };
  }

  handleLeaderSelect = leader => {
    this.setState({
      taskedLeaders: leader
    });
  };

  handleToggle = () => {
    this.setState(prevState => ({
      showPop: !prevState.showPop
    }));
  };

  handleToggleCheckedStatus = (checked, index) => {//calls a function from Note.js that 
    this.props.handleToggleCheckedStatus(checked, index)
  };

  render() {
    return (
      <div>
        <div className="container border p-3">
          <div className="row">
            <div className="col-1" onClick={()=>this.handleToggleCheckedStatus(this.props.checked, this.props.index)}>
              <FaRegCheckCircle
                style={{ display: this.props.checked ? "block" : "none" }}
              />
              <FaRegCircle
                style={{ display: !this.props.checked ? "block" : "none" }}
              />
            </div>

            <div
              className="col-8"
              style={{
                textDecoration: this.props.checked ? "line-through" : "none"
              }}
            >
              {this.props.content}
            </div>

            <div className="col-1">
              <div className="align-middle" onClick={this.handleToggle}>
                <AiOutlineUserAdd />
              </div>
              
                {/*<MdDateRange />*/}
                <CalendarPopup />
              
            </div>

            <div className="col-1">
              <div className="align-middle" onClick={this.handleDelete}></div>
            </div>

            <div>{this.state.taskedLeaders}</div>

            <LeaderPopup
              selection={this.handleLeaderSelect}
              toggle={this.state.showPop}
              closeMenu={this.handleToggle}
            />

            

          </div>
        </div>
      </div>
    );
  }
}

export default Item;
