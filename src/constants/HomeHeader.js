import React, { Component } from "react";

class HomeHeader extends Component {
  render() {
    return (
      <div className="pageTitle">
        <div className="video-holder">
          <video preload="preload" id="video" autoPlay="autoplay" loop="loop">
            <source
              src={require("../assets/backgrounds/background_video.mp4")}
              type="video/mp4"
            />
          </video>
        </div>
        <div className="text-left home">
          <h1 className="white">Practical Solutions, Inc.</h1>
          <h4 className="white">
            Over 20 years of experience in helping clients
            <br />
            Turn Chaos to Order
          </h4>
        </div>
      </div>
    );
  }
}

export default HomeHeader;





