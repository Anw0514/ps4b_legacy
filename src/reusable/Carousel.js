import React, { Component } from "react";
import Slider from "react-slick";
import { Grid, Icon } from "semantic-ui-react";

class Carousel extends Component {

  render() {
    console.log("rendered")
    const { slides, show, scroll, width, centered, centerPadding, arrows } = this.props

    const regularSettings = {
      infinite: true,
      initialSlide: 0,
      arrows: arrows,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: show,
      slidesToScroll: scroll
    };

    const centerSettings = {
      className: "center",
      centerMode: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      centerPadding: centerPadding,
      slidesToShow: 1,
      speed: 500
    };

    const settings = centered ? centerSettings : regularSettings

    return (
      <div className={width}>
        <Slider {...settings}>
          { slides }
        </Slider>
      </div>
    );
  }
}

Carousel.defaultProps = {
  slides: [<p>Hey developer</p>, <p>You forgot the slides</p>, <p>Go back</p>, <p>And fix it</p>], 
  show: 2, 
  scroll: 2, 
  width: "", 
  centered: false,
  centerPadding: "50px",
  arrows: false
}

export default Carousel;