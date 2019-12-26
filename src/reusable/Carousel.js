import React, { Component } from "react";
import Slider from "react-slick";

class Carousel extends Component {

  render() {
    const { slides, show, scroll, width, arrows } = this.props

    const settings = {
      infinite: true,
      initialSlide: 0,
      arrows: arrows,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: show,
      slidesToScroll: scroll
    };

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
  arrows: false
}

export default Carousel;