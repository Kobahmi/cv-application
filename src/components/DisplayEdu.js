import React, { Component } from "react";
import Display from "./Display";

class DisplayData extends Component {
  render() {
    return (
      <div className="schoolData eduData">
        <div>
          <div>
            <label className="wide">Institution: </label>
            <label>{this.props.school}</label>
          </div>
          <div>
            <label className="wide">From: </label>
            <label>{this.props.from}</label>
          </div>
          <div>
            <label className="wide">To: </label>
            <label>{this.props.to}</label>
          </div>
          <div>
            <label className="wide">Qualification: </label>
            <label>{this.props.qual}</label>
          </div>
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
