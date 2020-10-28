//NODE PACKAGE:
import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

//CUSTOM PACKAGE:
import HeaderBar from "../header";
import CommonStepper from "../common";
import Logo from "../../assets/freelancerLogo.svg";
import "./style.css";

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const fields = [
      {
        company: { title: "Company A", subtitle: "<Role Name A>" },
        button: { title: "Finish Training", timeDuration: "<time Duration>" },
      },
      {
        company: { title: "Company B", subtitle: "<Role Name B>" },
        button: { title: "Reshedule Mock", timeDuration: "<time Duration>" },
      },
      {
        company: { title: "Company C", subtitle: "<Role Name C>" },
        button: {
          title: "Schedule Interview",
          timeDuration: "<time Duration>",
        },
      },
      {
        company: { title: "Company D", subtitle: "<Role Name D>" },
        button: { title: "Accept Offer", timeDuration: "<time Duration>" },
      },
    ];
    return (
      <div className="cardDeatils">
        <div className="header-section">
          <HeaderBar />
        </div>
        <div className="card-section">
          <div>
            {fields &&
              fields.map((item, i) => {
                return (
                  <Grid container spacing={3}>
                    <Grid item xs>
                      <img src={Logo} className="image-logo" alt="logoimage" />
                      <div className="card__footer">
                        <div className="TitleName">
                          <span className="TitleName ">
                            {item.company.title}
                          </span>
                          <br />
                          <span className="TitleName ">
                            {item.company.subtitle}
                          </span>
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs={6}>
                      <CommonStepper />
                    </Grid>
                    <Grid item xs>
                      <Button
                        variant="contained"
                        size="large"
                        className="title-button"
                        style={{
                          background: "green",
                          color: "white",
                          padding: "5%",
                        }}
                      >
                        {item.button.title}
                      </Button>
                      <br />
                      <p className="time-duration">
                        {item.button.timeDuration} Remaining
                      </p>
                    </Grid>
                  </Grid>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}
