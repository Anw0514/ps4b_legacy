import React, { Component } from "react";
import Slider from "react-slick";
import { Grid, Icon } from "semantic-ui-react";

class Carousel extends Component {
  render() {

    const { slides, show, scroll, width, arrows} = this.props

    const sliderWidth = width ? width : ""
    const slidesToShow = show ? show : 2;
    const slidesToScroll = scroll ? scroll : 2
    const sliderSlides = slides ? slides : [<p>Hey developer</p>, <p>You forgot the slides</p>, <p>Go back</p>, <p>And fix it</p>];

    const sliderSettings = {
      infinite: true,
      initialSlide: 0,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      slidesToShow: slidesToShow,
      slidesToScroll: slidesToScroll
    };

    return (
      <div className={sliderWidth}>
        <Slider {...sliderSettings}>
          { sliderSlides }
        </Slider>
      </div>
    );
  }
}

export default Carousel;