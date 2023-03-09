import React from "react";
import "./new.css";

class New extends React.Component {
  state = {
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.init();
  }

  init = () => {};

  render() {
    return (
      <div className="new-jumbotron">
        <div className="header h4 mx-3 mt-1 pt-4 d-flex flex-column">New</div>
        <div className="first-child ">
          <p className="h6 first-text mx-3 font-weight-bold">
            Hydrogen VS Electric Cars
          </p>
          <p className="first-paragraph text-muted px-3">
            Will hydrogen-fueled cars ever catch up to Evs?
          </p>
          <hr className="horizontal-line px-3 text-bold" />
        </div>
        <div className="second-child ">
          <p className="h6 first-text mx-3 font-weight-bold">
            The Downsides of AI Artistry
          </p>
          <p className="first-paragraph text-muted px-3">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
          <hr className="horizontal-line px-3 text-bold" />
        </div>
        <div className="third-child ">
          <p className="h6 first-text mx-3 font-weight-bold">
            Is VC Funding Drying Up?
          </p>
          <p className="first-paragraph text-muted px-3">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    );
  }
}

export default New;
