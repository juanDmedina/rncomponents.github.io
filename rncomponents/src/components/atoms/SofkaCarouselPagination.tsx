import React from 'react';
import {Pagination} from 'react-native-snap-carousel';
import {IPaginationCarousel} from '../../interfaces/ICarousel';

const SofkaCarouselPagination = ({
  dotsLength,
  activeDotIndex,
  containerStyle,
  dotStyle,
  inactiveDotOpacity,
  inactiveDotScale,
}: IPaginationCarousel) => {
  return (
    <Pagination
      dotsLength={dotsLength}
      activeDotIndex={activeDotIndex}
      containerStyle={containerStyle}
      dotStyle={dotStyle}
      inactiveDotOpacity={inactiveDotOpacity}
      inactiveDotScale={inactiveDotScale}
    />
  );
};

export default SofkaCarouselPagination;
