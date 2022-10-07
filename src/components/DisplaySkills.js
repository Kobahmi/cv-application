import React, { Component } from "react";
import Display from "./Display";

class DisplayData extends Component {
  render() {
    return (
      <div className="schoolData">
        <div>
          <label className="wide wideSkill"> {this.props.skill} </label>
        </div>

        <Display
          render={this.props.button}
          value="Delete"
          className="button delBtn"
          onClick={() => {
            this.props.delData(this.props.index);
          }}
        />
      </div>
    );
  }
}

export default DisplayData;
