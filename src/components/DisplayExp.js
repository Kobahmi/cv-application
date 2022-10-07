import React, { Component } from "react";
import Display from "./Display";

class DisplayData extends Component {
  render() {
    return (
      <div className="schoolData expData">
        <div>
          <div>
            <label className="wide">Company Name:</label>
            <label> {this.props.school} </label>
          </div>
          <div>
            <label className="wide">Title: </label>
            <label>{this.props.from} </label>
          </div>
          <div>
            <label className="wide">Tasks: </label>
            <label>{this.props.to} </label>
          </div>
          <div>
            <label className="wide">Years of Experience: </label>
            <label>{this.props.qual} </label>
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
