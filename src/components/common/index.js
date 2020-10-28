//NODE PACKAGE:
import React, { Component } from "react";

//CUSTOM PACKAGE:
import "./style.css";
export default class CommanStepper extends Component {
  render() {
    return (
      <div>
        <ul className="stepper">
          <li className="step ">
            <span className="upper-text" />
            <span className="dot" />
            <span className="lower-text">Qualified for Training</span>
          </li>
          <li className="step">
            <span className="upper-text">Training Attended</span>
            <span className="dot" />
          </li>
          <li className="step ">
            <span className="upper-text" />
            <span className="dot" />
            <span className="lower-text">Mock Attented</span>
          </li>

          <li className="step ">
            <span className="upper-text">Interview Scheduled</span>
            <span className="dot" />
            <span className="lower-text"></span>
          </li>
          <li className="step">
            <span className="upper-text" />
            <span className="dot" />
            <span className="lower-text">Offered</span>
          </li>
          <li className="step">
            <span className="upper-text">Accepted</span>
            <span className="dot" />
          </li>
        </ul>
      </div>
    );
  }
}
