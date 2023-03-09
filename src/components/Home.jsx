import React from "react";
import Navbar from "./homepage/Navbar";
import LandingView from "./homepage/Landingpic";
import New from "./homepage/New";
import LastCards from "./homepage/Last-cards";
class HomePage extends React.Component {
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
      <div className="main-content d-flex flex-column  mx-3">
        <Navbar />
        <div className="middle mx-5">
          <div className="left d-flex  ">
            <LandingView />
            <div className="right mx-4 mt-3">
              <New />
            </div>
          </div>
        </div>
        <LastCards />
      </div>
    );
  }
}

export default HomePage;
