import React from "react";
import "./landing.css";
class LandingView extends React.Component {
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
      <div className="landing mt-4">
        <div className="image"></div>
        <div className="texts d-flex mt-4">
          <div className="future w-50">The Bright Future Of Web 3.0 ?</div>
          <div className="readmore w-50">
            <div className="desc">
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hnds of the people. But is it
              really fullfiling its promise ?
            </div>
            <div className="buton">
              <button className="btn btn-primary mt-3">READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingView;
