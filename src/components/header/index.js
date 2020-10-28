//NODE PACKAGE:
import React, { Component } from "react";
import PersonIcon from "@material-ui/icons/Person";

//CUSTOM PACKAGE:
import "./style.css";
export default class HedaerBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      candidatename: "<Candidate Name>",
      homeTitle: "Home Page",
    };
  }
  render() {
    return (
      <div className="header-main">
        <nav>
          <center>
            {" "}
            <a href=" " className="Candidatename">
              {" "}
              <h4> {this.state.candidatename}</h4>
            </a>
            <a href=" " className="home-title">
              <h4>{this.state.homeTitle}</h4>
            </a>
          </center>
          <div className="profile">
            <a href=" ">
              {" "}
              <PersonIcon
                className="personalProfile"
                style={{ width: "20px", marginRight: "100px" }}
              />
            </a>
          </div>
        </nav>
      </div>
    );
  }
}
