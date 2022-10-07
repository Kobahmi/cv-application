import React, { Component } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EduExp from "./components/EduExp";
import PraExp from "./components/PraExp";
import Skills from "./components/Skills";

class App extends Component {
  constructor() {
    super();

    this.state = {
      Skills: {
        skill: "",
        edit: 0,
        data: [],
      },
      EduExp: {
        school: "",
        from: 0,
        to: 0,
        Qualification: "",
        edit: 0,
        data: [],
      },
      PraExp: {
        company: "",
        title: "",
        tasks: "",
        exp: "",
        edit: 0,
        data: [],
      },
      buttons: "1",
      btnValue: "Preview",
    };

    this.getSkills = this.getSkills.bind(this);
    this.getEdu = this.getEdu.bind(this);
    this.getPra = this.getPra.bind(this);
  }

  getSkills = (e) => {
    this.setState({ Skills: e });
  };

  getEdu = (e) => {
    this.setState({ Edu: e });
  };

  getPra = (e) => {
    this.setState({ PraExp: e });
  };

  previewBtn = () => {
    if (this.state.buttons === "0") {
      this.setState({
        buttons: "1",
        btnValue: "Preview",
      });
    } else {
      this.setState({
        buttons: "0",
        btnValue: "Update",
      });
    }
  };

  render() {
    return (
      <div className="content">
        <div className="header-container">
          <h1>CV Creator</h1>
          <input
            className="button previewButt"
            type="button"
            value={this.state.btnValue}
            onClick={this.previewBtn}
          />
        </div>
        <div className="info-container">
          <GeneralInfo buttons={this.state.buttons} />
          <Skills
            getSkills={this.getSkills}
            button={this.state.buttons}
            Skills={this.state.Skills}
          />
          <PraExp
            getPra={this.getPra}
            button={this.state.buttons}
            PraExp={this.state.PraExp}
          />
          <EduExp
            getEdu={this.getEdu}
            button={this.state.buttons}
            EduExp={this.state.EduExp}
          />
        </div>
      </div>
    );
  }
}

export default App;
