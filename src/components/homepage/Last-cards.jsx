import React from "react";
import "./last-cards.css";
import image1 from "../../news-homepage-main/assets/images/image-retro-pcs.jpg";
import image2 from "../../news-homepage-main/assets/images/image-top-laptops.jpg";
import image3 from "../../news-homepage-main/assets/images/image-gaming-growth.jpg";

class LastCards extends React.Component {
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
      <div className="last-cards d-flex mt-5 mx-3">
        <div className="first-card">
          <div className="image1">
            <img src={image1} alt="image-retro-pc" />
          </div>{" "}
          <div className="description">
            <div className="num ">
              <div className="text-muted digits">01</div>
              <p className="head">Reviving Retro PCs</p>
              <p className="description text-muted">
                What happens when old PCs are given modern upgrades?
              </p>
            </div>
          </div>
        </div>
        <div className="second-card">
          {" "}
          <div className="image2">
            <img src={image2} alt="image-laptops-pc" />
          </div>
          <div className="num ">
            <div className="text-muted digits">02</div>
            <p className="head">Top 10 Laptops of 2022</p>
            <p className="description text-muted">
              Our best pick for various needs and budgets.
            </p>
          </div>
        </div>
        <div className="third-card">
          <div className="image3">
            <img src={image3} alt="image-growth-gaming" />
          </div>
          <div className="num ">
            <div className="text-muted digits">03</div>
            <p className="head">The Growth of Gaming</p>
            <p className="description text-muted">
              How the pandemic has sparked fresh opportunities.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LastCards;
