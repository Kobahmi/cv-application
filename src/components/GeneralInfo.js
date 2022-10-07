import React, { Component } from "react";
import EditText from "./EditText";

class GeneralInfo extends Component {
  render() {
    return (
      <div className="generalInfo">
        <EditText value="First Name" buttons={this.props.buttons} />
        <EditText value="Last Name" buttons={this.props.buttons} />
        <EditText value="Email" buttons={this.props.buttons} />
        <EditText value="Phone Number" buttons={this.props.buttons} />
      </div>
    );
  }
}

export default GeneralInfo;
