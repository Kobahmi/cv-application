import React, { Component } from "react";
import Display from "./Display";
import DisplayData from "./DisplaySkills";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.Skills;

    this.delEdu = this.delEdu.bind(this);
    this.setEdit = this.setEdit.bind(this);
  }

  delEdu = (index) => {
    this.setState((prevState) => {
      let prevData = prevState.data.map((e) => e);
      prevData.splice(index, 1);
      return {
        data: prevData,
      };
    });

    this.props.getSkills();
  };

  updateSkills = (e) => {
    this.setState({ skill: e.target.value });
  };

  addQuali = () => {
    return (
      <div className="addQuali">
        <div>
          <input
            type="text"
            onChange={this.updateSkills}
            value={this.state.skill}
          ></input>
        </div>

        <input
          className="button add"
          type="button"
          value="Submit"
          onClick={this.submitQuali}
        ></input>
      </div>
    );
  };

  submitQuali = () => {
    let data = {
      skill: this.state.skill,
    };

    this.setState((prevState) => {
      let prevData = prevState.data.map((e) => e);
      prevData.push(data);
      return {
        data: prevData,
        edit: 0,
      };
    });

    this.props.getSkills();
  };

  showEdu = () => {
    let subButton = (
      <Display
        render={this.props.button}
        value="Add"
        onClick={this.setEdit}
        className="button add"
      />
    );
    if (this.state.data.length === 0) {
      return subButton;
    } else {
      let data = [];
      let ts = this.state;
      for (let i = 0; i < this.state.data.length; i++) {
        data.push(
          <DisplayData
            key={i}
            index={i}
            button={this.props.button}
            skill={ts.data[i].skill}
            delData={this.delEdu}
          />
        );
      }
      return (
        <div className="showSkill">
          {data}
          {subButton}
        </div>
      );
    }
  };

  setEdit = () => {
    this.setState({ edit: 1 });
  };

  handleRender = () => {
    if (this.state.edit === 0) {
      return this.showEdu();
    }
    if (this.state.edit === 1) {
      return this.addQuali();
    }
  };

  render() {
    return (
      <div className="skills">
        <h3 className="heading">Skills </h3>
        {this.handleRender()}
      </div>
    );
  }
}

export default Skills;
