import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Carousel.scss';
import BackgroundImage from '../backgroundImage/BackgroundImage';
import * as Icons from '@material-ui/icons';
import PropTypes from 'prop-types';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.carousel = null;
  }

  handleItemDragStart = event => {
    event.preventDefault();
  };

  handleSlideLeft = () => {
    this.carousel.slidePrev();
  };

  handleSlideRight = () => {
    this.carousel.slideNext();
  };

  handleItemClick = index => {
    const {onClick} = this.props;
    if(onClick) onClick(index);
  }

  renderItems = () => {
    const { images } = this.props;
    return images.map((image, index) => {
      return <BackgroundImage src={image} className="carouselImage" onDragStart={this.handleItemDragStart} onClick={() => this.handleItemClick(index)} />;
    });
  };

  render() {
    const { images } = this.props;
    return (
      <div className={`carouselWrapper ${images.length === 1 && 'singleImage'}`}>
        <AliceCarousel
          mouseDragEnabled={images.length > 1}
          buttonsDisabled={true}
          items={this.renderItems()}
          ref={instance => (this.carousel = instance)}
        />
        {images.length > 1 && (
          <>
            <div className="leftButtonWrapper">
              <div className="button" onClick={this.handleSlideLeft}>
                <Icons.ChevronLeftRounded className="arrow" />
              </div>
            </div>
            <div className="rightButtonWrapper">
              <div className="button" onClick={this.handleSlideRight}>
                <Icons.ChevronRightRounded  className="arrow" />
              </div>
            </div>
          </>
        )}
      </div>
    );
  }
}

Carousel.propTypes = {
  images: PropTypes.array,
  onClick: PropTypes.func,
}

export default Carousel;
